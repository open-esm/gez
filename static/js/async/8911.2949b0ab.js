"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["8911"],{97847:function(n,e,c){c.r(e),c.d(e,{default:()=>t});var s=c(31549),r=c(6603),h=c(41519);function i(n){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",h3:"h3",pre:"pre",ul:"ul",li:"li",strong:"strong"},(0,r.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h1,{id:"gezrspack-vue",children:["@gez/rspack-vue",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#gezrspack-vue",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"G\xf3i Rspack Vue cung cấp một bộ API để tạo v\xe0 cấu h\xecnh ứng dụng Rspack dựa tr\xean framework Vue, hỗ trợ ph\xe1t triển component Vue, x\xe2y dựng v\xe0 kết xuất ph\xeda m\xe1y chủ."}),"\n",(0,s.jsxs)(e.h2,{id:"c\\xe0i-đặt",children:["C\xe0i đặt",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#c\\xe0i-đặt",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["Sử dụng tr\xecnh quản l\xfd g\xf3i để c\xe0i đặt ",(0,s.jsx)(e.code,{children:"@gez/rspack-vue"})," như một phụ thuộc ph\xe1t triển:"]}),"\n",(0,s.jsx)(h.PackageManagerTabs,{command:"install @gez/rspack-vue -D"}),"\n",(0,s.jsxs)(e.h2,{id:"xuất-kiểu-dữ-liệu",children:["Xuất kiểu dữ liệu",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#xuất-kiểu-dữ-liệu",children:"#"})]}),"\n",(0,s.jsxs)(e.h3,{id:"buildtarget",children:["BuildTarget",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#buildtarget",children:"#"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"type BuildTarget = 'node' | 'client' | 'server'\n"})}),"\n",(0,s.jsx)(e.p,{children:"Kiểu m\xf4i trường đ\xedch x\xe2y dựng, định nghĩa m\xf4i trường đ\xedch của ứng dụng, được sử dụng để cấu h\xecnh c\xe1c tối ưu h\xf3a v\xe0 chức năng cụ thể trong qu\xe1 tr\xecnh x\xe2y dựng:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"node"}),": X\xe2y dựng m\xe3 chạy trong m\xf4i trường Node.js"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"client"}),": X\xe2y dựng m\xe3 chạy trong m\xf4i trường tr\xecnh duyệt"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"server"}),": X\xe2y dựng m\xe3 chạy trong m\xf4i trường m\xe1y chủ"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"rspackappconfigcontext",children:["RspackAppConfigContext",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#rspackappconfigcontext",children:"#"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"interface RspackAppConfigContext {\n  gez: Gez\n  buildTarget: BuildTarget\n  config: RspackOptions\n  options: RspackAppOptions\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"Giao diện ngữ cảnh cấu h\xecnh ứng dụng Rspack, cung cấp th\xf4ng tin ngữ cảnh c\xf3 thể truy cập trong c\xe1c h\xe0m hook cấu h\xecnh:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"gez"}),": Thể hiện của Gez Framework"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"buildTarget"}),": Mục ti\xeau x\xe2y dựng hiện tại (client/server/node)"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"config"}),": Đối tượng cấu h\xecnh Rspack"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"options"}),": T\xf9y chọn cấu h\xecnh ứng dụng"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"rspackappoptions",children:["RspackAppOptions",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#rspackappoptions",children:"#"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"interface RspackAppOptions {\n  css?: 'css' | 'js' | false\n  loaders?: {\n    styleLoader?: string\n  }\n  styleLoader?: Record<string, any>\n  cssLoader?: Record<string, any>\n  target?: {\n    web?: string[]\n    node?: string[]\n  }\n  definePlugin?: Record<string, any>\n  config?: (context: RspackAppConfigContext) => void | Promise<void>\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"Giao diện t\xf9y chọn cấu h\xecnh ứng dụng Rspack:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"css"}),": C\xe1ch thức xuất CSS, c\xf3 thể chọn 'css' (tệp độc lập) hoặc 'js' (đ\xf3ng g\xf3i v\xe0o JS), mặc định được chọn tự động dựa tr\xean m\xf4i trường: m\xf4i trường sản xuất sử dụng 'css' để tối ưu h\xf3a bộ nhớ đệm v\xe0 tải song song, m\xf4i trường ph\xe1t triển sử dụng 'js' để hỗ trợ cập nhật n\xf3ng (HMR)"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"loaders"}),": Cấu h\xecnh loader t\xf9y chỉnh"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"styleLoader"}),": T\xf9y chọn cấu h\xecnh style-loader"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"cssLoader"}),": T\xf9y chọn cấu h\xecnh css-loader"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"target"}),": Cấu h\xecnh tương th\xedch mục ti\xeau x\xe2y dựng"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"definePlugin"}),": Định nghĩa hằng số to\xe0n cục"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"config"}),": H\xe0m hook cấu h\xecnh"]}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"rspackhtmlappoptions",children:["RspackHtmlAppOptions",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#rspackhtmlappoptions",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["Kế thừa từ ",(0,s.jsx)(e.code,{children:"RspackAppOptions"}),", được sử dụng để cấu h\xecnh c\xe1c t\xf9y chọn cụ thể cho ứng dụng HTML."]}),"\n",(0,s.jsxs)(e.h2,{id:"xuất-h\\xe0m",children:["Xuất h\xe0m",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#xuất-h\\xe0m",children:"#"})]}),"\n",(0,s.jsxs)(e.h3,{id:"createrspackapp",children:["createRspackApp",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#createrspackapp",children:"#"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"function createRspackApp(gez: Gez, options?: RspackAppOptions): Promise<App>\n"})}),"\n",(0,s.jsx)(e.p,{children:"Tạo một thể hiện ứng dụng Rspack ti\xeau chuẩn."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Tham số:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"gez"}),": Thể hiện của Gez Framework"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"options"}),": T\xf9y chọn cấu h\xecnh ứng dụng Rspack"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Gi\xe1 trị trả về:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Trả về một Promise, giải quyết th\xe0nh thể hiện ứng dụng được tạo"}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"createrspackhtmlapp",children:["createRspackHtmlApp",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#createrspackhtmlapp",children:"#"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"function createRspackHtmlApp(gez: Gez, options?: RspackHtmlAppOptions): Promise<App>\n"})}),"\n",(0,s.jsx)(e.p,{children:"Tạo một thể hiện ứng dụng Rspack kiểu HTML."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Tham số:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"gez"}),": Thể hiện của Gez Framework"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"options"}),": T\xf9y chọn cấu h\xecnh ứng dụng HTML"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Gi\xe1 trị trả về:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Trả về một Promise, giải quyết th\xe0nh thể hiện ứng dụng HTML được tạo"}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"xuất-hằng-số",children:["Xuất hằng số",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#xuất-hằng-số",children:"#"})]}),"\n",(0,s.jsxs)(e.h3,{id:"rspack_loader",children:["RSPACK_LOADER",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack_loader",children:"#"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"const RSPACK_LOADER: Record<string, string> = {\n  builtinSwcLoader: 'builtin:swc-loader',\n  lightningcssLoader: 'builtin:lightningcss-loader',\n  styleLoader: 'style-loader',\n  cssLoader: 'css-loader',\n  lessLoader: 'less-loader',\n  styleResourcesLoader: 'style-resources-loader',\n  workerRspackLoader: 'worker-rspack-loader'\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"Đối tượng \xe1nh xạ định danh loader t\xedch hợp sẵn trong Rspack, cung cấp c\xe1c hằng số t\xean loader th\xf4ng dụng:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"builtinSwcLoader"}),": SWC loader t\xedch hợp sẵn trong Rspack, được sử dụng để xử l\xfd tệp TypeScript/JavaScript"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"lightningcssLoader"}),": lightningcss loader t\xedch hợp sẵn trong Rspack, được sử dụng để xử l\xfd tệp CSS với tr\xecnh bi\xean dịch hiệu suất cao"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"styleLoader"}),": Loader được sử dụng để ch\xe8n CSS v\xe0o DOM"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"cssLoader"}),": Loader được sử dụng để ph\xe2n t\xedch tệp CSS v\xe0 xử l\xfd m\xf4-đun h\xf3a CSS"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"lessLoader"}),": Loader được sử dụng để bi\xean dịch tệp Less th\xe0nh CSS"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"styleResourcesLoader"}),": Loader được sử dụng để tự động nhập t\xe0i nguy\xean kiểu to\xe0n cục (như biến, mixins)"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"workerRspackLoader"}),": Loader được sử dụng để xử l\xfd tệp Web Worker"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Sử dụng c\xe1c hằng số n\xe0y để tham chiếu đến c\xe1c loader t\xedch hợp sẵn trong cấu h\xecnh, tr\xe1nh nhập chuỗi thủ c\xf4ng:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"import { RSPACK_LOADER } from '@gez/rspack';\n\nexport default {\n  async devApp(gez) {\n    return import('@gez/rspack').then((m) =>\n      m.createRspackHtmlApp(gez, {\n        loaders: {\n          // Sử dụng hằng số để tham chiếu loader\n          styleLoader: RSPACK_LOADER.styleLoader,\n          cssLoader: RSPACK_LOADER.cssLoader,\n          lightningcssLoader: RSPACK_LOADER.lightningcssLoader\n        }\n      })\n    );\n  }\n};\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Lưu \xfd:"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"C\xe1c loader n\xe0y đ\xe3 được t\xedch hợp sẵn trong Rspack, kh\xf4ng cần c\xe0i đặt th\xeam"}),"\n",(0,s.jsx)(e.li,{children:"Khi cấu h\xecnh loader t\xf9y chỉnh, c\xf3 thể sử dụng c\xe1c hằng số n\xe0y để thay thế triển khai loader mặc định"}),"\n",(0,s.jsxs)(e.li,{children:["Một số loader (như ",(0,s.jsx)(e.code,{children:"builtinSwcLoader"}),") c\xf3 c\xe1c t\xf9y chọn cấu h\xecnh cụ thể, vui l\xf2ng tham khảo t\xe0i liệu cấu h\xecnh tương ứng"]}),"\n"]}),"\n",(0,s.jsxs)(e.h2,{id:"xuất-m\\xf4-đun",children:["Xuất m\xf4-đun",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#xuất-m\\xf4-đun",children:"#"})]}),"\n",(0,s.jsxs)(e.h3,{id:"rspack",children:["rspack",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#rspack",children:"#"})]}),"\n",(0,s.jsxs)(e.p,{children:["Xuất lại tất cả nội dung của g\xf3i ",(0,s.jsx)(e.code,{children:"@rspack/core"}),", cung cấp đầy đủ chức năng cốt l\xf5i của Rspack."]})]})}function d(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(i,{...n})}):i(n)}let t=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["vi%2Fapi%2Fapp%2Frspack-vue.mdx"]={toc:[{text:"C\xe0i đặt",id:"c\xe0i-đặt",depth:2},{text:"Xuất kiểu dữ liệu",id:"xuất-kiểu-dữ-liệu",depth:2},{text:"BuildTarget",id:"buildtarget",depth:3},{text:"RspackAppConfigContext",id:"rspackappconfigcontext",depth:3},{text:"RspackAppOptions",id:"rspackappoptions",depth:3},{text:"RspackHtmlAppOptions",id:"rspackhtmlappoptions",depth:3},{text:"Xuất h\xe0m",id:"xuất-h\xe0m",depth:2},{text:"createRspackApp",id:"createrspackapp",depth:3},{text:"createRspackHtmlApp",id:"createrspackhtmlapp",depth:3},{text:"Xuất hằng số",id:"xuất-hằng-số",depth:2},{text:"RSPACK_LOADER",id:"rspack_loader",depth:3},{text:"Xuất m\xf4-đun",id:"xuất-m\xf4-đun",depth:2},{text:"rspack",id:"rspack",depth:3}],title:"@gez/rspack-vue",headingTitle:"@gez/rspack-vue",frontmatter:{titleSuffix:"C\xf4ng cụ x\xe2y dựng Vue của Gez Framework",description:"C\xf4ng cụ x\xe2y dựng chuy\xean dụng cho Vue của Gez Framework, cung cấp hỗ trợ x\xe2y dựng ứng dụng Vue 2/3 đầy đủ, bao gồm ph\xe1t triển component, kết xuất SSR v\xe0 tối ưu hiệu năng.",head:[["meta",{property:"keywords",content:"Gez, Rspack, Vue, Vue2, Vue3, SSR, c\xf4ng cụ x\xe2y dựng, ph\xe1t triển component, kết xuất ph\xeda m\xe1y chủ, tối ưu hiệu năng"}]]}}}}]);