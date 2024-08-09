import type { RspackOptions } from '@rspack/core';

import { BuildConfig } from './base';

type Config = NonNullable<RspackOptions['output']>;

export class Output extends BuildConfig<Config> {
    protected getClient(): Config {
        const { gez } = this;
        return {
            clean: true,
            module: true,
            // TODO: 生产模式应该启用
            // chunkFormat: 'module',
            // chunkLoading: 'import',
            filename: gez.isProd
                ? 'js/[name].[contenthash:8].js'
                : 'js/[name].js',
            path: gez.getProjectPath('dist/client')
        };
    }

    protected getServer(): Config {
        const { gez } = this;
        return {
            clean: true,
            module: true,
            chunkFilename: '[id].js',
            chunkFormat: 'module',
            filename: 'entry-server.js',
            path: gez.getProjectPath('dist/server')
        };
    }

    protected getNode(): Config {
        const { gez } = this;
        return {
            clean: true,
            module: true,
            chunkFilename: '[id].js',
            chunkFormat: 'module',
            filename: 'entry-server.js',
            path: gez.getProjectPath('dist/node')
        };
    }
}
