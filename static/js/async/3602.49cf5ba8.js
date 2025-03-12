"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["3602"],{40119:function(e,r,n){n.r(r),n.d(r,{default:()=>d});var a=n(31549),i=n(6603);function l(e){let r=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2",h3:"h3",h4:"h4",ul:"ul",li:"li",strong:"strong"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.h1,{id:"app",children:["App",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#app",children:"#"})]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"App"}),", Gez \xe7er\xe7evesinin uygulama soyutlamasıdır ve uygulamanın yaşam d\xf6ng\xfcs\xfcn\xfc, statik kaynakları ve sunucu tarafı renderlamayı y\xf6netmek i\xe7in birleşik bir aray\xfcz sağlar."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-ts",meta:'title="entry.node.ts"',children:"export default {\n  // Geliştirme ortamı yapılandırması\n  async devApp(gez) {\n    return import('@gez/rspack').then((m) =>\n      m.createRspackHtmlApp(gez, {\n        config(rc) {\n          // \xd6zel Rspack yapılandırması\n        }\n      })\n    );\n  }\n}\n"})}),"\n",(0,a.jsxs)(r.h2,{id:"t\\xfcr-tanımları",children:["T\xfcr Tanımları",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#t\\xfcr-tanımları",children:"#"})]}),"\n",(0,a.jsxs)(r.h3,{id:"app-1",children:["App",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#app-1",children:"#"})]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-ts",children:"interface App {\n  middleware: Middleware;\n  render: (options?: RenderContextOptions) => Promise<RenderContext>;\n  build?: () => Promise<boolean>;\n  destroy?: () => Promise<boolean>;\n}\n"})}),"\n",(0,a.jsxs)(r.h4,{id:"middleware",children:["middleware",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#middleware",children:"#"})]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"T\xfcr"}),": ",(0,a.jsx)(r.code,{children:"Middleware"})]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"Statik kaynak işleme middleware'i."}),"\n",(0,a.jsx)(r.p,{children:"Geliştirme ortamı:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Kaynak kodun statik kaynak isteklerini işler"}),"\n",(0,a.jsx)(r.li,{children:"Ger\xe7ek zamanlı derleme ve sıcak yenileme desteği"}),"\n",(0,a.jsx)(r.li,{children:"no-cache \xf6nbellek stratejisi kullanır"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"\xdcretim ortamı:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Derlenmiş statik kaynakları işler"}),"\n",(0,a.jsx)(r.li,{children:"Değişmez dosyalar i\xe7in uzun s\xfcreli \xf6nbellek desteği (.final.xxx)"}),"\n",(0,a.jsx)(r.li,{children:"Optimize edilmiş kaynak y\xfckleme stratejisi"}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-ts",children:"server.use(gez.middleware);\n"})}),"\n",(0,a.jsxs)(r.h4,{id:"render",children:["render",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#render",children:"#"})]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"T\xfcr"}),": ",(0,a.jsx)(r.code,{children:"(options?: RenderContextOptions) => Promise<RenderContext>"})]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"Sunucu tarafı renderlama fonksiyonu. \xc7alışma ortamına g\xf6re farklı uygulamalar sağlar:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"\xdcretim ortamı (start): Derlenmiş sunucu giriş dosyasını (entry.server) y\xfckleyerek renderlama yapar"}),"\n",(0,a.jsx)(r.li,{children:"Geliştirme ortamı (dev): Kaynak kodundaki sunucu giriş dosyasını y\xfckleyerek renderlama yapar"}),"\n"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-ts",children:"const rc = await gez.render({\n  params: { url: '/page' }\n});\nres.end(rc.html);\n"})}),"\n",(0,a.jsxs)(r.h4,{id:"build",children:["build",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#build",children:"#"})]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"T\xfcr"}),": ",(0,a.jsx)(r.code,{children:"() => Promise<boolean>"})]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"\xdcretim ortamı derleme fonksiyonu. Kaynak paketleme ve optimizasyon i\xe7in kullanılır. Derleme başarılı olursa true, başarısız olursa false d\xf6ner."}),"\n",(0,a.jsxs)(r.h4,{id:"destroy",children:["destroy",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#destroy",children:"#"})]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"T\xfcr"}),": ",(0,a.jsx)(r.code,{children:"() => Promise<boolean>"})]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"Kaynak temizleme fonksiyonu. Sunucuyu kapatma, bağlantıları kesme vb. i\xe7in kullanılır. Temizleme başarılı olursa true, başarısız olursa false d\xf6ner."})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}let d=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["tr%2Fapi%2Fcore%2Fapp.md"]={toc:[{text:"T\xfcr Tanımları",id:"t\xfcr-tanımları",depth:2},{text:"App",id:"app-1",depth:3},{text:"middleware",id:"middleware",depth:4},{text:"render",id:"render",depth:4},{text:"build",id:"build",depth:4},{text:"destroy",id:"destroy",depth:4}],title:"App",headingTitle:"App",frontmatter:{titleSuffix:"Gez \xc7er\xe7evesi Uygulama Soyutlama Aray\xfcz\xfc",description:"Gez \xe7er\xe7evesinin App aray\xfcz\xfcn\xfc detaylı olarak a\xe7ıklar, uygulama yaşam d\xf6ng\xfcs\xfc y\xf6netimi, statik kaynak işleme ve sunucu tarafı renderlama \xf6zelliklerini i\xe7erir, geliştiricilerin uygulama \xe7ekirdek işlevlerini anlamasına ve kullanmasına yardımcı olur.",head:[["meta",{property:"keywords",content:"Gez, App, Uygulama Soyutlama, Yaşam D\xf6ng\xfcs\xfc, Statik Kaynaklar, Sunucu Tarafı Renderlama, API"}]]}}}}]);