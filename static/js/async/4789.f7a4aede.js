"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["4789"],{65874:function(e,n,s){s.r(n),s.d(n,{default:()=>a});var r=s(31549),i=s(6603);function c(e){let n=Object.assign({h1:"h1",a:"a",p:"p",ul:"ul",li:"li",strong:"strong",code:"code",h2:"h2",h3:"h3",pre:"pre",div:"div",ol:"ol"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"路径别名",children:["路径别名",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#路径别名",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"路径别名（Path Alias）是一种模块导入路径映射机制，它允许开发者使用简短、语义化的标识符来替代完整的模块路径。在 Gez 中，路径别名机制具有以下优势："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"简化导入路径"}),"：使用语义化的别名替代冗长的相对路径，提高代码可读性"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"避免深层嵌套"}),"：消除多层级目录引用（如 ",(0,r.jsx)(n.code,{children:"../../../../"}),"）带来的维护困难"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型安全"}),"：与 TypeScript 的类型系统完全集成，提供代码补全和类型检查"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"模块解析优化"}),"：通过预定义的路径映射，提升模块解析性能"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"默认别名机制",children:["默认别名机制",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#默认别名机制",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Gez 采用基于服务名（Service Name）的自动别名机制，这种约定优于配置的设计具有以下特点："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"自动配置"}),"：基于 ",(0,r.jsx)(n.code,{children:"package.json"})," 中的 ",(0,r.jsx)(n.code,{children:"name"})," 字段自动生成别名，无需手动配置"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"统一规范"}),"：确保所有服务模块遵循一致的命名和引用规范"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"类型支持"}),"：配合 ",(0,r.jsx)(n.code,{children:"npm run build:dts"})," 命令，自动生成类型声明文件，实现跨服务的类型推导"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"可预测性"}),"：通过服务名即可推断出模块的引用路径，降低维护成本"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"配置说明",children:["配置说明",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置说明",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"packagejson-配置",children:["package.json 配置",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#packagejson-配置",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["在 ",(0,r.jsx)(n.code,{children:"package.json"})," 中，通过 ",(0,r.jsx)(n.code,{children:"name"})," 字段定义服务的名称，该名称将作为服务的默认别名前缀："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",meta:'title="package.json"',children:'{\n    "name": "your-app-name"\n}\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"tsconfigjson-配置",children:["tsconfig.json 配置",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#tsconfigjson-配置",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["为了使 TypeScript 能够正确解析别名路径，需要在 ",(0,r.jsx)(n.code,{children:"tsconfig.json"})," 中配置 ",(0,r.jsx)(n.code,{children:"paths"})," 映射："]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",meta:'title="tsconfig.json"',children:'{\n    "compilerOptions": {\n        "paths": {\n            "your-app-name/src/*": [\n                "./src/*"\n            ],\n            "your-app-name/*": [\n                "./*"\n            ]\n        }\n    }\n}\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"使用示例",children:["使用示例",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#使用示例",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"导入服务内部模块",children:["导入服务内部模块",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#导入服务内部模块",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// 使用别名导入\nimport { MyComponent } from 'your-app-name/src/components';\n\n// 等效的相对路径导入\nimport { MyComponent } from '../components';\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"导入其他服务模块",children:["导入其他服务模块",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#导入其他服务模块",children:"#"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// 导入其他服务的组件\nimport { SharedComponent } from 'other-service/src/components';\n\n// 导入其他服务的工具函数\nimport { utils } from 'other-service/src/utils';\n"})}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive tip",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"最佳实践"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"优先使用别名路径而不是相对路径"}),"\n",(0,r.jsx)(n.li,{children:"保持别名路径的语义化和一致性"}),"\n",(0,r.jsx)(n.li,{children:"避免在别名路径中使用过多的目录层级"}),"\n"]}),"\n"]})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// 导入组件\nimport { Button } from 'your-app-name/src/components';\nimport { Layout } from 'your-app-name/src/components/layout';\n\n// 导入工具函数\nimport { formatDate } from 'your-app-name/src/utils';\nimport { request } from 'your-app-name/src/utils/request';\n\n// 导入类型定义\nimport type { UserInfo } from 'your-app-name/src/types';\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"跨服务导入",children:["跨服务导入",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#跨服务导入",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"当配置了模块链接（Module Link）后，可以使用相同的方式导入其他服务的模块："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// 导入远程服务的组件\nimport { Header } from 'remote-service/src/components';\n\n// 导入远程服务的工具函数\nimport { logger } from 'remote-service/src/utils';\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"自定义别名",children:["自定义别名",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义别名",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"对于第三方包或特殊场景，可以通过 Gez 配置文件自定义别名："}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"export default {\n    async devApp(gez) {\n        return import('@gez/rspack').then((m) =>\n            m.createApp(gez, (buildContext) => {\n                buildContext.config.resolve = {\n                    ...buildContext.config.resolve,\n                    alias: {\n                        ...buildContext.config.resolve?.alias,\n                        // 为 Vue 配置特定的构建版本\n                        'vue$': 'vue/dist/vue.esm.js',\n                        // 为常用目录配置简短别名\n                        '@': './src',\n                        '@components': './src/components'\n                    }\n                }\n            })\n        );\n    }\n} satisfies GezOptions;\n"})}),"\n",(0,r.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,r.jsx)(n.div,{className:"rspress-directive-title",children:"注意事项"}),(0,r.jsxs)(n.div,{className:"rspress-directive-content",children:["\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"对于业务模块，建议始终使用默认的别名机制，以保持项目的一致性"}),"\n",(0,r.jsx)(n.li,{children:"自定义别名主要用于处理第三方包的特殊需求或优化开发体验"}),"\n",(0,r.jsx)(n.li,{children:"过度使用自定义别名可能会影响代码的可维护性和构建优化"}),"\n"]}),"\n"]})]})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}let a=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["zh%2Fguide%2Fessentials%2Falias.md"]={toc:[{text:"默认别名机制",id:"默认别名机制",depth:2},{text:"配置说明",id:"配置说明",depth:2},{text:"package.json 配置",id:"packagejson-配置",depth:3},{text:"tsconfig.json 配置",id:"tsconfigjson-配置",depth:3},{text:"使用示例",id:"使用示例",depth:2},{text:"导入服务内部模块",id:"导入服务内部模块",depth:3},{text:"导入其他服务模块",id:"导入其他服务模块",depth:3},{text:"跨服务导入",id:"跨服务导入",depth:3},{text:"自定义别名",id:"自定义别名",depth:3}],title:"路径别名",headingTitle:"路径别名",frontmatter:{titleSuffix:"Gez 框架模块导入路径映射指南",description:"详细介绍 Gez 框架的路径别名机制，包括简化导入路径、避免深层嵌套、类型安全和模块解析优化等特性，帮助开发者提升代码可维护性。",head:[["meta",{property:"keywords",content:"Gez, 路径别名, Path Alias, TypeScript, 模块导入, 路径映射, 代码可维护性"}]]}}}}]);