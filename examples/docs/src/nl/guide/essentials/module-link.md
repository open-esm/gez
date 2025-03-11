---
titleSuffix: Gez Framework Service Interoperability Code Sharing Mechanism
description: Gedetailleerde uitleg over de module linking mechanismen van het Gez framework, inclusief code sharing tussen services, dependency management en ESM-specificatie implementatie, om ontwikkelaars te helpen efficiënte micro-frontend applicaties te bouwen.
head:
  - - meta
    - property: keywords
      content: Gez, Module Linking, Module Link, ESM, Code Sharing, Dependency Management, Micro-frontend
---

# Module Linking

Het Gez framework biedt een compleet module linking mechanisme voor het beheren van code sharing en afhankelijkheden tussen services. Dit mechanisme is gebaseerd op de ESM (ECMAScript Module) specificatie en ondersteunt het exporteren en importeren van modules op broncodeniveau, evenals volledige dependency management functionaliteit.

### Kernconcepten

#### Module Exporteren
Module exporteren is het proces waarbij specifieke code-eenheden (zoals componenten, utility functies, etc.) vanuit een service worden blootgesteld in ESM-formaat. Er worden twee exporttypen ondersteund:
- **Broncode Exporteren**: Direct exporteren van broncodebestanden uit het project
- **Dependency Exporteren**: Exporteren van gebruikte third-party dependencies

#### Module Importeren
Module importeren is het proces waarbij code-eenheden die door andere services zijn geëxporteerd, worden geïmporteerd in een service. Er worden meerdere installatiemethoden ondersteund:
- **Broncode Installatie**: Geschikt voor ontwikkelomgevingen, ondersteunt real-time wijzigingen en hot reloading
- **Pakket Installatie**: Geschikt voor productieomgevingen, maakt gebruik van build artifacts

### Preloading Mechanism

Om de serviceprestaties te optimaliseren, heeft Gez een intelligent module preloading mechanisme geïmplementeerd:

1. **Dependency Analyse**
   - Analyseer de afhankelijkheden tussen componenten tijdens het bouwen
   - Identificeer kernmodules op kritieke paden
   - Bepaal de laadprioriteit van modules

2. **Laadstrategie**
   - **Direct Laden**: Kernmodules op kritieke paden
   - **Uitgesteld Laden**: Niet-kritieke functionaliteitsmodules
   - **Op Vraag Laden**: Modules die conditioneel worden gerenderd

3. **Resource Optimalisatie**
   - Intelligente code splitting strategie
   - Cachebeheer op moduleniveau
   - Compileren en bundelen op aanvraag

## Module Exporteren

### Configuratie Uitleg

Configureer de te exporteren modules in `entry.node.ts`:

```ts title="src/entry.node.ts"
import type { GezOptions } from '@gez/core';

export default {
    modules: {
        exports: [
            // Exporteer broncodebestanden
            'root:src/components/button.vue',  // Vue component
            'root:src/utils/format.ts',        // Utility functie
            // Exporteer third-party dependencies
            'npm:vue',                         // Vue framework
            'npm:vue-router'                   // Vue Router
        ]
    }
} satisfies GezOptions;
```

De exportconfiguratie ondersteunt twee typen:
- `root:*`: Exporteer broncodebestanden, pad relatief ten opzichte van de projectroot
- `npm:*`: Exporteer third-party dependencies, specificeer direct de pakketnaam

## Module Importeren

### Configuratie Uitleg

Configureer de te importeren modules in `entry.node.ts`:

```ts title="src/entry.node.ts"
import type { GezOptions } from '@gez/core';

export default {
    modules: {
        // Import configuratie
        imports: {
            // Broncode Installatie: Verwijs naar de build artifact directory
            'ssr-remote': 'root:./node_modules/ssr-remote/dist',
            // Pakket Installatie: Verwijs naar de pakketdirectory
            'other-remote': 'root:./node_modules/other-remote'
        },
        // Externe dependency configuratie
        externals: {
            // Gebruik dependencies van externe modules
            'vue': 'ssr-remote/npm/vue',
            'vue-router': 'ssr-remote/npm/vue-router'
        }
    }
} satisfies GezOptions;
```

