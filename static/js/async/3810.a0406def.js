"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["3810"],{92378:function(e,n,r){r.r(n),r.d(n,{default:()=>h});var d=r(31549),s=r(6603);function i(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2",h3:"h3",h4:"h4",ul:"ul",li:"li",strong:"strong"},(0,s.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"app",children:["App",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#app",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"App"})," เป็นนามธรรมของแอปพลิเคชันใน Gez เฟรมเวิร์ก ที่ให้อินเทอร์เฟซแบบรวมศูนย์เพื่อจัดการวงจรชีวิตแอปพลิเคชัน ทรัพยากรแบบคงที่ และการเรนเดอร์ฝั่งเซิร์ฟเวอร์"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",meta:'title="entry.node.ts"',children:"export default {\n  // การกำหนดค่าสำหรับสภาพแวดล้อมการพัฒนา\n  async devApp(gez) {\n    return import('@gez/rspack').then((m) =>\n      m.createRspackHtmlApp(gez, {\n        config(rc) {\n          // การกำหนดค่า Rspack แบบกำหนดเอง\n        }\n      })\n    );\n  }\n}\n"})}),"\n",(0,d.jsxs)(n.h2,{id:"นิยามประเภท",children:["นิยามประเภท",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#นิยามประเภท",children:"#"})]}),"\n",(0,d.jsxs)(n.h3,{id:"app-1",children:["App",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#app-1",children:"#"})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"interface App {\n  middleware: Middleware;\n  render: (options?: RenderContextOptions) => Promise<RenderContext>;\n  build?: () => Promise<boolean>;\n  destroy?: () => Promise<boolean>;\n}\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"middleware",children:["middleware",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#middleware",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"ประเภท"}),": ",(0,d.jsx)(n.code,{children:"Middleware"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"มิดเดิลแวร์สำหรับจัดการทรัพยากรแบบคงที่"}),"\n",(0,d.jsx)(n.p,{children:"สภาพแวดล้อมการพัฒนา:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"จัดการคำขอทรัพยากรแบบคงที่จากซอร์สโค้ด"}),"\n",(0,d.jsx)(n.li,{children:"รองรับการคอมไพล์แบบเรียลไทม์และฮอตรีโหลด"}),"\n",(0,d.jsx)(n.li,{children:"ใช้กลยุทธ์แคชแบบ no-cache"}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"สภาพแวดล้อมการผลิต:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"จัดการทรัพยากรแบบคงที่ที่ถูกสร้างแล้ว"}),"\n",(0,d.jsx)(n.li,{children:"รองรับการแคชระยะยาวสำหรับไฟล์ที่ไม่เปลี่ยนแปลง (.final.xxx)"}),"\n",(0,d.jsx)(n.li,{children:"กลยุทธ์การโหลดทรัพยากรที่ได้รับการปรับปรุง"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"server.use(gez.middleware);\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"render",children:["render",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#render",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"ประเภท"}),": ",(0,d.jsx)(n.code,{children:"(options?: RenderContextOptions) => Promise<RenderContext>"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"ฟังก์ชันการเรนเดอร์ฝั่งเซิร์ฟเวอร์ ให้การใช้งานที่แตกต่างกันตามสภาพแวดล้อม:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"สภาพแวดล้อมการผลิต (start): โหลดไฟล์เข้าสู่เซิร์ฟเวอร์ที่ถูกสร้างแล้ว (entry.server) เพื่อทำการเรนเดอร์"}),"\n",(0,d.jsx)(n.li,{children:"สภาพแวดล้อมการพัฒนา (dev): โหลดไฟล์เข้าสู่เซิร์ฟเวอร์จากซอร์สโค้ดเพื่อทำการเรนเดอร์"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"const rc = await gez.render({\n  params: { url: '/page' }\n});\nres.end(rc.html);\n"})}),"\n",(0,d.jsxs)(n.h4,{id:"build",children:["build",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"ประเภท"}),": ",(0,d.jsx)(n.code,{children:"() => Promise<boolean>"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"ฟังก์ชันการสร้างสำหรับสภาพแวดล้อมการผลิต ใช้สำหรับการแพ็คเกจและปรับปรุงทรัพยากร ส่งคืน true หากการสร้างสำเร็จ และ false หากล้มเหลว"}),"\n",(0,d.jsxs)(n.h4,{id:"destroy",children:["destroy",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#destroy",children:"#"})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"ประเภท"}),": ",(0,d.jsx)(n.code,{children:"() => Promise<boolean>"})]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"ฟังก์ชันการทำความสะอาดทรัพยากร ใช้สำหรับการปิดเซิร์ฟเวอร์ การตัดการเชื่อมต่อ ฯลฯ ส่งคืน true หากการทำความสะอาดสำเร็จ และ false หากล้มเหลว"})]})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(i,{...e})}):i(e)}let h=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["th%2Fapi%2Fcore%2Fapp.md"]={toc:[{text:"นิยามประเภท",id:"นิยามประเภท",depth:2},{text:"App",id:"app-1",depth:3},{text:"middleware",id:"middleware",depth:4},{text:"render",id:"render",depth:4},{text:"build",id:"build",depth:4},{text:"destroy",id:"destroy",depth:4}],title:"App",headingTitle:"App",frontmatter:{titleSuffix:"Gez เฟรมเวิร์กอินเทอร์เฟซแอปพลิเคชันนามธรรม",description:"รายละเอียดเกี่ยวกับอินเทอร์เฟซ App ของ Gez เฟรมเวิร์ก รวมถึงการจัดการวงจรชีวิตแอปพลิเคชัน การจัดการทรัพยากรแบบคงที่ และฟังก์ชันการเรนเดอร์ฝั่งเซิร์ฟเวอร์ เพื่อช่วยให้นักพัฒนาทำความเข้าใจและใช้ฟังก์ชันหลักของแอปพลิเคชัน",head:[["meta",{property:"keywords",content:"Gez, App, แอปพลิเคชันนามธรรม, วงจรชีวิต, ทรัพยากรแบบคงที่, การเรนเดอร์ฝั่งเซิร์ฟเวอร์, API"}]]}}}}]);