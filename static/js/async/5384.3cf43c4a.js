"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["5384"],{36745:function(e,r,i){i.r(r),i.d(r,{default:()=>d});var a=i(31549),l=i(6603);function n(e){let r=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",h3:"h3",ul:"ul",li:"li",div:"div",pre:"pre",ol:"ol"},(0,l.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.h1,{id:"ortam-gereksinimleri",children:["Ortam Gereksinimleri",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#ortam-gereksinimleri",children:"#"})]}),"\n",(0,a.jsx)(r.p,{children:"Bu belge, bu \xe7er\xe7eveyi kullanmak i\xe7in gereken ortam gereksinimlerini, Node.js ortamı ve tarayıcı uyumluluğunu a\xe7ıklar."}),"\n",(0,a.jsxs)(r.h2,{id:"nodejs-ortamı",children:["Node.js Ortamı",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#nodejs-ortamı",children:"#"})]}),"\n",(0,a.jsxs)(r.p,{children:["\xc7er\xe7eve, Node.js s\xfcr\xfcm\xfc >= 22.6 gerektirir, bu \xf6zellikle TypeScript t\xfcr i\xe7e aktarımlarını desteklemek i\xe7in kullanılır (",(0,a.jsx)(r.code,{children:"--experimental-strip-types"})," bayrağı aracılığıyla), ek derleme adımlarına gerek yoktur."]}),"\n",(0,a.jsxs)(r.h2,{id:"tarayıcı-uyumluluğu",children:["Tarayıcı Uyumluluğu",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#tarayıcı-uyumluluğu",children:"#"})]}),"\n",(0,a.jsxs)(r.p,{children:["\xc7er\xe7eve, daha geniş bir tarayıcı desteği sağlamak i\xe7in varsayılan olarak uyumluluk modunda oluşturulur. Ancak, tam tarayıcı uyumluluk desteği sağlamak i\xe7in ",(0,a.jsx)(r.a,{href:"https://github.com/guybedford/es-module-shims",target:"_blank",rel:"noopener noreferrer",children:"es-module-shims"})," bağımlılığını manuel olarak eklemeniz gerektiğini unutmayın."]}),"\n",(0,a.jsxs)(r.h3,{id:"uyumluluk-modu-varsayılan",children:["Uyumluluk Modu (Varsayılan)",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#uyumluluk-modu-varsayılan",children:"#"})]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"\uD83C\uDF10 Chrome: >= 87"}),"\n",(0,a.jsx)(r.li,{children:"\uD83D\uDD37 Edge: >= 88"}),"\n",(0,a.jsx)(r.li,{children:"\uD83E\uDD8A Firefox: >= 78"}),"\n",(0,a.jsx)(r.li,{children:"\uD83E\uDDED Safari: >= 14"}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"https://caniuse.com/?search=dynamic%20import",target:"_blank",rel:"noopener noreferrer",children:"Can I Use"})," istatistiklerine g\xf6re, uyumluluk modunda tarayıcı kapsama oranı %96.81'dir."]}),"\n",(0,a.jsxs)(r.h3,{id:"yerel-destek-modu",children:["Yerel Destek Modu",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#yerel-destek-modu",children:"#"})]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"\uD83C\uDF10 Chrome: >= 89"}),"\n",(0,a.jsx)(r.li,{children:"\uD83D\uDD37 Edge: >= 89"}),"\n",(0,a.jsx)(r.li,{children:"\uD83E\uDD8A Firefox: >= 108"}),"\n",(0,a.jsx)(r.li,{children:"\uD83E\uDDED Safari: >= 16.4"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"Yerel destek modu aşağıdaki avantajlara sahiptir:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Sıfır \xe7alışma zamanı maliyeti, ek mod\xfcl y\xfckleyiciye gerek yok"}),"\n",(0,a.jsx)(r.li,{children:"Tarayıcı tarafından yerel olarak \xe7\xf6z\xfcmlenir, daha hızlı y\xfcr\xfctme hızı"}),"\n",(0,a.jsx)(r.li,{children:"Daha iyi kod b\xf6lme ve isteğe bağlı y\xfckleme yetenekleri"}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"https://caniuse.com/?search=importmap",target:"_blank",rel:"noopener noreferrer",children:"Can I Use"})," istatistiklerine g\xf6re, uyumluluk modunda tarayıcı kapsama oranı %93.5'tir."]}),"\n",(0,a.jsxs)(r.h3,{id:"uyumluluk-desteğini-etkinleştirme",children:["Uyumluluk Desteğini Etkinleştirme",(0,a.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#uyumluluk-desteğini-etkinleştirme",children:"#"})]}),"\n",(0,a.jsxs)(r.div,{className:"rspress-directive warning",children:[(0,a.jsx)(r.div,{className:"rspress-directive-title",children:"\xd6nemli Uyarı"}),(0,a.jsxs)(r.div,{className:"rspress-directive-content",children:[(0,a.jsxs)(r.p,{children:["\xc7er\xe7eve varsayılan olarak uyumluluk modunda oluşturulsa da, eski tarayıcılar i\xe7in tam destek sağlamak i\xe7in projenize ",(0,a.jsx)(r.a,{href:"https://github.com/guybedford/es-module-shims",target:"_blank",rel:"noopener noreferrer",children:"es-module-shims"})," bağımlılığını eklemeniz gerekmektedir."]}),"\n"]})]}),"\n",(0,a.jsx)(r.p,{children:"HTML dosyasına aşağıdaki betiği ekleyin:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-html",children:'\x3c!-- Geliştirme ortamı --\x3e\n<script async src="https://ga.jspm.io/npm:es-module-shims@2.0.10/dist/es-module-shims.js"><\/script>\n\n\x3c!-- \xdcretim ortamı --\x3e\n<script async src="/path/to/es-module-shims.js"><\/script>\n'})}),"\n",(0,a.jsxs)(r.div,{className:"rspress-directive tip",children:[(0,a.jsx)(r.div,{className:"rspress-directive-title",children:"En İyi Uygulamalar"}),(0,a.jsxs)(r.div,{className:"rspress-directive-content",children:["\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\xdcretim ortamı \xf6nerileri:","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"es-module-shims'i kendi sunucunuza dağıtın"}),"\n",(0,a.jsx)(r.li,{children:"Kaynak y\xfcklemenin kararlılığını ve erişim hızını sağlayın"}),"\n",(0,a.jsx)(r.li,{children:"Potansiyel g\xfcvenlik risklerinden ka\xe7ının"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["Performans d\xfcş\xfcnceleri:","\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Uyumluluk modu k\xfc\xe7\xfck bir performans maliyeti getirir"}),"\n",(0,a.jsx)(r.li,{children:"Hedef kullanıcı kitlesinin tarayıcı dağılımına g\xf6re etkinleştirilip etkinleştirilmeyeceğine karar verebilirsiniz"}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})]})}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,l.ah)(),e.components);return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(n,{...e})}):n(e)}let d=s;s.__RSPRESS_PAGE_META={},s.__RSPRESS_PAGE_META["tr%2Fguide%2Fstart%2Fenvironment.md"]={toc:[{text:"Node.js Ortamı",id:"nodejs-ortamı",depth:2},{text:"Tarayıcı Uyumluluğu",id:"tarayıcı-uyumluluğu",depth:2},{text:"Uyumluluk Modu (Varsayılan)",id:"uyumluluk-modu-varsayılan",depth:3},{text:"Yerel Destek Modu",id:"yerel-destek-modu",depth:3},{text:"Uyumluluk Desteğini Etkinleştirme",id:"uyumluluk-desteğini-etkinleştirme",depth:3}],title:"Ortam Gereksinimleri",headingTitle:"Ortam Gereksinimleri",frontmatter:{titleSuffix:"Gez \xc7er\xe7evesi Uyumluluk Rehberi",description:"Gez \xe7er\xe7evesinin ortam gereksinimlerini detaylı olarak a\xe7ıklar, Node.js s\xfcr\xfcm gereksinimlerini ve tarayıcı uyumluluk a\xe7ıklamalarını i\xe7erir, geliştiricilerin geliştirme ortamını doğru şekilde yapılandırmasına yardımcı olur.",head:[["meta",{property:"keywords",content:"Gez, Node.js, tarayıcı uyumluluğu, TypeScript, es-module-shims, ortam yapılandırması"}]]}}}}]);