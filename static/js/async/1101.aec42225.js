"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["1101"],{24895:function(n,e,s){s.r(e),s.d(e,{default:()=>h});var r=s(31549),i=s(6603);function d(n){let e=Object.assign({h1:"h1",a:"a",p:"p",h3:"h3",h4:"h4",ul:"ul",li:"li",strong:"strong",ol:"ol",h2:"h2",code:"code",pre:"pre"},(0,i.ah)(),n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"모듈-링크",children:["모듈 링크",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#모듈-링크",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"Gez 프레임워크는 서비스 간 코드 공유와 의존성 관리를 위한 완전한 모듈 링크 메커니즘을 제공합니다. 이 메커니즘은 ESM(ECMAScript Module) 규격을 기반으로 구현되었으며, 소스 코드 수준의 모듈 내보내기 및 가져오기와 완전한 의존성 관리 기능을 지원합니다."}),"\n",(0,r.jsxs)(e.h3,{id:"핵심-개념",children:["핵심 개념",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#핵심-개념",children:"#"})]}),"\n",(0,r.jsxs)(e.h4,{id:"모듈-내보내기",children:["모듈 내보내기",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#모듈-내보내기",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"모듈 내보내기는 서비스 내의 특정 코드 단위(예: 컴포넌트, 유틸리티 함수 등)를 ESM 형식으로 외부에 노출하는 과정입니다. 두 가지 내보내기 유형을 지원합니다:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"소스 코드 내보내기"}),": 프로젝트 내의 소스 코드 파일을 직접 내보냄"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"의존성 내보내기"}),": 프로젝트에서 사용하는 서드파티 의존성 패키지를 내보냄"]}),"\n"]}),"\n",(0,r.jsxs)(e.h4,{id:"모듈-가져오기",children:["모듈 가져오기",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#모듈-가져오기",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"모듈 가져오기는 서비스에서 다른 서비스가 내보낸 코드 단위를 참조하는 과정입니다. 여러 설치 방식을 지원합니다:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"소스 코드 설치"}),": 개발 환경에 적합하며, 실시간 수정 및 핫 리로드를 지원"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"패키지 설치"}),": 프로덕션 환경에 적합하며, 빌드 결과물을 직접 사용"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"사전-로딩-메커니즘",children:["사전 로딩 메커니즘",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#사전-로딩-메커니즘",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"서비스 성능을 최적화하기 위해 Gez는 지능형 모듈 사전 로딩 메커니즘을 구현했습니다:"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"의존성 분석"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"빌드 시 컴포넌트 간 의존성 관계 분석"}),"\n",(0,r.jsx)(e.li,{children:"핵심 경로 상의 주요 모듈 식별"}),"\n",(0,r.jsx)(e.li,{children:"모듈 로딩 우선순위 결정"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"로딩 전략"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"즉시 로딩"}),": 핵심 경로 상의 주요 모듈"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"지연 로딩"}),": 비핵심 기능 모듈"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"필요 시 로딩"}),": 조건부 렌더링 모듈"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"리소스 최적화"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"지능형 코드 분할 전략"}),"\n",(0,r.jsx)(e.li,{children:"모듈 수준의 캐시 관리"}),"\n",(0,r.jsx)(e.li,{children:"필요 시 컴파일 및 패키징"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h2,{id:"모듈-내보내기-1",children:["모듈 내보내기",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#모듈-내보내기-1",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"설정-설명",children:["설정 설명",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#설정-설명",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"entry.node.ts"}),"에서 내보낼 모듈을 설정합니다:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"import type { GezOptions } from '@gez/core';\n\nexport default {\n    modules: {\n        exports: [\n            // 소스 코드 파일 내보내기\n            'root:src/components/button.vue',  // Vue 컴포넌트\n            'root:src/utils/format.ts',        // 유틸리티 함수\n            // 서드파티 의존성 내보내기\n            'npm:vue',                         // Vue 프레임워크\n            'npm:vue-router'                   // Vue Router\n        ]\n    }\n} satisfies GezOptions;\n"})}),"\n",(0,r.jsx)(e.p,{children:"내보내기 설정은 두 가지 유형을 지원합니다:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"root:*"}),": 소스 코드 파일 내보내기, 경로는 프로젝트 루트 디렉토리를 기준으로 함"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"npm:*"}),": 서드파티 의존성 내보내기, 패키지 이름을 직접 지정"]}),"\n"]}),"\n",(0,r.jsxs)(e.h2,{id:"모듈-가져오기-1",children:["모듈 가져오기",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#모듈-가져오기-1",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"설정-설명-1",children:["설정 설명",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#설정-설명-1",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"entry.node.ts"}),"에서 가져올 모듈을 설정합니다:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"import type { GezOptions } from '@gez/core';\n\nexport default {\n    modules: {\n        // 가져오기 설정\n        imports: {\n            // 소스 코드 설치: 빌드 결과물 디렉토리 지정\n            'ssr-remote': 'root:./node_modules/ssr-remote/dist',\n            // 패키지 설치: 패키지 디렉토리 지정\n            'other-remote': 'root:./node_modules/other-remote'\n        },\n        // 외부 의존성 설정\n        externals: {\n            // 원격 모듈의 의존성 사용\n            'vue': 'ssr-remote/npm/vue',\n            'vue-router': 'ssr-remote/npm/vue-router'\n        }\n    }\n} satisfies GezOptions;\n"})}),"\n",(0,r.jsx)(e.p,{children:"설정 항목 설명:"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"imports"}),": 원격 모듈의 로컬 경로 설정"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"소스 코드 설치: 빌드 결과물 디렉토리(dist) 지정"}),"\n",(0,r.jsx)(e.li,{children:"패키지 설치: 패키지 디렉토리 직접 지정"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"externals"}),": 외부 의존성 설정"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"원격 모듈의 의존성 공유"}),"\n",(0,r.jsx)(e.li,{children:"동일 의존성 중복 패키징 방지"}),"\n",(0,r.jsx)(e.li,{children:"여러 모듈 간 의존성 공유 지원"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"설치-방식",children:["설치 방식",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#설치-방식",children:"#"})]}),"\n",(0,r.jsxs)(e.h4,{id:"소스-코드-설치",children:["소스 코드 설치",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#소스-코드-설치",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"개발 환경에 적합하며, 실시간 수정 및 핫 리로드를 지원합니다."}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Workspace 방식"}),"\nMonorepo 프로젝트에서 사용 권장:"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="package.json"',children:'{\n    "devDependencies": {\n        "ssr-remote": "workspace:*"\n    }\n}\n'})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Link 방식"}),"\n로컬 개발 디버깅에 사용:"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="package.json"',children:'{\n    "devDependencies": {\n        "ssr-remote": "link:../ssr-remote"\n    }\n}\n'})}),"\n",(0,r.jsxs)(e.h4,{id:"패키지-설치",children:["패키지 설치",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#패키지-설치",children:"#"})]}),"\n",(0,r.jsx)(e.p,{children:"프로덕션 환경에 적합하며, 빌드 결과물을 직접 사용합니다."}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"NPM Registry"}),"\nnpm registry를 통해 설치:"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="package.json"',children:'{\n    "dependencies": {\n        "ssr-remote": "^1.0.0"\n    }\n}\n'})}),"\n",(0,r.jsxs)(e.ol,{start:"2",children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"정적 서버"}),"\nHTTP/HTTPS 프로토콜을 통해 설치:"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="package.json"',children:'{\n    "dependencies": {\n        "ssr-remote": "https://cdn.example.com/ssr-remote/1.0.0.tgz"\n    }\n}\n'})}),"\n",(0,r.jsxs)(e.h2,{id:"패키지-빌드",children:["패키지 빌드",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#패키지-빌드",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"설정-설명-2",children:["설정 설명",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#설정-설명-2",children:"#"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"entry.node.ts"}),"에서 빌드 옵션을 설정합니다:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",meta:'title="src/entry.node.ts"',children:"import type { GezOptions } from '@gez/core';\n\nexport default {\n    // 모듈 내보내기 설정\n    modules: {\n        exports: [\n            'root:src/components/button.vue',\n            'root:src/utils/format.ts',\n            'npm:vue'\n        ]\n    },\n    // 빌드 설정\n    pack: {\n        // 빌드 활성화\n        enable: true,\n\n        // 출력 설정\n        outputs: [\n            'dist/client/versions/latest.tgz',\n            'dist/client/versions/1.0.0.tgz'\n        ],\n\n        // 사용자 정의 package.json\n        packageJson: async (gez, pkg) => {\n            pkg.version = '1.0.0';\n            return pkg;\n        },\n\n        // 빌드 전 처리\n        onBefore: async (gez, pkg) => {\n            // 타입 선언 생성\n            // 테스트 케이스 실행\n            // 문서 업데이트 등\n        },\n\n        // 빌드 후 처리\n        onAfter: async (gez, pkg, file) => {\n            // CDN에 업로드\n            // npm 저장소에 배포\n            // 테스트 환경에 배포 등\n        }\n    }\n} satisfies GezOptions;\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"빌드-결과물",children:["빌드 결과물",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#빌드-결과물",children:"#"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"your-app-name.tgz\n├── package.json        # 패키지 정보\n├── index.js            # 프로덕션 환경 진입점\n├── server/             # 서버 측 리소스\n│   └── manifest.json   # 서버 측 리소스 매핑\n├── node/               # Node.js 런타임\n└── client/             # 클라이언트 측 리소스\n    └── manifest.json   # 클라이언트 측 리소스 매핑\n"})}),"\n",(0,r.jsxs)(e.h3,{id:"배포-프로세스",children:["배포 프로세스",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#배포-프로세스",children:"#"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"# 1. 프로덕션 버전 빌드\ngez build\n\n# 2. npm에 배포\nnpm publish dist/versions/your-app-name.tgz\n"})}),"\n",(0,r.jsxs)(e.h2,{id:"모범-사례",children:["모범 사례",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#모범-사례",children:"#"})]}),"\n",(0,r.jsxs)(e.h3,{id:"개발-환경-설정",children:["개발 환경 설정",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#개발-환경-설정",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"의존성 관리"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Workspace 또는 Link 방식으로 의존성 설치"}),"\n",(0,r.jsx)(e.li,{children:"의존성 버전 통합 관리"}),"\n",(0,r.jsx)(e.li,{children:"동일 의존성 중복 설치 방지"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"개발 경험"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"핫 리로드 기능 활성화"}),"\n",(0,r.jsx)(e.li,{children:"적절한 사전 로딩 전략 설정"}),"\n",(0,r.jsx)(e.li,{children:"빌드 속도 최적화"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"프로덕션-환경-설정",children:["프로덕션 환경 설정",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#프로덕션-환경-설정",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"배포 전략"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"NPM Registry 또는 정적 서버 사용"}),"\n",(0,r.jsx)(e.li,{children:"빌드 결과물 무결성 보장"}),"\n",(0,r.jsx)(e.li,{children:"그레이스케일 배포 메커니즘 적용"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"성능 최적화"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"리소스 사전 로딩 적절히 설정"}),"\n",(0,r.jsx)(e.li,{children:"모듈 로딩 순서 최적화"}),"\n",(0,r.jsx)(e.li,{children:"효과적인 캐시 전략 적용"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"버전-관리",children:["버전 관리",(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#버전-관리",children:"#"})]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"버전 규칙"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"시맨틱 버전 규칙 준수"}),"\n",(0,r.jsx)(e.li,{children:"상세한 변경 로그 유지"}),"\n",(0,r.jsx)(e.li,{children:"버전 호환성 테스트 수행"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"의존성 업데이트"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"의존성 패키지 정기 업데이트"}),"\n",(0,r.jsx)(e.li,{children:"정기적인 보안 감사 수행"}),"\n",(0,r.jsx)(e.li,{children:"의존성 버전 일관성 유지"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"\n"})})]})}function l(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}let h=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["ko%2Fguide%2Fessentials%2Fmodule-link.md"]={toc:[{text:"핵심 개념",id:"핵심-개념",depth:3},{text:"모듈 내보내기",id:"모듈-내보내기",depth:4},{text:"모듈 가져오기",id:"모듈-가져오기",depth:4},{text:"사전 로딩 메커니즘",id:"사전-로딩-메커니즘",depth:3},{text:"모듈 내보내기",id:"모듈-내보내기-1",depth:2},{text:"설정 설명",id:"설정-설명",depth:3},{text:"모듈 가져오기",id:"모듈-가져오기-1",depth:2},{text:"설정 설명",id:"설정-설명-1",depth:3},{text:"설치 방식",id:"설치-방식",depth:3},{text:"소스 코드 설치",id:"소스-코드-설치",depth:4},{text:"패키지 설치",id:"패키지-설치",depth:4},{text:"패키지 빌드",id:"패키지-빌드",depth:2},{text:"설정 설명",id:"설정-설명-2",depth:3},{text:"빌드 결과물",id:"빌드-결과물",depth:3},{text:"배포 프로세스",id:"배포-프로세스",depth:3},{text:"모범 사례",id:"모범-사례",depth:2},{text:"개발 환경 설정",id:"개발-환경-설정",depth:3},{text:"프로덕션 환경 설정",id:"프로덕션-환경-설정",depth:3},{text:"버전 관리",id:"버전-관리",depth:3}],title:"모듈 링크",headingTitle:"모듈 링크",frontmatter:{titleSuffix:"Gez 프레임워크 서비스 간 코드 공유 메커니즘",description:"Gez 프레임워크의 모듈 링크 메커니즘을 상세히 설명하며, 서비스 간 코드 공유, 의존성 관리 및 ESM 규격 구현을 통해 개발자가 효율적인 마이크로 프론트엔드 애플리케이션을 구축할 수 있도록 돕습니다.",head:[["meta",{property:"keywords",content:"Gez, 모듈 링크, Module Link, ESM, 코드 공유, 의존성 관리, 마이크로 프론트엔드"}]]}}}}]);