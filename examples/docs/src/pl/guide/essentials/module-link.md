---
titleSuffix: Mechanizm udostępniania kodu między usługami w frameworku Gez
description: Szczegółowy opis mechanizmu łączenia modułów w frameworku Gez, w tym udostępniania kodu między usługami, zarządzania zależnościami i implementacji specyfikacji ESM, pomagający programistom w budowaniu wydajnych aplikacji mikrofrontendowych.
head:
  - - meta
    - property: keywords
      content: Gez, łączenie modułów, Module Link, ESM, udostępnianie kodu, zarządzanie zależnościami, mikrofrontendy
---

# Łączenie modułów

Framework Gez zapewnia kompleksowy mechanizm łączenia modułów, służący do zarządzania udostępnianiem kodu i zależnościami między usługami. Mechanizm ten jest oparty na specyfikacji ESM (ECMAScript Module) i obsługuje eksportowanie oraz importowanie modułów na poziomie kodu źródłowego, a także pełne zarządzanie zależnościami.

### Kluczowe pojęcia

#### Eksportowanie modułów
Eksportowanie modułów to proces udostępniania określonych jednostek kodu (np. komponentów, funkcji narzędziowych) z usługi w formacie ESM. Obsługiwane są dwa typy eksportu:
- **Eksport kodu źródłowego**: bezpośrednie eksportowanie plików źródłowych z projektu
- **Eksport zależności**: eksportowanie pakietów zależności innych firm używanych w projekcie

#### Importowanie modułów
Importowanie modułów to proces odwoływania się do jednostek kodu eksportowanych przez inne usługi. Obsługiwane są różne metody instalacji:
- **Instalacja kodu źródłowego**: odpowiednia dla środowisk deweloperskich, obsługuje modyfikacje w czasie rzeczywistym i gorącą aktualizację
- **Instalacja pakietu**: odpowiednia dla środowisk produkcyjnych, korzysta bezpośrednio z wyników budowania

### Mechanizm preładowania

W celu optymalizacji wydajności usług, Gez implementuje inteligentny mechanizm preładowania modułów:

1. **Analiza zależności**
   - Analiza zależności między komponentami podczas budowania
   - Identyfikacja kluczowych modułów na ścieżce krytycznej
   - Określenie priorytetów ładowania modułów

2. **Strategie ładowania**
   - **Natychmiastowe ładowanie**: kluczowe moduły na ścieżce krytycznej
   - **Opóźnione ładowanie**: moduły funkcji niekrytycznych
   - **Ładowanie na żądanie**: moduły renderowane warunkowo

3. **Optymalizacja zasobów**
   - Inteligentna strategia podziału kodu
   - Zarządzanie pamięcią podręczną na poziomie modułów
   - Kompilacja i pakowanie na żądanie

## Eksportowanie modułów

### Konfiguracja

Konfiguracja modułów do eksportu w pliku `entry.node.ts`:

```ts title="src/entry.node.ts"
import type { GezOptions } from '@gez/core';

export default {
    modules: {
        exports: [
            // Eksportowanie plików źródłowych
            'root:src/components/button.vue',  // Komponent Vue
            'root:src/utils/format.ts',        // Funkcja narzędziowa
            // Eksportowanie zależności innych firm
            'npm:vue',                         // Framework Vue
            'npm:vue-router'                   // Vue Router
        ]
    }
} satisfies GezOptions;
```

Konfiguracja eksportu obsługuje dwa typy:
- `root:*`: eksportowanie plików źródłowych, ścieżka względem katalogu głównego projektu
- `npm:*`: eksportowanie zależności innych firm, bezpośrednie określenie nazwy pakietu

## Importowanie modułów

### Konfiguracja

Konfiguracja modułów do importu w pliku `entry.node.ts`:

```ts title="src/entry.node.ts"
import type { GezOptions } from '@gez/core';

export default {
    modules: {
        // Konfiguracja importu
        imports: {
            // Instalacja kodu źródłowego: wskazuje na katalog wyników budowania
            'ssr-remote': 'root:./node_modules/ssr-remote/dist',
            // Instalacja pakietu: wskazuje na katalog pakietu
            'other-remote': 'root:./node_modules/other-remote'
        },
        // Konfiguracja zależności zewnętrznych
        externals: {
            // Używanie zależności z modułów zdalnych
            'vue': 'ssr-remote/npm/vue',
            'vue-router': 'ssr-remote/npm/vue-router'
        }
    }
} satisfies GezOptions;
```

Opis konfiguracji:
1. **imports**: konfiguracja lokalnych ścieżek do modułów zdalnych
   - Instalacja kodu źródłowego: wskazuje na katalog wyników budowania (dist)
   - Instalacja pakietu: bezpośrednio wskazuje na katalog pakietu