Configuratie uitleg:
1. **imports**: Configureer het lokale pad van externe modules
   - Broncode Installatie: Verwijs naar de build artifact directory (dist)
   - Pakket Installatie: Verwijs direct naar de pakketdirectory

2. **externals**: Configureer externe dependencies
   - Voor het delen van dependencies tussen externe modules
   - Voorkomt dubbele bundeling van dezelfde dependencies
   - Ondersteunt het delen van dependencies tussen meerdere modules

### Installatiemethoden

#### Broncode Installatie
Geschikt voor ontwikkelomgevingen, ondersteunt real-time wijzigingen en hot reloading.

1. **Workspace Methode**
Aanbevolen voor gebruik in Monorepo projecten:
```ts title="package.json"
{
    "devDependencies": {
        "ssr-remote": "workspace:*"
    }
}
```

2. **Link Methode**
Voor lokale ontwikkeling en debugging:
```ts title="package.json"
{
    "devDependencies": {
        "ssr-remote": "link:../ssr-remote"
    }
}
```

#### Pakket Installatie
Geschikt voor productieomgevingen, maakt direct gebruik van build artifacts.

1. **NPM Registry**
Installatie via npm registry:
```ts title="package.json"
{
    "dependencies": {
        "ssr-remote": "^1.0.0"
    }
}
```

2. **Statische Server**
Installatie via HTTP/HTTPS protocol:
```ts title="package.json"
{
    "dependencies": {
        "ssr-remote": "https://cdn.example.com/ssr-remote/1.0.0.tgz"
    }
}
```

## Pakket Bouwen

### Configuratie Uitleg

Configureer de build opties in `entry.node.ts`:

```ts title="src/entry.node.ts"
import type { GezOptions } from '@gez/core';

export default {
    // Module export configuratie
    modules: {
        exports: [
            'root:src/components/button.vue',
            'root:src/utils/format.ts',
            'npm:vue'
        ]
    },
    // Build configuratie
    pack: {
        // Schakel build in
        enable: true,

        // Output configuratie
        outputs: [
            'dist/client/versions/latest.tgz',
            'dist/client/versions/1.0.0.tgz'
        ],

        // Aangepaste package.json
        packageJson: async (gez, pkg) => {
            pkg.version = '1.0.0';
            return pkg;
        },

        // Pre-build verwerking
        onBefore: async (gez, pkg) => {
            // Genereer type declaraties
            // Voer testcases uit
            // Update documentatie, etc.
        },

        // Post-build verwerking
        onAfter: async (gez, pkg, file) => {
            // Upload naar CDN
            // Publiceer naar npm repository
            // Deploy naar testomgeving, etc.
        }
    }
} satisfies GezOptions;
```

### Build Artifacts

```
your-app-name.tgz
├── package.json        # Pakket informatie
├── index.js            # Productieomgeving entry
├── server/             # Server resources
│   └── manifest.json   # Server resource mapping
├── node/               # Node.js runtime
└── client/             # Client resources
    └── manifest.json   # Client resource mapping
```

### Publicatieproces

```bash
# 1. Bouw productieversie
gez build

# 2. Publiceer naar npm
npm publish dist/versions/your-app-name.tgz
```

## Best Practices

### Ontwikkelomgeving Configuratie
- **Dependency Management**
  - Gebruik Workspace of Link methode voor dependency installatie
  - Beheer dependency versies centraal
  - Voorkom dubbele installatie van dezelfde dependencies

- **Ontwikkelervaring**
  - Schakel hot reloading in
  - Configureer een geschikte preloading strategie
  - Optimaliseer build snelheid

### Productieomgeving Configuratie
- **Deploy Strategie**
  - Gebruik NPM Registry of een statische server
  - Zorg voor integriteit van build artifacts
  - Implementeer een canary release mechanisme

- **Prestatieoptimalisatie**
  - Configureer resource preloading op de juiste manier
  - Optimaliseer module laadvolgorde
  - Implementeer effectieve caching strategieën

### Versiebeheer
- **Versiebeheerrichtlijnen**
  - Volg semantische versiebeheerrichtlijnen
  - Onderhoud gedetailleerde changelogs
  - Voer compatibiliteitstesten uit voor versies

- **Dependency Updates**
  - Update dependencies tijdig
  - Voer regelmatig security audits uit
  - Houd dependency versies consistent