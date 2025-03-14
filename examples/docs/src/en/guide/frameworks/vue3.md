---
titleSuffix: Gez Framework Vue3 SSR Application Example
description: Build a Vue3 SSR application based on Gez from scratch. This example demonstrates the basic usage of the framework, including project initialization, Vue3 configuration, and entry file setup.
head:
  - - meta
    - property: keywords
      content: Gez, Vue3, SSR Application, TypeScript Configuration, Project Initialization, Server-Side Rendering, Client-Side Interaction, Composition API
---

# Vue3

This tutorial will guide you through building a Vue3 SSR application based on Gez from scratch. We will demonstrate how to create a server-side rendered application using the Gez framework through a complete example.

## Project Structure

First, let's understand the basic structure of the project:

```bash
.
├── package.json         # Project configuration file, defining dependencies and script commands
├── tsconfig.json        # TypeScript configuration file, setting compilation options
└── src                  # Source code directory
    ├── app.vue          # Main application component, defining page structure and interaction logic
    ├── create-app.ts    # Vue instance creation factory, responsible for initializing the application
    ├── entry.client.ts  # Client entry file, handling browser-side rendering
    ├── entry.node.ts    # Node.js server entry file, responsible for development environment configuration and server startup
    └── entry.server.ts  # Server entry file, handling SSR rendering logic
```

## Project Configuration

### package.json

Create the `package.json` file to configure project dependencies and scripts:

```json title="package.json"
{
  "name": "ssr-demo-vue3",
  "version": "1.0.0",
  "type": "module",
  "private": true,
  "scripts": {
    "dev": "gez dev",
    "build": "npm run build:dts && npm run build:ssr",
    "build:ssr": "gez build",
    "preview": "gez preview",
    "start": "NODE_ENV=production node dist/index.js",
    "build:dts": "vue-tsc --declaration --emitDeclarationOnly --outDir dist/src"
  },
  "dependencies": {
    "@gez/core": "*"
  },
  "devDependencies": {
    "@gez/rspack-vue": "*",
    "@types/node": "22.8.6",
    "@vue/server-renderer": "^3.5.13",
    "typescript": "^5.7.3",
    "vue": "^3.5.13",
    "vue-tsc": "^2.1.6"
  }
}
```

After creating the `package.json` file, you need to install the project dependencies. You can use any of the following commands to install them:
```bash
pnpm install
# or
yarn install
# or
npm install
```

This will install all the necessary dependencies, including Vue3, TypeScript, and SSR-related packages.

### tsconfig.json

Create the `tsconfig.json` file to configure TypeScript compilation options:

```json title="tsconfig.json"
{
    "compilerOptions": {
        "module": "ESNext",
        "moduleResolution": "node",
        "isolatedModules": true,
        "resolveJsonModule": true,
        
        "target": "ESNext",
        "lib": ["ESNext", "DOM"],
        
        "strict": true,
        "skipLibCheck": true,
        "types": ["@types/node"],
        
        "experimentalDecorators": true,
        "allowSyntheticDefaultImports": true,
        
        "baseUrl": ".",
        "paths": {
            "ssr-demo-vue3/src/*": ["./src/*"],
            "ssr-demo-vue3/*": ["./*"]
        }
    },
    "include": ["src"],
    "exclude": ["dist", "node_modules"]
}
```

## Source Code Structure

### app.vue

Create the main application component `src/app.vue`, using Vue3's Composition API:

```html title="src/app.vue"
<template>
    <div>
        <h1><a href="https://www.jsesm.com/guide/frameworks/vue3.html" target="_blank">Gez Quick Start</a></h1>
        <time :datetime="time">{{ time }}</time>
    </div>
</template>

<script setup lang="ts">
/**
 * @file Example Component
 * @description Displays a page title with an automatically updating time, demonstrating the basic functionality of the Gez framework
 */

import { onMounted, onUnmounted, ref } from 'vue';

// Current time, updated every second
const time = ref(new Date().toISOString());
let timer: NodeJS.Timeout;

onMounted(() => {
    timer = setInterval(() => {
        time.value = new Date().toISOString();
    }, 1000);
});

onUnmounted(() => {
    clearInterval(timer);
});
</script>
```

