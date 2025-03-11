---
titleSuffix: Gez Framework Module Configuration API Reference
description: รายละเอียดเกี่ยวกับอินเทอร์เฟซการกำหนดค่า ModuleConfig ของเฟรมเวิร์ก Gez รวมถึงกฎการนำเข้าและส่งออกโมดูล การกำหนดค่าชื่อแฝง และการจัดการการพึ่งพาภายนอก ช่วยให้นักพัฒนาทำความเข้าใจระบบโมดูลของเฟรมเวิร์กได้อย่างลึกซึ้ง
head:
  - - meta
    - property: keywords
      content: Gez, ModuleConfig, การกำหนดค่าโมดูล, การนำเข้าและส่งออกโมดูล, การพึ่งพาภายนอก, การกำหนดค่าชื่อแฝง, การจัดการการพึ่งพา, Web Application Framework
---

# ModuleConfig

ModuleConfig ให้ฟังก์ชันการกำหนดค่าโมดูลสำหรับเฟรมเวิร์ก Gez ใช้เพื่อกำหนดกฎการนำเข้าและส่งออกโมดูล การกำหนดค่าชื่อแฝง และการพึ่งพาภายนอก

## นิยามประเภท

### PathType

- **นิยามประเภท**:
```ts
enum PathType {
  npm = 'npm:', 
  root = 'root:'
}
```

การแจงนับประเภทเส้นทางโมดูล:
- `npm`: หมายถึงการพึ่งพาใน node_modules
- `root`: หมายถึงไฟล์ในไดเรกทอรีรากของโปรเจกต์

### ModuleConfig

- **นิยามประเภท**:
```ts
interface ModuleConfig {
  exports?: string[]
  imports?: Record<string, string>
  externals?: Record<string, string>
}
```

อินเทอร์เฟซการกำหนดค่าโมดูล ใช้เพื่อกำหนดค่าการส่งออก การนำเข้า และการพึ่งพาภายนอกของบริการ

#### exports

รายการกำหนดค่าการส่งออก เปิดเผยหน่วยโค้ดเฉพาะในบริการ (เช่น คอมโพเนนต์ ฟังก์ชันเครื่องมือ ฯลฯ) ในรูปแบบ ESM

รองรับสองประเภท:
- `root:*`: ส่งออกไฟล์ซอร์สโค้ด เช่น 'root:src/components/button.vue'
- `npm:*`: ส่งออกการพึ่งพาบุคคลที่สาม เช่น 'npm:vue'

#### imports

การแมปกำหนดค่าการนำเข้า กำหนดค่าโมดูลระยะไกลที่ต้องการนำเข้าและเส้นทางท้องถิ่น

วิธีการติดตั้งต่างกัน การกำหนดค่าก็ต่างกัน:
- การติดตั้งซอร์สโค้ด (Workspace, Git): ต้องชี้ไปที่ไดเรกทอรี dist
- การติดตั้งแพ็คเกจ (Link, เซิร์ฟเวอร์แบบคงที่, แหล่งกระจายส่วนตัว, File): ชี้ไปที่ไดเรกทอรีแพ็คเกจโดยตรง

#### externals

การแมปการพึ่งพาภายนอก กำหนดค่าการพึ่งพาภายนอกที่ต้องการใช้ มักจะใช้การพึ่งพาจากโมดูลระยะไกล

**ตัวอย่าง**:
```ts title="entry.node.ts"
import type { GezOptions } from '@gez/core';

export default {
  modules: {
    // กำหนดค่าการส่งออก
    exports: [
      'root:src/components/button.vue',  // ส่งออกไฟล์ซอร์สโค้ด
      'root:src/utils/format.ts',
      'npm:vue',  // ส่งออกการพึ่งพาบุคคลที่สาม
      'npm:vue-router'
    ],

    // กำหนดค่าการนำเข้า
    imports: {
      // วิธีการติดตั้งซอร์สโค้ด: ต้องชี้ไปที่ไดเรกทอรี dist
      'ssr-remote': 'root:./node_modules/ssr-remote/dist',
      // วิธีการติดตั้งแพ็คเกจ: ชี้ไปที่ไดเรกทอรีแพ็คเกจโดยตรง
      'other-remote': 'root:./node_modules/other-remote'
    },

    // กำหนดค่าการพึ่งพาภายนอก
    externals: {
      'vue': 'ssr-remote/npm/vue',
      'vue-router': 'ssr-remote/npm/vue-router'
    }
  }
} satisfies GezOptions;
```

### ParsedModuleConfig

- **นิยามประเภท**:
```ts
interface ParsedModuleConfig {
  name: string
  root: string
  exports: {
    name: string
    type: PathType
    importName: string
    exportName: string
    exportPath: string
    externalName: string
  }[]
  imports: {
    name: string
    localPath: string
  }[]
  externals: Record<string, { match: RegExp; import?: string }>
}
```

การกำหนดค่าโมดูลที่ถูกแยกวิเคราะห์ แปลงการกำหนดค่าโมดูลดั้งเดิมเป็นรูปแบบภายในที่มาตรฐาน:

#### name
ชื่อของบริการปัจจุบัน
- ใช้เพื่อระบุโมดูลและสร้างเส้นทางการนำเข้า

#### root
เส้นทางไดเรกทอรีรากของบริการปัจจุบัน
- ใช้เพื่อแยกวิเคราะห์เส้นทางสัมพัทธ์และที่เก็บผลลัพธ์การสร้าง

#### exports
รายการกำหนดค่าการส่งออก
- `name`: เส้นทางการส่งออกดั้งเดิม เช่น 'npm:vue' หรือ 'root:src/components'
- `type`: ประเภทเส้นทาง (npm หรือ root)
- `importName`: ชื่อการนำเข้า รูปแบบ: '${serviceName}/${type}/${path}'
- `exportName`: เส้นทางการส่งออก เทียบกับไดเรกทอรีรากของบริการ
- `exportPath`: เส้นทางไฟล์จริง
- `externalName`: ชื่อการพึ่งพาภายนอก ใช้เพื่อระบุโมดูลนี้เมื่อนำเข้าโดยบริการอื่น

#### imports
รายการกำหนดค่าการนำเข้า
- `name`: ชื่อของบริการภายนอก
- `localPath`: เส้นทางเก็บท้องถิ่น ใช้เพื่อเก็บผลลัพธ์การสร้างของโมดูลภายนอก

#### externals
การแมปการพึ่งพาภายนอก
- แมปเส้นทางการนำเข้าโมดูลไปยังตำแหน่งโมดูลจริง
- `match`: นิพจน์ทั่วไปที่ใช้เพื่อจับคู่คำสั่งนำเข้า
- `import`: เส้นทางโมดูลจริง