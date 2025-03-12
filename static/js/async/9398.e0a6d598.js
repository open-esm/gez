"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["9398"],{71841:function(e,n,s){s.r(n),s.d(n,{default:()=>a});var t=s(31549),i=s(6603);function r(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",h3:"h3",ul:"ul",li:"li",strong:"strong",ol:"ol"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"du-partage-de-composants-\\xe0-la-modularit\\xe9-native--l\\xe9volution-du-framework-de-micro-frontends-gez",children:["Du partage de composants \xe0 la modularit\xe9 native : L'\xe9volution du framework de micro-frontends Gez",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#du-partage-de-composants-\\xe0-la-modularit\\xe9-native--l\\xe9volution-du-framework-de-micro-frontends-gez",children:"#"})]}),"\n",(0,t.jsxs)(n.h2,{id:"contexte-du-projet",children:["Contexte du projet",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#contexte-du-projet",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Au cours des derni\xe8res ann\xe9es, l'architecture des micro-frontends a cherch\xe9 \xe0 trouver la bonne voie. Cependant, nous avons \xe9t\xe9 t\xe9moins de diverses solutions techniques complexes qui, \xe0 travers des couches d'emballage et d'isolation artificielle, tentent de simuler un monde id\xe9al de micro-frontends. Ces solutions ont entra\xeen\xe9 une lourde charge de performance, rendant le d\xe9veloppement simple complexe et les processus standard obscurs."}),"\n",(0,t.jsxs)(n.h3,{id:"limites-des-solutions-traditionnelles",children:["Limites des solutions traditionnelles",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#limites-des-solutions-traditionnelles",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Dans la pratique de l'architecture des micro-frontends, nous avons profond\xe9ment ressenti les nombreuses limitations des solutions traditionnelles :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Perte de performance"})," : L'injection de d\xe9pendances \xe0 l'ex\xe9cution, le proxy du bac \xe0 sable JS, chaque op\xe9ration consomme des performances pr\xe9cieuses."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Isolation fragile"})," : L'environnement de bac \xe0 sable artificiellement cr\xe9\xe9 ne peut jamais atteindre la capacit\xe9 d'isolation native du navigateur."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Complexit\xe9 de construction"})," : Pour g\xe9rer les relations de d\xe9pendance, il a fallu modifier les outils de construction, rendant les projets simples difficiles \xe0 maintenir."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"R\xe8gles de personnalisation"})," : Les strat\xe9gies de d\xe9ploiement sp\xe9ciales, le traitement \xe0 l'ex\xe9cution, chaque \xe9tape s'\xe9carte des processus de d\xe9veloppement modernes standard."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Limites de l'\xe9cosyst\xe8me"})," : Le couplage des frameworks, les API personnalis\xe9es, forcent le choix technologique \xe0 se lier \xe0 un \xe9cosyst\xe8me sp\xe9cifique."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Ces probl\xe8mes ont \xe9t\xe9 particuli\xe8rement \xe9vidents dans un projet d'entreprise en 2019. \xc0 l'\xe9poque, un grand produit a \xe9t\xe9 divis\xe9 en une dizaine de sous-syst\xe8mes m\xe9tiers ind\xe9pendants, qui devaient partager un ensemble de composants de base et de composants m\xe9tiers. La solution initiale de partage de composants bas\xe9e sur des paquets npm a r\xe9v\xe9l\xe9 de graves probl\xe8mes d'efficacit\xe9 de maintenance : lorsque les composants partag\xe9s \xe9taient mis \xe0 jour, tous les sous-syst\xe8mes d\xe9pendant de ces composants devaient subir un processus complet de construction et de d\xe9ploiement."}),"\n",(0,t.jsxs)(n.h2,{id:"\\xe9volution-technique",children:["\xc9volution technique",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\\xe9volution-technique",children:"#"})]}),"\n",(0,t.jsxs)(n.h3,{id:"v10--exploration-des-composants-distants",children:["v1.0 : Exploration des composants distants",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#v10--exploration-des-composants-distants",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Pour r\xe9soudre le probl\xe8me d'efficacit\xe9 du partage de composants, Gez v1.0 a introduit un m\xe9canisme de composants RemoteView bas\xe9 sur le protocole HTTP. Cette solution a permis l'assemblage \xe0 la demande du code entre les services via des requ\xeates dynamiques \xe0 l'ex\xe9cution, r\xe9solvant ainsi le probl\xe8me de la cha\xeene de d\xe9pendances de construction trop longue. Cependant, en raison du manque de m\xe9canisme de communication standardis\xe9 \xe0 l'ex\xe9cution, la synchronisation des \xe9tats et la transmission des \xe9v\xe9nements entre les services restaient inefficaces."}),"\n",(0,t.jsxs)(n.h3,{id:"v20--tentative-de-module-federation",children:["v2.0 : Tentative de Module Federation",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#v20--tentative-de-module-federation",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Dans la version v2.0, nous avons adopt\xe9 la technologie de ",(0,t.jsx)(n.a,{href:"https://webpack.js.org/concepts/module-federation/",target:"_blank",rel:"noopener noreferrer",children:"Module Federation"})," de ",(0,t.jsx)(n.a,{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Webpack 5.0"}),". Cette technologie, gr\xe2ce \xe0 un m\xe9canisme de chargement de modules unifi\xe9 et \xe0 un conteneur d'ex\xe9cution, a consid\xe9rablement am\xe9lior\xe9 l'efficacit\xe9 de la collaboration entre les services. Cependant, dans la pratique \xe0 grande \xe9chelle, le m\xe9canisme de mise en œuvre ferm\xe9 de Module Federation a pos\xe9 de nouveaux d\xe9fis : il \xe9tait difficile de g\xe9rer pr\xe9cis\xe9ment les versions des d\xe9pendances, en particulier lors de l'unification des d\xe9pendances partag\xe9es entre plusieurs services, o\xf9 des conflits de version et des anomalies d'ex\xe9cution \xe9taient fr\xe9quents."]}),"\n",(0,t.jsxs)(n.h2,{id:"embrasser-l\\xe8re-nouvelle-de-lesm",children:["Embrasser l'\xe8re nouvelle de l'ESM",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#embrasser-l\\xe8re-nouvelle-de-lesm",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Lors de la planification de la version v3.0, nous avons observ\xe9 en profondeur les tendances de d\xe9veloppement de l'\xe9cosyst\xe8me frontend et constat\xe9 que les progr\xe8s des capacit\xe9s natives des navigateurs offraient de nouvelles possibilit\xe9s pour l'architecture des micro-frontends :"}),"\n",(0,t.jsxs)(n.h3,{id:"syst\\xe8me-de-modules-standardis\\xe9",children:["Syst\xe8me de modules standardis\xe9",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#syst\\xe8me-de-modules-standardis\\xe9",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Avec le support complet des ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",target:"_blank",rel:"noopener noreferrer",children:"ES Modules"})," par les principaux navigateurs et la maturit\xe9 de la sp\xe9cification ",(0,t.jsx)(n.a,{href:"https://github.com/WICG/import-maps",target:"_blank",rel:"noopener noreferrer",children:"Import Maps"}),", le d\xe9veloppement frontend est entr\xe9 dans une v\xe9ritable \xe8re de modularit\xe9. Selon les statistiques de ",(0,t.jsx)(n.a,{href:"https://caniuse.com/?search=importmap",target:"_blank",rel:"noopener noreferrer",children:"Can I Use"}),", le taux de support natif de l'ESM par les principaux navigateurs (Chrome >= 89, Edge >= 89, Firefox >= 108, Safari >= 16.4) a atteint 93.5%, ce qui nous offre les avantages suivants :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Gestion des d\xe9pendances standardis\xe9e"})," : Import Maps fournit la capacit\xe9 de r\xe9solution des d\xe9pendances de modules au niveau du navigateur, sans injection complexe \xe0 l'ex\xe9cution."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Optimisation du chargement des ressources"})," : Le m\xe9canisme de cache natif des modules du navigateur am\xe9liore consid\xe9rablement l'efficacit\xe9 du chargement des ressources."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Simplification du processus de construction"})," : Le mode de d\xe9veloppement bas\xe9 sur ESM rend les processus de construction des environnements de d\xe9veloppement et de production plus coh\xe9rents."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"En outre, gr\xe2ce au support du mode de compatibilit\xe9 (Chrome >= 87, Edge >= 88, Firefox >= 78, Safari >= 14), nous pouvons augmenter encore la couverture des navigateurs \xe0 96.81%, ce qui nous permet de maintenir des performances \xe9lev\xe9es tout en ne sacrifiant pas le support des anciens navigateurs."}),"\n",(0,t.jsxs)(n.h3,{id:"perc\\xe9es-en-mati\\xe8re-de-performance-et-disolation",children:["Perc\xe9es en mati\xe8re de performance et d'isolation",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#perc\\xe9es-en-mati\\xe8re-de-performance-et-disolation",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Le syst\xe8me de modules natif apporte non seulement la standardisation, mais aussi une am\xe9lioration qualitative de la performance et de l'isolation :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Aucun surco\xfbt \xe0 l'ex\xe9cution"})," : Adieu au proxy de bac \xe0 sable JavaScript et \xe0 l'injection \xe0 l'ex\xe9cution des solutions traditionnelles de micro-frontends."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"M\xe9canisme d'isolation fiable"})," : La port\xe9e stricte des modules ESM fournit naturellement la capacit\xe9 d'isolation la plus fiable."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Gestion pr\xe9cise des d\xe9pendances"})," : L'analyse statique des importations rend les relations de d\xe9pendance plus claires et le contr\xf4le des versions plus pr\xe9cis."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"choix-des-outils-de-construction",children:["Choix des outils de construction",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#choix-des-outils-de-construction",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Dans la mise en œuvre de la solution technique, le choix des outils de construction a \xe9t\xe9 un point de d\xe9cision cl\xe9. Apr\xe8s pr\xe8s d'un an de recherche technique et de pratique, notre choix a \xe9volu\xe9 comme suit :"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Exploration de Vite"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Avantage : Serveur de d\xe9veloppement bas\xe9 sur ESM, offrant une exp\xe9rience de d\xe9veloppement ultime."}),"\n",(0,t.jsx)(n.li,{children:"D\xe9fi : Les diff\xe9rences de construction entre les environnements de d\xe9veloppement et de production introduisent une certaine incertitude."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["\xc9tablissement de ",(0,t.jsx)(n.a,{href:"https://www.rspack.dev/",target:"_blank",rel:"noopener noreferrer",children:"Rspack"})]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Avantage de performance : Compilation haute performance bas\xe9e sur ",(0,t.jsx)(n.a,{href:"https://www.rust-lang.org/",target:"_blank",rel:"noopener noreferrer",children:"Rust"}),", am\xe9liorant consid\xe9rablement la vitesse de construction."]}),"\n",(0,t.jsx)(n.li,{children:"Support de l'\xe9cosyst\xe8me : Haute compatibilit\xe9 avec l'\xe9cosyst\xe8me Webpack, r\xe9duisant les co\xfbts de migration."}),"\n",(0,t.jsx)(n.li,{children:"Support ESM : La pratique du projet Rslib a valid\xe9 sa fiabilit\xe9 dans la construction ESM."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Cette d\xe9cision nous a permis de maintenir une exp\xe9rience de d\xe9veloppement tout en obtenant un support plus stable pour l'environnement de production. Bas\xe9 sur la combinaison d'ESM et de Rspack, nous avons finalement construit une solution de micro-frontends haute performance et peu intrusive."}),"\n",(0,t.jsxs)(n.h2,{id:"perspectives-futures",children:["Perspectives futures",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#perspectives-futures",children:"#"})]}),"\n",(0,t.jsx)(n.p,{children:"Dans le plan de d\xe9veloppement futur, le framework Gez se concentrera sur les trois directions suivantes :"}),"\n",(0,t.jsxs)(n.h3,{id:"optimisation-approfondie-dimport-maps",children:["Optimisation approfondie d'Import Maps",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#optimisation-approfondie-dimport-maps",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Gestion dynamique des d\xe9pendances"})," : Mise en œuvre d'une planification intelligente des versions des d\xe9pendances \xe0 l'ex\xe9cution, r\xe9solvant les conflits de d\xe9pendances entre plusieurs applications."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Strat\xe9gie de pr\xe9chargement"})," : Pr\xe9chargement intelligent bas\xe9 sur l'analyse des routes, am\xe9liorant l'efficacit\xe9 du chargement des ressources."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Optimisation de la construction"})," : G\xe9n\xe9ration automatique de la configuration optimale d'Import Maps, r\xe9duisant les co\xfbts de configuration manuelle pour les d\xe9veloppeurs."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"solution-de-routage-ind\\xe9pendante-du-framework",children:["Solution de routage ind\xe9pendante du framework",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#solution-de-routage-ind\\xe9pendante-du-framework",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Abstraction de routage unifi\xe9e"})," : Conception d'une interface de routage ind\xe9pendante du framework, supportant Vue, React et d'autres frameworks populaires."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Routage des micro-applications"})," : Mise en œuvre de l'interaction des routes entre les applications, maintenant la coh\xe9rence entre l'URL et l'\xe9tat de l'application."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Middleware de routage"})," : Fourniture d'un m\xe9canisme de middleware extensible, supportant le contr\xf4le des permissions, les transitions de page, etc."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"meilleures-pratiques-de-communication-inter-frameworks",children:["Meilleures pratiques de communication inter-frameworks",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#meilleures-pratiques-de-communication-inter-frameworks",children:"#"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Application exemple"})," : Fourniture d'un exemple complet de communication inter-frameworks, couvrant Vue, React, Preact et d'autres frameworks populaires."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Synchronisation des \xe9tats"})," : Solution l\xe9g\xe8re de partage d'\xe9tat bas\xe9e sur ESM."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Bus d'\xe9v\xe9nements"})," : M\xe9canisme de communication d'\xe9v\xe9nements standardis\xe9, supportant la communication d\xe9coupl\xe9e entre les applications."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Gr\xe2ce \xe0 ces optimisations et extensions, nous esp\xe9rons faire de Gez une solution de micro-frontends plus compl\xe8te et facile \xe0 utiliser, offrant aux d\xe9veloppeurs une meilleure exp\xe9rience de d\xe9veloppement et une efficacit\xe9 accrue."})]})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}let a=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["fr%2Fblog%2Fbirth-of-gez.md"]={toc:[{text:"Contexte du projet",id:"contexte-du-projet",depth:2},{text:"Limites des solutions traditionnelles",id:"limites-des-solutions-traditionnelles",depth:3},{text:"\xc9volution technique",id:"\xe9volution-technique",depth:2},{text:"v1.0 : Exploration des composants distants",id:"v10--exploration-des-composants-distants",depth:3},{text:"v2.0 : Tentative de Module Federation",id:"v20--tentative-de-module-federation",depth:3},{text:"Embrasser l'\xe8re nouvelle de l'ESM",id:"embrasser-l\xe8re-nouvelle-de-lesm",depth:2},{text:"Syst\xe8me de modules standardis\xe9",id:"syst\xe8me-de-modules-standardis\xe9",depth:3},{text:"Perc\xe9es en mati\xe8re de performance et d'isolation",id:"perc\xe9es-en-mati\xe8re-de-performance-et-disolation",depth:3},{text:"Choix des outils de construction",id:"choix-des-outils-de-construction",depth:3},{text:"Perspectives futures",id:"perspectives-futures",depth:2},{text:"Optimisation approfondie d'Import Maps",id:"optimisation-approfondie-dimport-maps",depth:3},{text:"Solution de routage ind\xe9pendante du framework",id:"solution-de-routage-ind\xe9pendante-du-framework",depth:3},{text:"Meilleures pratiques de communication inter-frameworks",id:"meilleures-pratiques-de-communication-inter-frameworks",depth:3}],title:"Du partage de composants \xe0 la modularit\xe9 native : L'\xe9volution du framework de micro-frontends Gez",headingTitle:"Du partage de composants \xe0 la modularit\xe9 native : L'\xe9volution du framework de micro-frontends Gez",frontmatter:{titleSuffix:"Des d\xe9fis des micro-frontends \xe0 l'innovation ESM : L'\xe9volution du framework Gez",description:"Une exploration approfondie de l'\xe9volution du framework Gez, des d\xe9fis de l'architecture traditionnelle des micro-frontends aux innovations bas\xe9es sur ESM, partageant les exp\xe9riences techniques en mati\xe8re d'optimisation des performances, de gestion des d\xe9pendances et de choix d'outils de construction.",head:[["meta",{property:"keywords",content:"Gez, framework de micro-frontends, ESM, Import Maps, Rspack, Module Federation, gestion des d\xe9pendances, optimisation des performances, \xe9volution technique, rendu c\xf4t\xe9 serveur"}]],sidebar:!1}}}}]);