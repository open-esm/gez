"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["9840"],{21239:function(e,n,t){t.r(n),t.d(n,{default:()=>d});var r=t(31549),i=t(6603);function s(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",ol:"ol",li:"li"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"preacthtm",children:["Preact+HTM",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#preacthtm",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Dieses Tutorial hilft Ihnen dabei, eine Preact+HTM SSR-Anwendung mit Gez von Grund auf zu erstellen. Wir werden anhand eines vollst\xe4ndigen Beispiels zeigen, wie Sie mit dem Gez-Framework eine serverseitig gerenderte Anwendung erstellen k\xf6nnen."}),"\n",(0,r.jsxs)(n.h2,{id:"projektstruktur",children:["Projektstruktur",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#projektstruktur",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Zun\xe4chst werfen wir einen Blick auf die grundlegende Projektstruktur:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n├── package.json         # Projektkonfigurationsdatei, definiert Abh\xe4ngigkeiten und Skriptbefehle\n├── tsconfig.json        # TypeScript-Konfigurationsdatei, legt Compiler-Optionen fest\n└── src                  # Quellcode-Verzeichnis\n    ├── app.ts           # Hauptanwendungskomponente, definiert Seitenstruktur und Interaktionslogik\n    ├── create-app.ts    # Anwendungsinstanz-Erstellungsfabrik, verantwortlich f\xfcr die Initialisierung der Anwendung\n    ├── entry.client.ts  # Client-Einstiegspunktdatei, behandelt das Rendering im Browser\n    ├── entry.node.ts    # Node.js-Server-Einstiegspunktdatei, verantwortlich f\xfcr die Entwicklungsumgebungskonfiguration und Serverstart\n    └── entry.server.ts  # Server-Einstiegspunktdatei, behandelt das SSR-Rendering\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"projektkonfiguration",children:["Projektkonfiguration",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#projektkonfiguration",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"packagejson",children:["package.json",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#packagejson",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Erstellen Sie die ",(0,r.jsx)(n.code,{children:"package.json"}),"-Datei und konfigurieren Sie die Projektabh\xe4ngigkeiten und Skripte:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n  "name": "ssr-demo-preact-htm",\n  "version": "1.0.0",\n  "type": "module",\n  "private": true,\n  "scripts": {\n    "dev": "gez dev",\n    "build": "npm run build:dts && npm run build:ssr",\n    "build:ssr": "gez build",\n    "preview": "gez preview",\n    "start": "NODE_ENV=production node dist/index.js",\n    "build:dts": "tsc --declaration --emitDeclarationOnly --outDir dist/src"\n  },\n  "dependencies": {\n    "@gez/core": "*"\n  },\n  "devDependencies": {\n    "@gez/rspack": "*",\n    "@types/node": "22.8.6",\n    "htm": "^3.1.1",\n    "preact": "^10.26.2",\n    "preact-render-to-string": "^6.5.13",\n    "typescript": "^5.2.2"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Nachdem Sie die ",(0,r.jsx)(n.code,{children:"package.json"}),"-Datei erstellt haben, m\xfcssen Sie die Projektabh\xe4ngigkeiten installieren. Sie k\xf6nnen einen der folgenden Befehle verwenden:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm install\n# oder\nyarn install\n# oder\nnpm install\n"})}),"\n",(0,r.jsx)(n.p,{children:"Dadurch werden alle erforderlichen Abh\xe4ngigkeiten installiert, einschlie\xdflich Preact, HTM, TypeScript und SSR-bezogene Abh\xe4ngigkeiten."}),"\n",(0,r.jsxs)(n.h3,{id:"tsconfigjson",children:["tsconfig.json",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tsconfigjson",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Erstellen Sie die ",(0,r.jsx)(n.code,{children:"tsconfig.json"}),"-Datei und konfigurieren Sie die TypeScript-Compiler-Optionen:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",meta:'title="tsconfig.json"',children:'{\n    "compilerOptions": {\n        "isolatedModules": true,\n        "experimentalDecorators": true,\n        "resolveJsonModule": true,\n        "types": [\n            "@types/node"\n        ],\n        "target": "ESNext",\n        "module": "ESNext",\n        "moduleResolution": "node",\n        "strict": true,\n        "skipLibCheck": true,\n        "allowSyntheticDefaultImports": true,\n        "paths": {\n            "ssr-demo-preact-htm/src/*": [\n                "./src/*"\n            ],\n            "ssr-demo-preact-htm/*": [\n                "./*"\n            ]\n        }\n    },\n    "include": [\n        "src"\n    ],\n    "exclude": [\n        "dist"\n    ]\n}\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"quellcode-struktur",children:["Quellcode-Struktur",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#quellcode-struktur",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"appts",children:["app.ts",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#appts",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Erstellen Sie die Hauptanwendungskomponente ",(0,r.jsx)(n.code,{children:"src/app.ts"})," mit Preact-Klassenkomponenten und HTM:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/app.ts"',children:"/**\n * @file Beispielkomponente\n * @description Zeigt eine Seiten\xfcberschrift mit automatisch aktualisierter Uhrzeit, um die grundlegenden Funktionen des Gez-Frameworks zu demonstrieren\n */\n\nimport { Component } from 'preact';\nimport { html } from 'htm/preact';\n\nexport default class App extends Component {\n    state = {\n        time: new Date().toISOString()\n    };\n\n    timer: NodeJS.Timeout | null = null;\n\n    componentDidMount() {\n        this.timer = setInterval(() => {\n            this.setState({\n                time: new Date().toISOString()\n            });\n        }, 1000);\n    }\n\n    componentWillUnmount() {\n        if (this.timer) {\n            clearInterval(this.timer);\n        }\n    }\n\n    render() {\n        const { time } = this.state;\n        return html`\n            <div>\n                <h1><a href=\"https://www.jsesm.com/guide/frameworks/preact-htm.html\" target=\"_blank\">Gez Schnellstart</a></h1>\n                <time datetime=${time}>${time}</time>\n            </div>\n        `;\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"create-appts",children:["create-app.ts",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#create-appts",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Erstellen Sie die Datei ",(0,r.jsx)(n.code,{children:"src/create-app.ts"}),", die f\xfcr die Erstellung der Anwendungsinstanz verantwortlich ist:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/create-app.ts"',children:"/**\n * @file Anwendungsinstanz-Erstellung\n * @description Verantwortlich f\xfcr die Erstellung und Konfiguration der Anwendungsinstanz\n */\n\nimport type { VNode } from 'preact';\nimport { html } from 'htm/preact';\nimport App from './app';\n\nexport function createApp(): { app: VNode } {\n    const app = html`<${App} />`;\n    return {\n        app\n    };\n}\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"entryclientts",children:["entry.client.ts",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entryclientts",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Erstellen Sie die Client-Einstiegspunktdatei ",(0,r.jsx)(n.code,{children:"src/entry.client.ts"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.client.ts"',children:"/**\n * @file Client-Einstiegspunktdatei\n * @description Verantwortlich f\xfcr die Client-Interaktionslogik und dynamische Aktualisierung\n */\n\nimport { render } from 'preact';\nimport { createApp } from './create-app';\n\n// Anwendungsinstanz erstellen\nconst { app } = createApp();\n\n// Anwendungsinstanz einbinden\nrender(app, document.getElementById('app')!);\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"entrynodets",children:["entry.node.ts",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entrynodets",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Erstellen Sie die Datei ",(0,r.jsx)(n.code,{children:"entry.node.ts"}),", die f\xfcr die Entwicklungsumgebungskonfiguration und den Serverstart verantwortlich ist:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"/**\n * @file Node.js-Server-Einstiegspunktdatei\n * @description Verantwortlich f\xfcr die Entwicklungsumgebungskonfiguration und den Serverstart, bietet eine SSR-Laufzeitumgebung\n */\n\nimport http from 'node:http';\nimport type { GezOptions } from '@gez/core';\n\nexport default {\n    /**\n     * Konfiguriert den Anwendungsersteller f\xfcr die Entwicklungsumgebung\n     * @description Erstellt und konfiguriert eine Rspack-Anwendungsinstanz f\xfcr die Entwicklungsumgebung, unterst\xfctzt HMR und Live-Vorschau\n     * @param gez Gez-Framework-Instanz, bietet Kernfunktionen und Konfigurationsschnittstellen\n     * @returns Gibt die konfigurierte Rspack-Anwendungsinstanz zur\xfcck, unterst\xfctzt HMR und Live-Vorschau\n     */\n    async devApp(gez) {\n        return import('@gez/rspack').then((m) =>\n            m.createRspackHtmlApp(gez, {\n                config(context) {\n                    // Hier k\xf6nnen Sie die Rspack-Kompilierungskonfiguration anpassen\n                }\n            })\n        );\n    },\n\n    /**\n     * Konfiguriert und startet den HTTP-Server\n     * @description Erstellt eine HTTP-Serverinstanz, integriert Gez-Middleware und verarbeitet SSR-Anfragen\n     * @param gez Gez-Framework-Instanz, bietet Middleware und Rendering-Funktionen\n     */\n    async server(gez) {\n        const server = http.createServer((req, res) => {\n            // Verwendet Gez-Middleware zur Anfrageverarbeitung\n            gez.middleware(req, res, async () => {\n                // F\xfchrt serverseitiges Rendering durch\n                const rc = await gez.render({\n                    params: { url: req.url }\n                });\n                res.end(rc.html);\n            });\n        });\n\n        server.listen(3000, () => {\n            console.log('Server gestartet: http://localhost:3000');\n        });\n    }\n} satisfies GezOptions;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Diese Datei ist der Einstiegspunkt f\xfcr die Entwicklungsumgebungskonfiguration und den Serverstart und enth\xe4lt zwei Kernfunktionen:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"devApp"}),"-Funktion: Verantwortlich f\xfcr die Erstellung und Konfiguration der Rspack-Anwendungsinstanz f\xfcr die Entwicklungsumgebung, unterst\xfctzt Hot Module Replacement (HMR) und Live-Vorschau. Hier wird ",(0,r.jsx)(n.code,{children:"createRspackHtmlApp"})," verwendet, um eine speziell f\xfcr Preact+HTM entwickelte Rspack-Anwendungsinstanz zu erstellen."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"server"}),"-Funktion: Verantwortlich f\xfcr die Erstellung und Konfiguration des HTTP-Servers, integriert Gez-Middleware zur Verarbeitung von SSR-Anfragen."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"entryserverts",children:["entry.server.ts",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entryserverts",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["Erstellen Sie die Server-Rendering-Einstiegspunktdatei ",(0,r.jsx)(n.code,{children:"src/entry.server.ts"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.server.ts"',children:"/**\n * @file Server-Rendering-Einstiegspunktdatei\n * @description Verantwortlich f\xfcr den Server-Rendering-Prozess, HTML-Generierung und Ressourceneinbindung\n */\n\nimport type { RenderContext } from '@gez/core';\nimport type { VNode } from 'preact';\nimport { render } from 'preact-render-to-string';\nimport { createApp } from './create-app';\n\nexport default async (rc: RenderContext) => {\n    // Anwendungsinstanz erstellen\n    const { app } = createApp();\n\n    // Verwendet Preacts renderToString, um den Seiteninhalt zu generieren\n    const html = render(app);\n\n    // F\xfchrt die Abh\xe4ngigkeitssammlung aus, um sicherzustellen, dass alle notwendigen Ressourcen geladen werden\n    await rc.commit();\n\n    // Generiert die vollst\xe4ndige HTML-Struktur\n    rc.html = `<!DOCTYPE html>\n<html lang=\"de-DE\">\n<head>\n    ${rc.preload()}\n    <title>Gez Schnellstart</title>\n    ${rc.css()}\n</head>\n<body>\n    <div id=\"app\">${html}</div>\n    ${rc.importmap()}\n    ${rc.moduleEntry()}\n    ${rc.modulePreload()}\n</body>\n</html>\n`;\n};\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"projekt-ausf\\xfchren",children:["Projekt ausf\xfchren",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#projekt-ausf\\xfchren",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Nachdem Sie die oben genannten Dateien konfiguriert haben, k\xf6nnen Sie das Projekt mit den folgenden Befehlen ausf\xfchren:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Entwicklungsmodus:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Projekt erstellen:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Produktionsumgebung ausf\xfchren:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run start\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Jetzt haben Sie erfolgreich eine Preact+HTM SSR-Anwendung mit Gez erstellt! Besuchen Sie ",(0,r.jsx)(n.a,{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer",children:"http://localhost:3000"}),", um das Ergebnis zu sehen."]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}let d=a;a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["de%2Fguide%2Fframeworks%2Fpreact-htm.md"]={toc:[{text:"Projektstruktur",id:"projektstruktur",depth:2},{text:"Projektkonfiguration",id:"projektkonfiguration",depth:2},{text:"package.json",id:"packagejson",depth:3},{text:"tsconfig.json",id:"tsconfigjson",depth:3},{text:"Quellcode-Struktur",id:"quellcode-struktur",depth:2},{text:"app.ts",id:"appts",depth:3},{text:"create-app.ts",id:"create-appts",depth:3},{text:"entry.client.ts",id:"entryclientts",depth:3},{text:"entry.node.ts",id:"entrynodets",depth:3},{text:"entry.server.ts",id:"entryserverts",depth:3},{text:"Projekt ausf\xfchren",id:"projekt-ausf\xfchren",depth:2}],title:"Preact+HTM",headingTitle:"Preact+HTM",frontmatter:{titleSuffix:"Gez Framework Preact+HTM SSR Anwendungsbeispiel",description:"Erstellen Sie eine Preact+HTM SSR-Anwendung mit Gez von Grund auf. Dieses Beispiel zeigt die grundlegende Verwendung des Frameworks, einschlie\xdflich Projektinitialisierung, Preact-Konfiguration und Einstiegspunktdateien.",head:[["meta",{property:"keywords",content:"Gez, Preact, HTM, SSR-Anwendung, TypeScript-Konfiguration, Projektinitialisierung, Serverseitiges Rendering, Client-Interaktion"}]]}}}}]);