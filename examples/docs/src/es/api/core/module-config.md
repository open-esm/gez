---
titleSuffix: Referencia de la API de configuración de módulos del framework Gez
description: Documentación detallada de la interfaz de configuración ModuleConfig del framework Gez, incluyendo reglas de importación/exportación de módulos, configuración de alias y gestión de dependencias externas, para ayudar a los desarrolladores a comprender en profundidad el sistema modular del framework.
head:
  - - meta
    - property: keywords
      content: Gez, ModuleConfig, configuración de módulos, importación/exportación de módulos, dependencias externas, configuración de alias, gestión de dependencias, framework de aplicaciones web
---

# ModuleConfig

ModuleConfig proporciona la funcionalidad de configuración de módulos en el framework Gez, utilizada para definir reglas de importación/exportación de módulos, configuración de alias y dependencias externas.

## Definición de tipos

### PathType

- **Definición de tipo**:
```ts
enum PathType {
  npm = 'npm:', 
  root = 'root:'
}
```

Enumeración de tipos de rutas de módulos:
- `npm`: Representa dependencias en node_modules
- `root`: Representa archivos en el directorio raíz del proyecto

### ModuleConfig

- **Definición de tipo**:
```ts
interface ModuleConfig {
  exports?: string[]
  imports?: Record<string, string>
  externals?: Record<string, string>
}
```

Interfaz de configuración de módulos, utilizada para definir la exportación, importación y configuración de dependencias externas del servicio.

#### exports

Lista de configuración de exportaciones, expone unidades de código específicas (como componentes, funciones utilitarias, etc.) del servicio en formato ESM.

Soporta dos tipos:
- `root:*`: Exporta archivos de código fuente, ej.: 'root:src/components/button.vue'
- `npm:*`: Exporta dependencias de terceros, ej.: 'npm:vue'

#### imports

Mapeo de configuración de importaciones, configura módulos remotos a importar y sus rutas locales.

La configuración varía según el método de instalación:
- Instalación desde código fuente (Workspace, Git): debe apuntar al directorio dist
- Instalación desde paquete (Link, servidor estático, repositorio privado, File): apunta directamente al directorio del paquete

#### externals

Mapeo de dependencias externas, configura dependencias externas a utilizar, generalmente dependencias de módulos remotos.

**Ejemplo**:
```ts title="entry.node.ts"
import type { GezOptions } from '@gez/core';

export default {
  modules: {
    // Configuración de exportaciones
    exports: [
      'root:src/components/button.vue',  // Exportar archivo de código fuente
      'root:src/utils/format.ts',
      'npm:vue',  // Exportar dependencia de terceros
      'npm:vue-router'
    ],

    // Configuración de importaciones
    imports: {
      // Método de instalación desde código fuente: debe apuntar al directorio dist
      'ssr-remote': 'root:./node_modules/ssr-remote/dist',
      // Método de instalación desde paquete: apunta directamente al directorio del paquete
      'other-remote': 'root:./node_modules/other-remote'
    },

    // Configuración de dependencias externas
    externals: {
      'vue': 'ssr-remote/npm/vue',
      'vue-router': 'ssr-remote/npm/vue-router'
    }
  }
} satisfies GezOptions;
```

### ParsedModuleConfig

- **Definición de tipo**:
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

Configuración de módulos analizada, convierte la configuración original de módulos a un formato interno estandarizado:

#### name
Nombre del servicio actual
- Se utiliza para identificar módulos y generar rutas de importación

#### root
Ruta del directorio raíz del servicio actual
- Se utiliza para resolver rutas relativas y almacenar artefactos de construcción

#### exports
Lista de configuración de exportaciones
- `name`: Ruta de exportación original, ej.: 'npm:vue' o 'root:src/components'
- `type`: Tipo de ruta (npm o root)
- `importName`: Nombre de importación, formato: '${serviceName}/${type}/${path}'
- `exportName`: Ruta de exportación, relativa al directorio raíz del servicio
- `exportPath`: Ruta real del archivo
- `externalName`: Nombre de dependencia externa, utilizado como identificador cuando otros servicios importan este módulo

#### imports
Lista de configuración de importaciones
- `name`: Nombre del servicio externo
- `localPath`: Ruta de almacenamiento local, utilizada para almacenar artefactos de construcción de módulos externos

#### externals
Mapeo de dependencias externas
- Mapea rutas de importación de módulos a su ubicación real
- `match`: Expresión regular para coincidir con declaraciones de importación
- `import`: Ruta real del módulo