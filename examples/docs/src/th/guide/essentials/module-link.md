---
titleSuffix: Gez Framework ระบบการแชร์โค้ดระหว่างเซอร์วิส
description: อธิบายรายละเอียดเกี่ยวกับกลไกการเชื่อมโยงโมดูลของ Gez Framework รวมถึงการแชร์โค้ดระหว่างเซอร์วิส การจัดการ dependencies และการใช้งาน ESM specification เพื่อช่วยให้นักพัฒนาสามารถสร้างแอปพลิเคชัน micro-frontend ที่มีประสิทธิภาพ
head:
  - - meta
    - property: keywords
      content: Gez, Module Link, ESM, การแชร์โค้ด, การจัดการ dependencies, micro-frontend
---

# การเชื่อมโยงโมดูล

Gez Framework มีกลไกการเชื่อมโยงโมดูลที่สมบูรณ์สำหรับการจัดการการแชร์โค้ดและ dependencies ระหว่างเซอร์วิส กลไกนี้ถูกพัฒนาบนพื้นฐานของ ESM (ECMAScript Module) specification ซึ่งรองรับการ export และ import โมดูลในระดับ source code พร้อมทั้งมีฟังก์ชันการจัดการ dependencies ที่ครบถ้วน

### แนวคิดหลัก

#### การ export โมดูล
การ export โมดูลคือกระบวนการที่โค้ดบางส่วนในเซอร์วิส (เช่น components, utility functions) ถูกเปิดเผยสู่ภายนอกในรูปแบบ ESM รองรับการ export 2 ประเภท:
- **การ export source code**: export ไฟล์ source code โดยตรงจากโปรเจค
- **การ export dependencies**: export third-party dependencies ที่ใช้ในโปรเจค

#### การ import โมดูล
การ import โมดูลคือกระบวนการที่เซอร์วิสหนึ่งนำเข้าโค้ดที่ถูก export จากเซอร์วิสอื่น รองรับวิธีการติดตั้งหลายแบบ:
- **การติดตั้ง source code**: เหมาะสำหรับสภาพแวดล้อมการพัฒนา รองรับการแก้ไขและ hot update แบบ real-time
- **การติดตั้ง package**: เหมาะสำหรับสภาพแวดล้อม production ใช้ build artifacts โดยตรง

### กลไกการโหลดล่วงหน้า

เพื่อเพิ่มประสิทธิภาพของเซอร์วิส Gez ได้นำกลไกการโหลดล่วงหน้าที่ชาญฉลาดมาใช้:

1. **การวิเคราะห์ dependencies**
   - วิเคราะห์ความสัมพันธ์ของ dependencies ระหว่าง components ในระหว่างการ build
   - ระบุ core modules บน critical path
   - กำหนดลำดับความสำคัญในการโหลดโมดูล

2. **กลยุทธ์การโหลด**
   - **โหลดทันที**: core modules บน critical path
   - **โหลดล่าช้า**: modules ที่ไม่ใช่ฟังก์ชันหลัก
   - **โหลดตามต้องการ**: modules ที่แสดงผลตามเงื่อนไข

3. **การปรับปรุงทรัพยากร**
   - กลยุทธ์การแบ่งโค้ดอย่างชาญฉลาด
   - การจัดการแคชในระดับโมดูล
   - การ compile และ bundle ตามความต้องการ

## การ export โมดูล

### คำอธิบายการตั้งค่า

ตั้งค่าโมดูลที่ต้องการ export ใน `entry.node.ts`:

```ts title="src/entry.node.ts"
import type { GezOptions } from '@gez/core';

export default {
    modules: {
        exports: [
            // export source code
            'root:src/components/button.vue',  // Vue component
            'root:src/utils/format.ts',        // utility function
            // export third-party dependencies
            'npm:vue',                         // Vue framework
            'npm:vue-router'                   // Vue Router
        ]
    }
} satisfies GezOptions;
```

การตั้งค่า export รองรับ 2 ประเภท:
- `root:*`: export source code โดยระบุ path จาก root directory ของโปรเจค
- `npm:*`: export third-party dependencies โดยระบุชื่อ package โดยตรง

## การ import โมดูล

### คำอธิบายการตั้งค่า

ตั้งค่าโมดูลที่ต้องการ import ใน `entry.node.ts`:

```ts title="src/entry.node.ts"
import type { GezOptions } from '@gez/core';

export default {
    modules: {
        // import configuration
        imports: {
            // source code installation: ชี้ไปที่ build artifacts directory
            'ssr-remote': 'root:./node_modules/ssr-remote/dist',
            // package installation: ชี้ไปที่ package directory
            'other-remote': 'root:./node_modules/other-remote'
        },
        // external dependencies configuration
        externals: {
            // ใช้ dependencies จาก remote modules
            'vue': 'ssr-remote/npm/vue',
            'vue-router': 'ssr-remote/npm/vue-router'
        }
    }
} satisfies GezOptions;
```

