"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["5047"],{65012:function(e,r,n){n.r(r),n.d(r,{default:()=>l});var s=n(31549),i=n(6603);function h(e){let r=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",h3:"h3",ul:"ul",li:"li",strong:"strong",ol:"ol"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"從元件共享到原生模組化gez-微前端框架的演進之路",children:["從元件共享到原生模組化：Gez 微前端框架的演進之路",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#從元件共享到原生模組化gez-微前端框架的演進之路",children:"#"})]}),"\n",(0,s.jsxs)(r.h2,{id:"專案背景",children:["專案背景",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#專案背景",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"在過去的幾年裡，微前端架構一直在尋找一條正確的道路。然而，我們看到的是各種複雜的技術方案，它們用層層包裝和人工隔離來模擬一個理想的微前端世界。這些方案帶來了沉重的效能負擔，讓簡單的開發變得複雜，讓標準的流程變得晦澀。"}),"\n",(0,s.jsxs)(r.h3,{id:"傳統方案的局限性",children:["傳統方案的局限性",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#傳統方案的局限性",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"在實踐微前端架構的過程中，我們深刻體會到傳統方案的諸多限制："}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"效能損耗"}),"：執行時注入依賴、JS 沙箱代理，每一次操作都在消耗寶貴的效能"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"脆弱的隔離"}),"：人工打造的沙箱環境，始終無法企及瀏覽器原生的隔離能力"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"建置複雜性"}),"：為了處理依賴關係，不得不魔改建置工具，讓簡單的專案變得難以維護"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"客製化規則"}),"：特殊的部署策略、執行時處理，讓每一步都偏離了現代開發的標準流程"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"生態限制"}),"：框架耦合、客製化 API，讓技術選型被迫綁定在特定的生態中"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"這些問題在我們 2019 年的一個企業級專案中表現得尤為突出。當時，一個大型產品被拆分為十餘個獨立的業務子系統，這些子系統需要共享一套基礎元件和業務元件。最初採用的基於 npm 套件的元件共享方案，在實踐中暴露出了嚴重的維護效率問題：當共享元件發生更新時，所有依賴該元件的子系統都需要經歷完整的建置和部署流程。"}),"\n",(0,s.jsxs)(r.h2,{id:"技術演進",children:["技術演進",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#技術演進",children:"#"})]}),"\n",(0,s.jsxs)(r.h3,{id:"v10探索遠端元件",children:["v1.0：探索遠端元件",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#v10探索遠端元件",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"為解決元件共享的效率問題，Gez v1.0 引入了基於 HTTP 協定的 RemoteView 元件機制。這一方案通過執行時動態請求的方式實現了服務間的程式碼按需組裝，成功解決了建置依賴鏈過長的問題。然而，由於缺乏標準化的執行時通訊機制，服務間的狀態同步和事件傳遞仍然存在效率瓶頸。"}),"\n",(0,s.jsxs)(r.h3,{id:"v20模組聯邦嘗試",children:["v2.0：模組聯邦嘗試",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#v20模組聯邦嘗試",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["在 v2.0 版本中，我們採用了 ",(0,s.jsx)(r.a,{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Webpack 5.0"})," 的",(0,s.jsx)(r.a,{href:"https://webpack.js.org/concepts/module-federation/",target:"_blank",rel:"noopener noreferrer",children:"模組聯邦（Module Federation）"}),"技術。這一技術通過統一的模組載入機制和執行時容器，顯著提升了服務間的協同效率。但在大規模實踐中，模組聯邦的封閉式實現機制帶來了新的挑戰：難以實現精確的依賴版本管理，特別是在統一多個服務的共享依賴時，經常遇到版本衝突和執行時異常。"]}),"\n",(0,s.jsxs)(r.h2,{id:"擁抱-esm-新時代",children:["擁抱 ESM 新時代",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#擁抱-esm-新時代",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"在規劃 v3.0 版本時，我們深入觀察了前端生態的發展趨勢，發現瀏覽器原生能力的進步為微前端架構帶來了新的可能："}),"\n",(0,s.jsxs)(r.h3,{id:"標準化的模組系統",children:["標準化的模組系統",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#標準化的模組系統",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["隨著主流瀏覽器對 ",(0,s.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",target:"_blank",rel:"noopener noreferrer",children:"ES Modules"})," 的全面支援，以及 ",(0,s.jsx)(r.a,{href:"https://github.com/WICG/import-maps",target:"_blank",rel:"noopener noreferrer",children:"Import Maps"})," 規範的成熟，前端開發迎來了真正的模組化時代。根據 ",(0,s.jsx)(r.a,{href:"https://caniuse.com/?search=importmap",target:"_blank",rel:"noopener noreferrer",children:"Can I Use"})," 的統計數據，目前主流瀏覽器（Chrome >= 89、Edge >= 89、Firefox >= 108、Safari >= 16.4）對 ESM 的原生支援率已達到 93.5%，這為我們提供了以下優勢："]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"依賴管理標準化"}),"：Import Maps 提供了在瀏覽器層面解析模組依賴的能力，無需複雜的執行時注入"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"資源載入優化"}),"：瀏覽器原生的模組快取機制，顯著提升了資源載入效率"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"建置流程簡化"}),"：基於 ESM 的開發模式，使得開發環境和生產環境的建置流程更加一致"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"同時，通過相容模式的支援（Chrome >= 87、Edge >= 88、Firefox >= 78、Safari >= 14），我們可以將瀏覽器覆蓋率進一步提升至 96.81%，這讓我們能夠在保持高效能的同時，不犧牲對舊版瀏覽器的支援。"}),"\n",(0,s.jsxs)(r.h3,{id:"效能與隔離的突破",children:["效能與隔離的突破",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#效能與隔離的突破",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"原生模組系統帶來的不僅是標準化，更重要的是效能和隔離性的質的提升："}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"零執行時開銷"}),"：告別了傳統微前端方案中的 JavaScript 沙箱代理和執行時注入"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"可靠的隔離機制"}),"：ESM 嚴格的模組作用域天然提供了最可靠的隔離能力"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"精確的依賴管理"}),"：靜態導入分析讓依賴關係更加清晰，版本控制更加精確"]}),"\n"]}),"\n",(0,s.jsxs)(r.h3,{id:"建置工具的選擇",children:["建置工具的選擇",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#建置工具的選擇",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"在技術方案的落地過程中，建置工具的選擇是一個關鍵決策點。經過近一年的技術調研和實踐，我們的選擇經歷了以下演進："}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Vite 探索"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"優勢：基於 ESM 的開發伺服器，提供極致的開發體驗"}),"\n",(0,s.jsx)(r.li,{children:"挑戰：開發環境和生產環境的建置差異，帶來了一定的不確定性"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:(0,s.jsxs)(r.strong,{children:[(0,s.jsx)(r.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})," 確立"]})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["效能優勢：基於 ",(0,s.jsx)(r.a,{href:"https://www.rust-lang.org/",target:"_blank",rel:"noopener noreferrer",children:"Rust"})," 的高效能編譯，顯著提升了建置速度"]}),"\n",(0,s.jsx)(r.li,{children:"生態支援：與 Webpack 生態的高度相容性，降低了遷移成本"}),"\n",(0,s.jsx)(r.li,{children:"ESM 支援：通過 Rslib 專案的實踐，驗證了其在 ESM 建置方面的可靠性"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"這一決策讓我們在保持開發體驗的同時，獲得了更穩定的生產環境支援。基於 ESM 和 Rspack 的組合，我們最終建置了一個高效能、低侵入性的微前端解決方案。"}),"\n",(0,s.jsxs)(r.h2,{id:"未來展望",children:["未來展望",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#未來展望",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"在未來的發展規劃中，Gez 框架將重點關注以下三個方向："}),"\n",(0,s.jsxs)(r.h3,{id:"import-maps-深度優化",children:["Import Maps 深度優化",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#import-maps-深度優化",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"動態依賴管理"}),"：實現執行時依賴版本的智慧調度，解決多應用間的依賴衝突"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"預載策略"}),"：基於路由分析的智慧預載，提升資源載入效率"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"建置優化"}),"：自動生成最優的 Import Maps 配置，減少開發者的手動配置成本"]}),"\n"]}),"\n",(0,s.jsxs)(r.h3,{id:"框架無關的路由方案",children:["框架無關的路由方案",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#框架無關的路由方案",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"統一路由抽象"}),"：設計框架無關的路由介面，支援 Vue、React 等主流框架"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"微應用路由"}),"：實現應用間的路由聯動，保持 URL 與應用狀態的一致性"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"路由中介軟體"}),"：提供可擴充的中介軟體機制，支援權限控制、頁面轉場等功能"]}),"\n"]}),"\n",(0,s.jsxs)(r.h3,{id:"跨框架通訊最佳實踐",children:["跨框架通訊最佳實踐",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#跨框架通訊最佳實踐",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"範例應用"}),"：提供完整的跨框架通訊範例，涵蓋 Vue、React、Preact 等主流框架"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"狀態同步"}),"：基於 ESM 實現的輕量級狀態共享方案"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"事件匯流排"}),"：標準化的事件通訊機制，支援應用間的解耦通訊"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"通過這些優化和擴充，我們期望讓 Gez 成為一個更加完善、易用的微前端解決方案，為開發者提供更好的開發體驗和更高的開發效率。"})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}let l=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh-TW%2Fblog%2Fbirth-of-gez.md"]={toc:[{text:"專案背景",id:"專案背景",depth:2},{text:"傳統方案的局限性",id:"傳統方案的局限性",depth:3},{text:"技術演進",id:"技術演進",depth:2},{text:"v1.0：探索遠端元件",id:"v10探索遠端元件",depth:3},{text:"v2.0：模組聯邦嘗試",id:"v20模組聯邦嘗試",depth:3},{text:"擁抱 ESM 新時代",id:"擁抱-esm-新時代",depth:2},{text:"標準化的模組系統",id:"標準化的模組系統",depth:3},{text:"效能與隔離的突破",id:"效能與隔離的突破",depth:3},{text:"建置工具的選擇",id:"建置工具的選擇",depth:3},{text:"未來展望",id:"未來展望",depth:2},{text:"Import Maps 深度優化",id:"import-maps-深度優化",depth:3},{text:"框架無關的路由方案",id:"框架無關的路由方案",depth:3},{text:"跨框架通訊最佳實踐",id:"跨框架通訊最佳實踐",depth:3}],title:"從元件共享到原生模組化：Gez 微前端框架的演進之路",headingTitle:"從元件共享到原生模組化：Gez 微前端框架的演進之路",frontmatter:{titleSuffix:"從微前端困境到 ESM 創新：Gez 框架的演進之路",description:"深入探討 Gez 框架從傳統微前端架構的困境到基於 ESM 的創新突破，分享框架在效能優化、依賴管理和建置工具選型等方面的技術實踐經驗。",head:[["meta",{property:"keywords",content:"Gez, 微前端框架, ESM, Import Maps, Rspack, 模組聯邦, 依賴管理, 效能優化, 技術演進, 伺服器端渲染"}]],sidebar:!1}}}}]);