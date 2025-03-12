"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["7241"],{82002:function(e,r,n){n.r(r),n.d(r,{default:()=>l});var s=n(31549),i=n(6603);function d(e){let r=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",ul:"ul",li:"li",strong:"strong",h3:"h3",div:"div"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"введение",children:["Введение",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#введение",children:"#"})]}),"\n",(0,s.jsxs)(r.h2,{id:"история-проекта",children:["История проекта",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#история-проекта",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"Gez — это современный микрофронтенд-фреймворк, основанный на ECMAScript Modules (ESM), который ориентирован на создание высокопроизводительных и масштабируемых приложений с серверным рендерингом (SSR). Как третье поколение проекта Genesis, Gez постоянно развивается и внедряет инновации:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"v1.0"}),": Реализация отложенной загрузки удаленных компонентов на основе HTTP-запросов"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"v2.0"}),": Интеграция приложений с использованием Webpack Module Federation"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"v3.0"}),": Переработанная система ",(0,s.jsx)(r.a,{href:"/guide/essentials/module-link",children:"модульных связей"})," на основе нативного ESM в браузере"]}),"\n"]}),"\n",(0,s.jsxs)(r.h2,{id:"технологический-контекст",children:["Технологический контекст",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#технологический-контекст",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"В процессе развития микрофронтенд-архитектуры традиционные решения сталкивались с рядом ограничений:"}),"\n",(0,s.jsxs)(r.h3,{id:"проблемы-существующих-решений",children:["Проблемы существующих решений",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#проблемы-существующих-решений",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Проблемы производительности"}),": Внедрение зависимостей во время выполнения и использование JavaScript-песочниц приводят к значительным накладным расходам"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Механизмы изоляции"}),": Самодельные песочницы не могут сравниться с нативной изоляцией модулей в браузере"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Сложность сборки"}),": Модификации инструментов сборки для совместного использования зависимостей увеличивают затраты на поддержку проекта"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Отклонение от стандартов"}),": Специальные стратегии развертывания и механизмы обработки во время выполнения противоречат современным стандартам веб-разработки"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Ограничения экосистемы"}),": Привязка к фреймворкам и кастомные API ограничивают выбор технологического стека"]}),"\n"]}),"\n",(0,s.jsxs)(r.h3,{id:"технологические-инновации",children:["Технологические инновации",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#технологические-инновации",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"Gez предлагает новое решение, основанное на современных веб-стандартах:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Нативная система модулей"}),": Использование нативного ESM и Import Maps для управления зависимостями обеспечивает более быстрый анализ и выполнение"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Стандартные механизмы изоляции"}),": Надежная изоляция приложений на основе области видимости модулей ECMAScript"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Открытый технологический стек"}),": Поддержка интеграции с любыми современными фронтенд-фреймворками"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Оптимизация разработки"}),": Интуитивно понятный режим разработки и полная поддержка отладки"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Максимальная оптимизация производительности"}),": Нулевые накладные расходы благодаря использованию нативных возможностей и интеллектуальной стратегии кэширования"]}),"\n"]}),"\n",(0,s.jsxs)(r.div,{className:"rspress-directive tip",children:[(0,s.jsx)(r.div,{className:"rspress-directive-title",children:"TIP"}),(0,s.jsx)(r.div,{className:"rspress-directive-content",children:(0,s.jsx)(r.p,{children:"Gez ориентирован на создание высокопроизводительной и легко расширяемой инфраструктуры для микрофронтендов, особенно подходящей для крупномасштабных приложений с серверным рендерингом."})})]}),"\n",(0,s.jsxs)(r.h2,{id:"технические-спецификации",children:["Технические спецификации",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#технические-спецификации",children:"#"})]}),"\n",(0,s.jsxs)(r.h3,{id:"зависимости-окружения",children:["Зависимости окружения",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#зависимости-окружения",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["Подробные требования к браузерам и окружению Node.js можно найти в документации ",(0,s.jsx)(r.a,{href:"/guide/start/environment",children:"Требования к окружению"}),"."]}),"\n",(0,s.jsxs)(r.h3,{id:"основной-технологический-стек",children:["Основной технологический стек",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#основной-технологический-стек",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Управление зависимостями"}),": Использование ",(0,s.jsx)(r.a,{href:"https://caniuse.com/?search=import%20map",target:"_blank",rel:"noopener noreferrer",children:"Import Maps"})," для отображения модулей и ",(0,s.jsx)(r.a,{href:"https://github.com/guybedford/es-module-shims",target:"_blank",rel:"noopener noreferrer",children:"es-module-shims"})," для обеспечения совместимости"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Система сборки"}),": Обработка внешних зависимостей с помощью ",(0,s.jsx)(r.a,{href:"https://rspack.dev/config/externals#externalstypemodule-import",target:"_blank",rel:"noopener noreferrer",children:"module-import"})," на основе Rspack"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Инструменты разработки"}),": Поддержка горячей замены модулей ESM и нативного выполнения TypeScript"]}),"\n"]}),"\n",(0,s.jsxs)(r.h2,{id:"позиционирование-фреймворка",children:["Позиционирование фреймворка",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#позиционирование-фреймворка",children:"#"})]}),"\n",(0,s.jsxs)(r.p,{children:["Gez отличается от ",(0,s.jsx)(r.a,{href:"https://nextjs.org",target:"_blank",rel:"noopener noreferrer",children:"Next.js"})," или ",(0,s.jsx)(r.a,{href:"https://nuxt.com/",target:"_blank",rel:"noopener noreferrer",children:"Nuxt.js"}),", так как ориентирован на предоставление инфраструктуры для микрофронтендов:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Система модульных связей"}),": Обеспечивает эффективный и надежный импорт и экспорт модулей"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Серверный рендеринг"}),": Предоставляет гибкие механизмы реализации SSR"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Поддержка системы типов"}),": Полная интеграция с TypeScript"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Независимость от фреймворков"}),": Поддержка интеграции с основными фронтенд-фреймворками"]}),"\n"]}),"\n",(0,s.jsxs)(r.h2,{id:"архитектурный-дизайн",children:["Архитектурный дизайн",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#архитектурный-дизайн",children:"#"})]}),"\n",(0,s.jsxs)(r.h3,{id:"централизованное-управление-зависимостями",children:["Централизованное управление зависимостями",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#централизованное-управление-зависимостями",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Единый источник зависимостей"}),": Централизованное управление сторонними зависимостями"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Автоматическое распространение"}),": Глобальная автоматическая синхронизация обновлений зависимостей"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Согласованность версий"}),": Точный контроль версий зависимостей"]}),"\n"]}),"\n",(0,s.jsxs)(r.h3,{id:"модульный-дизайн",children:["Модульный дизайн",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#модульный-дизайн",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Разделение обязанностей"}),": Разделение бизнес-логики и инфраструктуры"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Механизм плагинов"}),": Гибкая комбинация и замена модулей"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Стандартные интерфейсы"}),": Унифицированные протоколы взаимодействия между модулями"]}),"\n"]}),"\n",(0,s.jsxs)(r.h3,{id:"оптимизация-производительности",children:["Оптимизация производительности",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#оптимизация-производительности",children:"#"})]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Принцип нулевых накладных расходов"}),": Максимальное использование нативных возможностей браузера"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Интеллектуальное кэширование"}),": Точная стратегия кэширования на основе хэша содержимого"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Отложенная загрузка"}),": Тонкое разделение кода и управление зависимостями"]}),"\n"]}),"\n",(0,s.jsxs)(r.h2,{id:"зрелость-проекта",children:["Зрелость проекта",(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#зрелость-проекта",children:"#"})]}),"\n",(0,s.jsx)(r.p,{children:"Gez прошел почти 5 лет итеративного развития (от v1.0 до v3.0) и был полностью проверен в корпоративных средах. В настоящее время он поддерживает стабильную работу десятков бизнес-проектов и продолжает способствовать модернизации технологического стека. Стабильность, надежность и преимущества в производительности фреймворка были подтверждены на практике, что делает его надежной основой для разработки крупномасштабных приложений."})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}let l=h;h.__RSPRESS_PAGE_META={},h.__RSPRESS_PAGE_META["ru%2Fguide%2Fstart%2Fintroduction.md"]={toc:[{text:"История проекта",id:"история-проекта",depth:2},{text:"Технологический контекст",id:"технологический-контекст",depth:2},{text:"Проблемы существующих решений",id:"проблемы-существующих-решений",depth:3},{text:"Технологические инновации",id:"технологические-инновации",depth:3},{text:"Технические спецификации",id:"технические-спецификации",depth:2},{text:"Зависимости окружения",id:"зависимости-окружения",depth:3},{text:"Основной технологический стек",id:"основной-технологический-стек",depth:3},{text:"Позиционирование фреймворка",id:"позиционирование-фреймворка",depth:2},{text:"Архитектурный дизайн",id:"архитектурный-дизайн",depth:2},{text:"Централизованное управление зависимостями",id:"централизованное-управление-зависимостями",depth:3},{text:"Модульный дизайн",id:"модульный-дизайн",depth:3},{text:"Оптимизация производительности",id:"оптимизация-производительности",depth:3},{text:"Зрелость проекта",id:"зрелость-проекта",depth:2}],title:"Введение",headingTitle:"Введение",frontmatter:{titleSuffix:"Обзор фреймворка Gez и технологические инновации",description:"Узнайте больше о проекте Gez, эволюции технологий и ключевых преимуществах этого микрофронтенд-фреймворка, а также исследуйте современные решения для серверного рендеринга на основе ESM.",head:[["meta",{property:"keywords",content:"Gez, микрофронтенд, ESM, серверный рендеринг, SSR, технологические инновации, Module Federation"}]]}}}}]);