คำอธิบายการตั้งค่า:
1. **imports**: ตั้งค่า local path ของ remote modules
   - source code installation: ชี้ไปที่ build artifacts directory (dist)
   - package installation: ชี้ไปที่ package directory โดยตรง

2. **externals**: ตั้งค่า external dependencies
   - สำหรับแชร์ dependencies จาก remote modules
   - เพื่อหลีกเลี่ยงการ bundle dependencies ซ้ำ
   - รองรับการแชร์ dependencies ระหว่างหลายโมดูล

### วิธีการติดตั้ง

#### การติดตั้ง source code
เหมาะสำหรับสภาพแวดล้อมการพัฒนา รองรับการแก้ไขและ hot update แบบ real-time

1. **Workspace วิธี**
แนะนำให้ใช้ใน Monorepo projects:
```ts title="package.json"
{
    "devDependencies": {
        "ssr-remote": "workspace:*"
    }
}
```

2. **Link วิธี**
ใช้สำหรับการ debug ในเครื่อง:
```ts title="package.json"
{
    "devDependencies": {
        "ssr-remote": "link:../ssr-remote"
    }
}
```

#### การติดตั้ง package
เหมาะสำหรับสภาพแวดล้อม production ใช้ build artifacts โดยตรง

1. **NPM Registry**
ติดตั้งผ่าน npm registry:
```ts title="package.json"
{
    "dependencies": {
        "ssr-remote": "^1.0.0"
    }
}
```

2. **Static Server**
ติดตั้งผ่าน HTTP/HTTPS protocol:
```ts title="package.json"
{
    "dependencies": {
        "ssr-remote": "https://cdn.example.com/ssr-remote/1.0.0.tgz"
    }
}
```

## การ build package

### คำอธิบายการตั้งค่า

ตั้งค่า build options ใน `entry.node.ts`:

```ts title="src/entry.node.ts"
import type { GezOptions } from '@gez/core';

export default {
    // module export configuration
    modules: {
        exports: [
            'root:src/components/button.vue',
            'root:src/utils/format.ts',
            'npm:vue'
        ]
    },
    // build configuration
    pack: {
        // enable build
        enable: true,

        // output configuration
        outputs: [
            'dist/client/versions/latest.tgz',
            'dist/client/versions/1.0.0.tgz'
        ],

        // customize package.json
        packageJson: async (gez, pkg) => {
            pkg.version = '1.0.0';
            return pkg;
        },

        // pre-build processing
        onBefore: async (gez, pkg) => {
            // generate type declarations
            // run test cases
            // update documentation etc.
        },

        // post-build processing
        onAfter: async (gez, pkg, file) => {
            // upload to CDN
            // publish to npm registry
            // deploy to staging environment etc.
        }
    }
} satisfies GezOptions;
```

### Build Artifacts

```
your-app-name.tgz
├── package.json        # package information
├── index.js            # production entry
├── server/             # server resources
│   └── manifest.json   # server resource mapping
├── node/               # Node.js runtime
└── client/             # client resources
    └── manifest.json   # client resource mapping
```

### กระบวนการเผยแพร่

```bash
# 1. build production version
gez build

# 2. publish to npm
npm publish dist/versions/your-app-name.tgz
```

## แนวปฏิบัติที่ดีที่สุด

### การตั้งค่าสภาพแวดล้อมการพัฒนา
- **การจัดการ dependencies**
  - ใช้ Workspace หรือ Link วิธีในการติดตั้ง dependencies
  - จัดการ version ของ dependencies ให้เป็นเอกภาพ
  - หลีกเลี่ยงการติดตั้ง dependencies ซ้ำซ้อน

- **ประสบการณ์การพัฒนา**
  - เปิดใช้งาน hot update
  - ตั้งค่า pre-loading strategy ที่เหมาะสม
  - ปรับปรุงความเร็วในการ build

### การตั้งค่าสภาพแวดล้อม production
- **กลยุทธ์การ deploy**
  - ใช้ NPM Registry หรือ static server
  - ตรวจสอบความสมบูรณ์ของ build artifacts
  - ใช้กลไกการเผยแพร่แบบ gradual (gray release)

- **การปรับปรุงประสิทธิภาพ**
  - ตั้งค่า resource pre-loading อย่างเหมาะสม
  - ปรับปรุงลำดับการโหลดโมดูล
  - ใช้ caching strategy ที่มีประสิทธิภาพ

### การจัดการ version
- **มาตรฐาน versioning**
  - ปฏิบัติตาม semantic versioning
  - รักษา changelog ให้ละเอียด
  - ทดสอบความเข้ากันได้ของ version อย่างรอบคอบ

- **การอัปเดต dependencies**
  - อัปเดต dependencies เป็นประจำ
  - ดำเนินการ security audit เป็นระยะ
  - รักษาความสม่ำเสมอของ dependency versions