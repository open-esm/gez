---
titleSuffix: Dokumentacja API konfiguracji modułów frameworka Gez
description: Szczegółowy opis interfejsu konfiguracji ModuleConfig frameworka Gez, obejmujący reguły importu i eksportu modułów, konfigurację aliasów oraz zarządzanie zależnościami zewnętrznymi, pomagający programistom dogłębnie zrozumieć system modułowy frameworka.
head:
  - - meta
    - property: keywords
      content: Gez, ModuleConfig, konfiguracja modułów, import i eksport modułów, zależności zewnętrzne, konfiguracja aliasów, zarządzanie zależnościami, framework aplikacji webowych
---

# ModuleConfig

ModuleConfig zapewnia funkcjonalność konfiguracji modułów w frameworku Gez, służącą do definiowania reguł importu i eksportu modułów, konfiguracji aliasów oraz zależności zewnętrznych.

## Definicje typów

### PathType

- **Definicja typu**:
```ts
enum PathType {
  npm = 'npm:', 
  root = 'root:'
}
```

Enum typów ścieżek modułów:
- `npm`: oznacza zależność z node_modules
- `root`: oznacza plik w katalogu głównym projektu

### ModuleConfig

- **Definicja typu**:
```ts
interface ModuleConfig {
  exports?: string[]
  imports?: Record<string, string>
  externals?: Record<string, string>
}
```

Interfejs konfiguracji modułów, służący do definiowania eksportu, importu i konfiguracji zależności zewnętrznych usług.

#### exports

Lista konfiguracji eksportu, która udostępnia określone jednostki kodu (np. komponenty, funkcje narzędziowe) w formacie ESM.

Obsługiwane są dwa typy:
- `root:*`: eksport plików źródłowych, np.: 'root:src/components/button.vue'
- `npm:*`: eksport zależności zewnętrznych, np.: 'npm:vue'

#### imports

Mapa konfiguracji importu, konfigurująca zdalne moduły do zaimportowania i ich lokalne ścieżki.

Konfiguracja zależy od sposobu instalacji:
- Instalacja ze źródeł (Workspace, Git): wymaga wskazania katalogu dist
- Instalacja pakietów (Link, serwer statyczny, prywatne repozytorium, File): bezpośrednio wskazuje katalog pakietu

#### externals

Mapa zależności zewnętrznych, konfigurująca zależności zewnętrzne do użycia, zazwyczaj pochodzące ze zdalnych modułów.

**Przykład**:
```ts title="entry.node.ts"
import type { GezOptions } from '@gez/core';

export default {
  modules: {
    // Konfiguracja eksportu
    exports: [
      'root:src/components/button.vue',  // Eksport pliku źródłowego
      'root:src/utils/format.ts',
      'npm:vue',  // Eksport zależności zewnętrznej
      'npm:vue-router'
    ],

    // Konfiguracja importu
    imports: {
      // Instalacja ze źródeł: wymaga wskazania katalogu dist
      'ssr-remote': 'root:./node_modules/ssr-remote/dist',
      // Instalacja pakietów: bezpośrednio wskazuje katalog pakietu
      'other-remote': 'root:./node_modules/other-remote'
    },

    // Konfiguracja zależności zewnętrznych
    externals: {
      'vue': 'ssr-remote/npm/vue',
      'vue-router': 'ssr-remote/npm/vue-router'
    }
  }
} satisfies GezOptions;
```

### ParsedModuleConfig

- **Definicja typu**:
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

Sparsowana konfiguracja modułów, przekształcająca oryginalną konfigurację modułów w znormalizowany format wewnętrzny:

#### name
Nazwa bieżącej usługi
- Służy do identyfikacji modułu i generowania ścieżek importu

#### root
Ścieżka katalogu głównego bieżącej usługi
- Służy do rozwiązywania ścieżek względnych i przechowywania artefaktów budowy

#### exports
Lista konfiguracji eksportu
- `name`: oryginalna ścieżka eksportu, np.: 'npm:vue' lub 'root:src/components'
- `type`: typ ścieżki (npm lub root)
- `importName`: nazwa importu, format: '${serviceName}/${type}/${path}'
- `exportName`: ścieżka eksportu, względem katalogu głównego usługi
- `exportPath`: rzeczywista ścieżka pliku
- `externalName`: nazwa zależności zewnętrznej, służąca do identyfikacji tego modułu podczas importu przez inne usługi

#### imports
Lista konfiguracji importu
- `name`: nazwa zewnętrznej usługi
- `localPath`: lokalna ścieżka przechowywania, służąca do przechowywania artefaktów budowy zewnętrznych modułów

#### externals
Mapa zależności zewnętrznych
- Mapuje ścieżki importu modułów na rzeczywiste lokalizacje modułów
- `match`: wyrażenie regularne do dopasowania instrukcji importu
- `import`: rzeczywista ścieżka modułu