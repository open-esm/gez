import*as e from"ssr-vue2-remote/npm/vue";import*as t from"ssr-vue2-remote/src/components/index";var r,o,n,i,a,s,u,l={946:function(t){t.exports=e},171:function(e){e.exports=t}},p={};function c(e){var t=p[e];if(void 0!==t)return t.exports;var r=p[e]={exports:{}};return l[e](r,r.exports,c),r.exports}c.m=l,c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce((t,r)=>(c.f[r](e,t),t),[])),c.k=e=>"chunks/"+e+".24b633a1.final.css",c.u=e=>"chunks/"+e+".bfe370aa.final.js",(()=>{c.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}})()})(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;if("string"==typeof import.meta.url&&(e=import.meta.url),!e)throw Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e+"../"})(),r={},o="__ssr_vue__remote__",n=(e,t)=>{r[t]=0},i="data-webpack-loading",a=function(e,t,r,n,a){var s,u,l="chunk-"+e;if(!n){for(var p=document.getElementsByTagName("link"),d=0;d<p.length;d++){var f=p[d],m=f.getAttribute("href")||f.href;if(m&&!m.startsWith(c.p)&&(m=c.p+(m.startsWith("/")?m.slice(1):m)),"stylesheet"==f.rel&&(m&&m.startsWith(t)||f.getAttribute("data-webpack")==o+":"+l)){s=f;break}}if(!r)return s}s||(u=!0,s=document.createElement("link"),c.nc&&s.setAttribute("nonce",c.nc),s.setAttribute("data-webpack",o+":"+l),a&&s.setAttribute("fetchpriority",a),s.setAttribute(i,1),s.rel="stylesheet",s.href=t);var b=function(e,t){if(s.onerror=s.onload=null,s.removeAttribute(i),clearTimeout(h),t&&"load"!=t.type&&s.parentNode.removeChild(s),r(t),e)return e(t)};if(s.getAttribute(i)){var h=setTimeout(b.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=b.bind(null,s.onerror),s.onload=b.bind(null,s.onload)}else b(void 0,{type:"load",target:s});return n?document.head.insertBefore(s,n):u&&document.head.appendChild(s),s},c.f.css=function(e,t,o){var i=c.o(r,e)?r[e]:void 0;if(0!==i){if(i)t.push(i[2]);else if(81==e){var s=new Promise(function(t,o){i=r[e]=[t,o]});t.push(i[2]=s);var u=c.p+c.k(e),l=Error();a(e,u,function(t){if(c.o(r,e)&&(0!==(i=r[e])&&(r[e]=void 0),i)){if("load"!==t.type){var o=t&&t.type,a=t&&t.target&&t.target.src;l.message="Loading css chunk "+e+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,i[1](l)}else n(c.m,e),i[0]()}},void 0,o)}else r[e]=0}},s={891:0},u=e=>{var t,r,o=e.__webpack_ids__,n=e.__webpack_modules__,i=e.__webpack_runtime__,a=0;for(t in n)c.o(n,t)&&(c.m[t]=n[t]);for(i&&i(c);a<o.length;a++)r=o[a],c.o(s,r)&&s[r]&&s[r][0](),s[o[a]]=0},c.f.j=function(e,t){var r=c.o(s,e)?s[e]:void 0;if(0!==r){if(r)t.push(r[1]);else{var o=import("../"+c.u(e)).then(u,t=>{throw 0!==s[e]&&(s[e]=void 0),t}),o=Promise.race([o,new Promise(t=>{r=s[e]=[t]})]);t.push(r[1]=o)}}};var d=c(946);let f=(0,d.defineAsyncComponent)(()=>c.e("81").then(c.bind(c,607)));({app:new d.default({render:e=>e(f)})}).app.$mount('[data-server-rendered="true"]');