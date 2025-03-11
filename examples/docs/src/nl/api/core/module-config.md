---
titleSuffix: Gez Framework Module Configuratie API Referentie
description: Gedetailleerde uitleg over de ModuleConfig configuratie-interface van het Gez framework, inclusief module import/export regels, aliasconfiguratie en extern afhankelijkheidsbeheer, om ontwikkelaars te helpen het modulaire systeem van het framework beter te begrijpen.
head:
  - - meta
    - property: keywords
      content: Gez, ModuleConfig, moduleconfiguratie, module import/export, externe afhankelijkheden, aliasconfiguratie, afhankelijkheidsbeheer, webapplicatieframework
---

# ModuleConfig

ModuleConfig biedt de moduleconfiguratiefunctionaliteit van het Gez framework, gebruikt om de import/export regels van modules, aliasconfiguratie en externe afhankelijkheden te definiëren.

## Type Definitie

### PathType

- **Type Definitie**:
```ts
enum PathType {
  npm = 'npm:', 
  root = 'root:'
}
```

Enum voor modulepadtype:
- `npm`: Geeft afhankelijkheden in node_modules aan
- `root`: Geeft bestanden in de projectroot aan

### ModuleConfig

- **Type Definitie**:
```ts
interface ModuleConfig {
  exports?: string[]
  imports?: Record<string, string>
  externals?: Record<string, string>
}
```

Moduleconfiguratie-interface, gebruikt om de export, import en externe afhankelijkheidsconfiguratie van een service te definiëren.

#### exports

Exportconfiguratielijst, die specifieke code-eenheden (zoals componenten, hulpfuncties, etc.) in de service naar buiten beschikbaar stelt in ESM-formaat.

Ondersteunt twee typen:
- `root:*`: Exporteert broncodebestanden, bijv.: 'root:src/components/button.vue'
- `npm:*`: Exporteert externe afhankelijkheden, bijv.: 'npm:vue'

#### imports

Importconfiguratiemapping, configureert de externe modules die moeten worden geïmporteerd en hun lokale paden.

De configuratie verschilt afhankelijk van de installatiemethode:
- Broncode-installatie (Workspace, Git): moet naar de dist-directory wijzen
- Pakketinstallatie (Link, statische server, privémirror, File): wijst direct naar de pakketdirectory

#### externals

Externe afhankelijkheidsmapping, configureert de te gebruiken externe afhankelijkheden, meestal afhankelijkheden van externe modules.

**Voorbeeld**:
```ts title="entry.node.ts"
import type { GezOptions } from '@gez/core';

export default {
  modules: {
    // Exportconfiguratie
    exports: [
      'root:src/components/button.vue',  // Exporteert broncodebestand
      'root:src/utils/format.ts',
      'npm:vue',  // Exporteert externe afhankelijkheid
      'npm:vue-router'
    ],

    // Importconfiguratie
    imports: {
      // Broncode-installatie: moet naar dist-directory wijzen
      'ssr-remote': 'root:./node_modules/ssr-remote/dist',
      // Pakketinstallatie: wijst direct naar pakketdirectory
      'other-remote': 'root:./node_modules/other-remote'
    },

    // Externe afhankelijkheidsconfiguratie
    externals: {
      'vue': 'ssr-remote/npm/vue',
      'vue-router': 'ssr-remote/npm/vue-router'
    }
  }
} satisfies GezOptions;
```

### ParsedModuleConfig

- **Type Definitie**:
```ts
interface ParsedModuleConfig {
  name: string
  root: string
  exports: {
    name: string
    type: PathType
    importName: string
    exportName: string
    exportPath: string
    externalName: string
  }[]
  imports: {
    name: string
    localPath: string
  }[]
  externals: Record<string, { match: RegExp; import?: string }>
}
```

Geparseerde moduleconfiguratie, die de originele moduleconfiguratie omzet naar een gestandaardiseerd intern formaat:

#### name
Naam van de huidige service
- Gebruikt om de module te identificeren en importpaden te genereren

#### root
Rootpad van de huidige service
- Gebruikt om relatieve paden op te lossen en build-artefacten op te slaan

#### exports
Exportconfiguratielijst
- `name`: Origineel exportpad, bijv.: 'npm:vue' of 'root:src/components'
- `type`: Padtype (npm of root)
- `importName`: Importnaam, formaat: '${serviceName}/${type}/${path}'
- `exportName`: Exportpad, relatief ten opzichte van de serviceroot
- `exportPath`: Werkelijk bestandspad
- `externalName`: Naam van externe afhankelijkheid, gebruikt als identificatie wanneer andere services deze module importeren

#### imports
Importconfiguratielijst
- `name`: Naam van de externe service
- `localPath`: Lokaal opslagpad, gebruikt om build-artefacten van externe modules op te slaan

#### externals
Externe afhankelijkheidsmapping
- Mapt importpaden van modules naar de werkelijke modulelocatie
- `match`: Reguliere expressie om importstatements te matchen
- `import`: Werkelijk modulepad