import { BaseConfig } from './base';
const isCSS = (module) => {
    return (module.resource &&
        /node_modules/.test(module.resource) &&
        /\.(vue|css|less|sass|scss)$/.test(module.resource));
};
export class ClientConfig extends BaseConfig {
    constructor(ssr) {
        super(ssr, 'client');
        this.config
            .entry('app').
            add(this.ssr.entryClientFile)
            .end()
            .output
            .set('uniqueName', this.ssr.name);
        this.config.output
            .path(this.ssr.outputDirInClient)
            .filename(this.ssr.isProd
            ? 'js/[name].[contenthash:8].js'
            : 'js/[name].js');
        this.config.optimization.splitChunks({
            chunks: 'all'
        });
        this.config.optimization.runtimeChunk({
            name: 'runtime'
        });
    }
}
