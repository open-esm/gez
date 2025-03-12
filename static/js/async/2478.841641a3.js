"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["2478"],{89177:function(n,e,s){s.r(e),s.d(e,{default:()=>h});var r=s(31549),i=s(6603);function d(n){let e=Object.assign({h1:"h1",a:"a",p:"p",h3:"h3",h4:"h4",ul:"ul",li:"li",strong:"strong",ol:"ol",h2:"h2",code:"code",pre:"pre"},(0,i.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"模块链接",children:["模块链接",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#模块链接",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"Gez 框架提供了一套完整的模块链接机制，用于管理服务间的代码共享和依赖关系。该机制基于 ESM（ECMAScript Module）规范实现，支持源码级别的模块导出和导入，以及完整的依赖管理功能。"}),"\n",(0,r.jsxs)(e.h3,{id:"核心概念",children:["核心概念",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#核心概念",children:"#"})]}),"\n",(0,r.jsxs)(e.h4,{id:"模块导出",children:["模块导出",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#模块导出",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"模块导出是将服务中的特定代码单元（如组件、工具函数等）以 ESM 格式对外暴露的过程。支持两种导出类型："}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"源码导出"}),"：直接导出项目中的源代码文件"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"依赖导出"}),"：导出项目使用的第三方依赖包"]}),"\n"]}),"\n",(0,r.jsxs)(e.h4,{id:"模块导入",children:["模块导入",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#模块导入",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"模块导入是在服务中引用其他服务导出的代码单元的过程。支持多种安装方式："}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"源码安装"}),"：适用于开发环境，支持实时修改和热更新"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"软件包安装"}),"：适用于生产环境，直接使用构建产物"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"预加载机制",children:["预加载机制",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#预加载机制",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"为了优化服务性能，Gez 实现了智能的模块预加载机制："}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"依赖分析"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"构建时分析组件间的依赖关系"}),"\n",(0,r.jsx)(e.li,{children:"识别关键路径上的核心模块"}),"\n",(0,r.jsx)(e.li,{children:"确定模块的加载优先级"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"加载策略"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"立即加载"}),"：关键路径上的核心模块"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"延迟加载"}),"：非关键功能模块"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"按需加载"}),"：条件渲染的模块"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"资源优化"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"智能的代码分割策略"}),"\n",(0,r.jsx)(e.li,{children:"模块级别的缓存管理"}),"\n",(0,r.jsx)(e.li,{children:"按需编译和打包"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h2,{id:"模块导出-1",children:["模块导出",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#模块导出-1",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"配置说明",children:["配置说明",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#配置说明",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["在 ",(0,r.jsx)(e.code,{children:"entry.node.ts"})," 中配置需要导出的模块："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"import type { GezOptions } from '@gez/core';\n\nexport default {\n    modules: {\n        exports: [\n            // 导出源码文件\n            'root:src/components/button.vue',  // Vue 组件\n            'root:src/utils/format.ts',        // 工具函数\n            // 导出第三方依赖\n            'npm:vue',                         // Vue 框架\n            'npm:vue-router'                   // Vue Router\n        ]\n    }\n} satisfies GezOptions;\n"})}),"\n",(0,r.jsx)(e.p,{children:"导出配置支持两种类型："}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"root:*"}),"：导出源码文件，路径相对于项目根目录"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"npm:*"}),"：导出第三方依赖，直接指定包名"]}),"\n"]}),"\n",(0,r.jsxs)(e.h2,{id:"模块导入-1",children:["模块导入",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#模块导入-1",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"配置说明-1",children:["配置说明",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#配置说明-1",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["在 ",(0,r.jsx)(e.code,{children:"entry.node.ts"})," 中配置需要导入的模块："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"import type { GezOptions } from '@gez/core';\n\nexport default {\n    modules: {\n        // 导入配置\n        imports: {\n            // 源码安装：指向构建产物目录\n            'ssr-remote': 'root:./node_modules/ssr-remote/dist',\n            // 软件包安装：指向包目录\n            'other-remote': 'root:./node_modules/other-remote'\n        },\n        // 外部依赖配置\n        externals: {\n            // 使用远程模块中的依赖\n            'vue': 'ssr-remote/npm/vue',\n            'vue-router': 'ssr-remote/npm/vue-router'\n        }\n    }\n} satisfies GezOptions;\n"})}),"\n",(0,r.jsx)(e.p,{children:"配置项说明："}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"imports"}),"：配置远程模块的本地路径"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"源码安装：指向构建产物目录（dist）"}),"\n",(0,r.jsx)(e.li,{children:"软件包安装：直接指向包目录"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"externals"}),"：配置外部依赖"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"用于共享远程模块中的依赖"}),"\n",(0,r.jsx)(e.li,{children:"避免重复打包相同依赖"}),"\n",(0,r.jsx)(e.li,{children:"支持多个模块共享依赖"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"安装方式",children:["安装方式",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#安装方式",children:"#"})]}),"\n",(0,r.jsxs)(e.h4,{id:"源码安装",children:["源码安装",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#源码安装",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"适用于开发环境，支持实时修改和热更新。"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Workspace 方式"}),"\n推荐在 Monorepo 项目中使用："]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="package.json"',children:'{\n    "devDependencies": {\n        "ssr-remote": "workspace:*"\n    }\n}\n'})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Link 方式"}),"\n用于本地开发调试："]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="package.json"',children:'{\n    "devDependencies": {\n        "ssr-remote": "link:../ssr-remote"\n    }\n}\n'})}),"\n",(0,r.jsxs)(e.h4,{id:"软件包安装",children:["软件包安装",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#软件包安装",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"适用于生产环境，直接使用构建产物。"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"NPM Registry"}),"\n通过 npm registry 安装："]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="package.json"',children:'{\n    "dependencies": {\n        "ssr-remote": "^1.0.0"\n    }\n}\n'})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"静态服务器"}),"\n通过 HTTP/HTTPS 协议安装："]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="package.json"',children:'{\n    "dependencies": {\n        "ssr-remote": "https://cdn.example.com/ssr-remote/1.0.0.tgz"\n    }\n}\n'})}),"\n",(0,r.jsxs)(e.h2,{id:"软件包构建",children:["软件包构建",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#软件包构建",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"配置说明-2",children:["配置说明",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#配置说明-2",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:["在 ",(0,r.jsx)(e.code,{children:"entry.node.ts"})," 中配置构建选项："]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"import type { GezOptions } from '@gez/core';\n\nexport default {\n    // 模块导出配置\n    modules: {\n        exports: [\n            'root:src/components/button.vue',\n            'root:src/utils/format.ts',\n            'npm:vue'\n        ]\n    },\n    // 构建配置\n    pack: {\n        // 启用构建\n        enable: true,\n\n        // 输出配置\n        outputs: [\n            'dist/client/versions/latest.tgz',\n            'dist/client/versions/1.0.0.tgz'\n        ],\n\n        // 自定义 package.json\n        packageJson: async (gez, pkg) => {\n            pkg.version = '1.0.0';\n            return pkg;\n        },\n\n        // 构建前处理\n        onBefore: async (gez, pkg) => {\n            // 生成类型声明\n            // 执行测试用例\n            // 更新文档等\n        },\n\n        // 构建后处理\n        onAfter: async (gez, pkg, file) => {\n            // 上传到 CDN\n            // 发布到 npm 仓库\n            // 部署到测试环境等\n        }\n    }\n} satisfies GezOptions;\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"构建产物",children:["构建产物",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#构建产物",children:"#"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"your-app-name.tgz\n├── package.json        # 包信息\n├── index.js            # 生产环境入口\n├── server/             # 服务端资源\n│   └── manifest.json   # 服务端资源映射\n├── node/               # Node.js 运行时\n└── client/             # 客户端资源\n    └── manifest.json   # 客户端资源映射\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"发布流程",children:["发布流程",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#发布流程",children:"#"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"# 1. 构建生产版本\ngez build\n\n# 2. 发布到 npm\nnpm publish dist/versions/your-app-name.tgz\n"})}),"\n",(0,r.jsxs)(e.h2,{id:"最佳实践",children:["最佳实践",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#最佳实践",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"开发环境配置",children:["开发环境配置",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#开发环境配置",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"依赖管理"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"使用 Workspace 或 Link 方式安装依赖"}),"\n",(0,r.jsx)(e.li,{children:"统一管理依赖版本"}),"\n",(0,r.jsx)(e.li,{children:"避免重复安装相同依赖"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"开发体验"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"启用热更新功能"}),"\n",(0,r.jsx)(e.li,{children:"配置合适的预加载策略"}),"\n",(0,r.jsx)(e.li,{children:"优化构建速度"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"生产环境配置",children:["生产环境配置",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#生产环境配置",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"部署策略"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"使用 NPM Registry 或静态服务器"}),"\n",(0,r.jsx)(e.li,{children:"确保构建产物完整性"}),"\n",(0,r.jsx)(e.li,{children:"实施灰度发布机制"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"性能优化"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"合理配置资源预加载"}),"\n",(0,r.jsx)(e.li,{children:"优化模块加载顺序"}),"\n",(0,r.jsx)(e.li,{children:"实施有效的缓存策略"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"版本管理",children:["版本管理",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#版本管理",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"版本规范"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"遵循语义化版本规范"}),"\n",(0,r.jsx)(e.li,{children:"维护详细的更新日志"}),"\n",(0,r.jsx)(e.li,{children:"做好版本兼容性测试"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"依赖更新"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"及时更新依赖包"}),"\n",(0,r.jsx)(e.li,{children:"定期进行安全审计"}),"\n",(0,r.jsx)(e.li,{children:"保持依赖版本一致性"}),"\n"]}),"\n"]}),"\n"]})]})}function l(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}let h=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["zh%2Fguide%2Fessentials%2Fmodule-link.md"]={toc:[{text:"核心概念",id:"核心概念",depth:3},{text:"模块导出",id:"模块导出",depth:4},{text:"模块导入",id:"模块导入",depth:4},{text:"预加载机制",id:"预加载机制",depth:3},{text:"模块导出",id:"模块导出-1",depth:2},{text:"配置说明",id:"配置说明",depth:3},{text:"模块导入",id:"模块导入-1",depth:2},{text:"配置说明",id:"配置说明-1",depth:3},{text:"安装方式",id:"安装方式",depth:3},{text:"源码安装",id:"源码安装",depth:4},{text:"软件包安装",id:"软件包安装",depth:4},{text:"软件包构建",id:"软件包构建",depth:2},{text:"配置说明",id:"配置说明-2",depth:3},{text:"构建产物",id:"构建产物",depth:3},{text:"发布流程",id:"发布流程",depth:3},{text:"最佳实践",id:"最佳实践",depth:2},{text:"开发环境配置",id:"开发环境配置",depth:3},{text:"生产环境配置",id:"生产环境配置",depth:3},{text:"版本管理",id:"版本管理",depth:3}],title:"模块链接",headingTitle:"模块链接",frontmatter:{titleSuffix:"Gez 框架服务间代码共享机制",description:"详细介绍 Gez 框架的模块链接机制，包括服务间代码共享、依赖管理和 ESM 规范实现，帮助开发者构建高效的微前端应用。",head:[["meta",{property:"keywords",content:"Gez, 模块链接, Module Link, ESM, 代码共享, 依赖管理, 微前端"}]]}}}}]);