"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["9003"],{15760:function(e,n,s){s.r(n),s.d(n,{default:()=>t});var i=s(31549),r=s(6603);function d(e){let n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",h2:"h2",h3:"h3",h4:"h4",ul:"ul",li:"li",strong:"strong"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"manifestjson",children:["ManifestJson",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#manifestjson",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"manifest.json"})," is een manifestbestand dat door het Gez-framework wordt gegenereerd tijdens het bouwproces. Het wordt gebruikt om informatie over de bouwproducten van de service vast te leggen. Het biedt een uniforme interface voor het beheren van bouwproducten, exportbestanden en bronstatistieken."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",meta:'title="dist/client/manifest.json"',children:'{\n  "name": "your-app-name",\n  "exports": {\n    "src/entry.client": "src/entry.client.8537e1c3.final.js",\n    "src/title/index": "src/title/index.2d79c0c2.final.js"\n  },\n  "buildFiles": [\n    "src/entry.client.2e0a89bc.final.css",\n    "images/cat.ed79ef6b.final.jpeg",\n    "chunks/830.63b8fd4f.final.css",\n    "images/running-dog.76197e20.final.gif",\n    "chunks/473.42c1ae75.final.js",\n    "images/starry.d914a632.final.jpg",\n    "images/sun.429a7bc5.final.png",\n    "chunks/473.63b8fd4f.final.css",\n    "images/logo.3923d727.final.svg",\n    "chunks/534.63b8fd4f.final.css",\n    "src/title/index.2d79c0c2.final.js",\n    "src/entry.client.8537e1c3.final.js",\n    "chunks/534.e85c5440.final.js",\n    "chunks/830.cdbdf067.final.js"\n  ],\n  "chunks": {\n    "your-app-name@src/views/home.ts": {\n      "js": "chunks/534.e85c5440.final.js",\n      "css": ["chunks/534.63b8fd4f.final.css"],\n      "resources": [\n        "images/cat.ed79ef6b.final.jpeg",\n        "images/logo.3923d727.final.svg",\n        "images/running-dog.76197e20.final.gif",\n        "images/starry.d914a632.final.jpg",\n        "images/sun.429a7bc5.final.png"\n      ],\n      "sizes": {\n        "js": 7976,\n        "css": 5739,\n        "resource": 796974\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"type-definitie",children:["Type Definitie",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#type-definitie",children:"#"})]}),"\n",(0,i.jsxs)(n.h3,{id:"manifestjson-1",children:["ManifestJson",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#manifestjson-1",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface ManifestJson {\n  name: string;\n  exports: Record<string, string>;\n  buildFiles: string[];\n  chunks: Record<string, ManifestJsonChunks>;\n}\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"name",children:["name",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#name",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"De servicenaam, afkomstig van de GezOptions.name configuratie."}),"\n",(0,i.jsxs)(n.h4,{id:"exports",children:["exports",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#exports",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),": ",(0,i.jsx)(n.code,{children:"Record<string, string>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"De mapping van exportbestanden, waarbij de key het pad van het bronbestand is en de value het pad van het gebouwde bestand."}),"\n",(0,i.jsxs)(n.h4,{id:"buildfiles",children:["buildFiles",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#buildfiles",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),": ",(0,i.jsx)(n.code,{children:"string[]"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"De volledige lijst van bouwproducten, inclusief alle gegenereerde bestandspaden."}),"\n",(0,i.jsxs)(n.h4,{id:"chunks",children:["chunks",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#chunks",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),": ",(0,i.jsx)(n.code,{children:"Record<string, ManifestJsonChunks>"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"De relatie tussen bronbestanden en gecompileerde producten, waarbij de key het pad van het bronbestand is en de value de compilatie-informatie."}),"\n",(0,i.jsxs)(n.h3,{id:"manifestjsonchunks",children:["ManifestJsonChunks",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#manifestjsonchunks",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface ManifestJsonChunks {\n  js: string;\n  css: string[];\n  resources: string[];\n  sizes: ManifestJsonChunkSizes;\n}\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"js",children:["js",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#js",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Het pad van het gecompileerde JS-bestand voor het huidige bronbestand."}),"\n",(0,i.jsxs)(n.h4,{id:"css",children:["css",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#css",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),": ",(0,i.jsx)(n.code,{children:"string[]"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"De lijst met CSS-bestandspaden die aan het huidige bronbestand zijn gekoppeld."}),"\n",(0,i.jsxs)(n.h4,{id:"resources",children:["resources",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#resources",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),": ",(0,i.jsx)(n.code,{children:"string[]"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"De lijst met andere bronbestandspaden die aan het huidige bronbestand zijn gekoppeld."}),"\n",(0,i.jsxs)(n.h4,{id:"sizes",children:["sizes",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sizes",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),": ",(0,i.jsx)(n.code,{children:"ManifestJsonChunkSizes"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Statistieken over de grootte van de bouwproducten."}),"\n",(0,i.jsxs)(n.h3,{id:"manifestjsonchunksizes",children:["ManifestJsonChunkSizes",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#manifestjsonchunksizes",children:"#"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface ManifestJsonChunkSizes {\n  js: number;\n  css: number;\n  resource: number;\n}\n"})}),"\n",(0,i.jsxs)(n.h4,{id:"js-1",children:["js",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#js-1",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"De grootte van het JS-bestand (in bytes)."}),"\n",(0,i.jsxs)(n.h4,{id:"css-1",children:["css",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#css-1",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"De grootte van het CSS-bestand (in bytes)."}),"\n",(0,i.jsxs)(n.h4,{id:"resource",children:["resource",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#resource",children:"#"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),": ",(0,i.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"De grootte van het bronbestand (in bytes)."})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}let t=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["nl%2Fapi%2Fcore%2Fmanifest-json.md"]={toc:[{text:"Type Definitie",id:"type-definitie",depth:2},{text:"ManifestJson",id:"manifestjson-1",depth:3},{text:"name",id:"name",depth:4},{text:"exports",id:"exports",depth:4},{text:"buildFiles",id:"buildfiles",depth:4},{text:"chunks",id:"chunks",depth:4},{text:"ManifestJsonChunks",id:"manifestjsonchunks",depth:3},{text:"js",id:"js",depth:4},{text:"css",id:"css",depth:4},{text:"resources",id:"resources",depth:4},{text:"sizes",id:"sizes",depth:4},{text:"ManifestJsonChunkSizes",id:"manifestjsonchunksizes",depth:3},{text:"js",id:"js-1",depth:4},{text:"css",id:"css-1",depth:4},{text:"resource",id:"resource",depth:4}],title:"ManifestJson",headingTitle:"ManifestJson",frontmatter:{titleSuffix:"Gez Framework Bouwmanifest Bestandsreferentie",description:"Gedetailleerde uitleg over de structuur van het bouwmanifestbestand (manifest.json) van het Gez-framework, inclusief beheer van bouwproducten, bestandsmapping en bronstatistieken, om ontwikkelaars te helpen het bouwsysteem te begrijpen en te gebruiken.",head:[["meta",{property:"keywords",content:"Gez, ManifestJson, Bouwmanifest, Bronbeheer, Bouwproducten, Bestandsmapping, API"}]]}}}}]);