### create-app.ts

Create the `src/create-app.ts` file, responsible for creating the Vue application instance:

```ts title="src/create-app.ts"
/**
 * @file Vue Instance Creation
 * @description Responsible for creating and configuring the Vue application instance
 */

import { createSSRApp } from 'vue';
import App from './app.vue';

export function createApp() {
    const app = createSSRApp(App);
    return {
        app
    };
}
```

### entry.client.ts

Create the client entry file `src/entry.client.ts`:

```ts title="src/entry.client.ts"
/**
 * @file Client Entry File
 * @description Handles client-side interaction logic and dynamic updates
 */

import { createApp } from './create-app';

// Create Vue instance
const { app } = createApp();

// Mount Vue instance
app.mount('#app');
```

### entry.node.ts

Create the `entry.node.ts` file to configure the development environment and server startup:

```ts title="src/entry.node.ts"
/**
 * @file Node.js Server Entry File
 * @description Responsible for development environment configuration and server startup, providing the SSR runtime environment
 */

import http from 'node:http';
import type { GezOptions } from '@gez/core';

export default {
    /**
     * Configure the development environment application creator
     * @description Creates and configures the Rspack application instance for development environment builds and hot updates
     * @param gez Gez framework instance, providing core functionality and configuration interfaces
     * @returns Returns the configured Rspack application instance, supporting HMR and live preview
     */
    async devApp(gez) {
        return import('@gez/rspack-vue').then((m) =>
            m.createRspackVue3App(gez, {
                config(context) {
                    // Customize Rspack compilation configuration here
                }
            })
        );
    },

    /**
     * Configure and start the HTTP server
     * @description Creates an HTTP server instance, integrates Gez middleware, and handles SSR requests
     * @param gez Gez framework instance, providing middleware and rendering functionality
     */
    async server(gez) {
        const server = http.createServer((req, res) => {
            // Use Gez middleware to handle requests
            gez.middleware(req, res, async () => {
                // Perform server-side rendering
                const rc = await gez.render({
                    params: { url: req.url }
                });
                res.end(rc.html);
            });
        });

        server.listen(3000, () => {
            console.log('Server started: http://localhost:3000');
        });
    }
} satisfies GezOptions;
```

This file is the entry point for development environment configuration and server startup, containing two core functions:

1. `devApp` function: Responsible for creating and configuring the Rspack application instance for the development environment, supporting hot updates and live preview. Here, `createRspackVue3App` is used to create a Rspack application instance specifically for Vue3.
2. `server` function: Responsible for creating and configuring the HTTP server, integrating Gez middleware to handle SSR requests.

### entry.server.ts

Create the server-side rendering entry file `src/entry.server.ts`:

```ts title="src/entry.server.ts"
/**
 * @file Server-Side Rendering Entry File
 * @description Handles the server-side rendering process, HTML generation, and resource injection
 */

import type { RenderContext } from '@gez/core';
import { renderToString } from '@vue/server-renderer';
import { createApp } from './create-app';

export default async (rc: RenderContext) => {
    // Create Vue application instance
    const { app } = createApp();

    // Use Vue's renderToString to generate page content
    const html = await renderToString(app, {
        importMetaSet: rc.importMetaSet
    });

    // Commit dependency collection to ensure all necessary resources are loaded
    await rc.commit();

    // Generate complete HTML structure
    rc.html = `<!DOCTYPE html>
<html lang="en">
<head>
    ${rc.preload()}
    <title>Gez Quick Start</title>
    ${rc.css()}
</head>
<body>
    <div id="app">${html}</div>
    ${rc.importmap()}
    ${rc.moduleEntry()}
    ${rc.modulePreload()}
</body>
</html>
`;
};
```

## Running the Project

After completing the above file configurations, you can use the following commands to run the project:

1. Development mode:
```bash
npm run dev
```

2. Build the project:
```bash
npm run build
```

3. Run in production environment:
```bash
npm run start
```

Now, you have successfully created a Vue3 SSR application based on Gez! Visit http://localhost:3000 to see the result.