2. **externals**: konfiguracja zależności zewnętrznych
   - Służy do udostępniania zależności z modułów zdalnych
   - Unika powtarzającego się pakowania tych samych zależności
   - Obsługuje udostępnianie zależności przez wiele modułów

### Metody instalacji

#### Instalacja kodu źródłowego
Odpowiednia dla środowisk deweloperskich, obsługuje modyfikacje w czasie rzeczywistym i gorącą aktualizację.

1. **Sposób Workspace**
Zalecany w projektach Monorepo:
```ts title="package.json"
{
    "devDependencies": {
        "ssr-remote": "workspace:*"
    }
}
```

2. **Sposób Link**
Używany do lokalnego debugowania:
```ts title="package.json"
{
    "devDependencies": {
        "ssr-remote": "link:../ssr-remote"
    }
}
```

#### Instalacja pakietu
Odpowiednia dla środowisk produkcyjnych, korzysta bezpośrednio z wyników budowania.

1. **Rejestr NPM**
Instalacja przez rejestr npm:
```ts title="package.json"
{
    "dependencies": {
        "ssr-remote": "^1.0.0"
    }
}
```

2. **Serwer statyczny**
Instalacja przez protokół HTTP/HTTPS:
```ts title="package.json"
{
    "dependencies": {
        "ssr-remote": "https://cdn.example.com/ssr-remote/1.0.0.tgz"
    }
}
```

## Budowanie pakietów

### Konfiguracja

Konfiguracja opcji budowania w pliku `entry.node.ts`:

```ts title="src/entry.node.ts"
import type { GezOptions } from '@gez/core';

export default {
    // Konfiguracja eksportu modułów
    modules: {
        exports: [
            'root:src/components/button.vue',
            'root:src/utils/format.ts',
            'npm:vue'
        ]
    },
    // Konfiguracja budowania
    pack: {
        // Włączenie budowania
        enable: true,

        // Konfiguracja wyjścia
        outputs: [
            'dist/client/versions/latest.tgz',
            'dist/client/versions/1.0.0.tgz'
        ],

        // Niestandardowy package.json
        packageJson: async (gez, pkg) => {
            pkg.version = '1.0.0';
            return pkg;
        },

        // Przetwarzanie przed budowaniem
        onBefore: async (gez, pkg) => {
            // Generowanie deklaracji typów
            // Uruchamianie testów
            // Aktualizacja dokumentacji itp.
        },

        // Przetwarzanie po budowaniu
        onAfter: async (gez, pkg, file) => {
            // Przesyłanie do CDN
            // Publikowanie w repozytorium npm
            // Wdrażanie w środowisku testowym itp.
        }
    }
} satisfies GezOptions;
```

### Wyniki budowania

```
your-app-name.tgz
├── package.json        # Informacje o pakiecie
├── index.js            # Wejście dla środowiska produkcyjnego
├── server/             # Zasoby serwerowe
│   └── manifest.json   # Mapowanie zasobów serwerowych
├── node/               # Środowisko uruchomieniowe Node.js
└── client/             # Zasoby klienckie
    └── manifest.json   # Mapowanie zasobów klienckich
```

### Proces publikacji

```bash
# 1. Budowanie wersji produkcyjnej
gez build

# 2. Publikowanie w npm
npm publish dist/versions/your-app-name.tgz
```

## Najlepsze praktyki

### Konfiguracja środowiska deweloperskiego
- **Zarządzanie zależnościami**
  - Używanie sposobu Workspace lub Link do instalacji zależności
  - Ujednolicone zarządzanie wersjami zależności
  - Unikanie powtarzającej się instalacji tych samych zależności

- **Doświadczenie deweloperskie**
  - Włączanie funkcji gorącej aktualizacji
  - Konfiguracja odpowiednich strategii preładowania
  - Optymalizacja szybkości budowania

### Konfiguracja środowiska produkcyjnego
- **Strategie wdrażania**
  - Używanie rejestru NPM lub serwera statycznego
  - Zapewnienie integralności wyników budowania
  - Wdrażanie mechanizmu stopniowego udostępniania

- **Optymalizacja wydajności**
  - Odpowiednia konfiguracja preładowania zasobów
  - Optymalizacja kolejności ładowania modułów
  - Wdrażanie efektywnych strategii pamięci podręcznej

### Zarządzanie wersjami
- **Standardy wersjonowania**
  - Przestrzeganie semantycznego wersjonowania
  - Utrzymywanie szczegółowych dzienników zmian
  - Przeprowadzanie testów zgodności wersji

- **Aktualizacja zależności**
  - Regularne aktualizowanie pakietów zależności
  - Przeprowadzanie okresowych audytów bezpieczeństwa
  - Utrzymywanie spójności wersji zależności
```