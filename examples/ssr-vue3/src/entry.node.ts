import path from 'node:path';
import type { GezOptions } from '@gez/core';
import express from 'express';
import { name } from '../package.json';

export default {
    name,
    async createDevApp(gez) {
        return import('@gez/rspack-vue').then((m) =>
            m.createRspackVue3App(gez)
        );
    },
    async createServer(gez) {
        const server = express();
        server.use(gez.middleware);
        server.get('*', async (req, res) => {
            res.setHeader('Content-Type', 'text/html;charset=UTF-8');
            const result = await gez.render({
                params: {
                    url: '/'
                }
            });
            res.send(result.html);
        });
        server.listen(3004, () => {
            console.log('http://localhost:3004');
        });
    },
    async postCompileProdHook(gez) {
        const render = await gez.render({
            base: '/gez',
            params: { url: '/' }
        });
        gez.write(
            path.resolve(gez.getProjectPath('dist/client'), 'index.html'),
            render.html
        );
    }
} satisfies GezOptions;
