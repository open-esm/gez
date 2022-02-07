import chalk from 'chalk';
import fs from 'fs';
import Webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import { InstallPlugin } from '../plugins/install';
import { BaseGenesis } from '../utils';
import { ClientConfig, ServerConfig } from '../webpack';
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
export class WatchClientConfig extends ClientConfig {
    constructor(ssr) {
        super(ssr);
        this.config
            .entry('app')
            .add(`webpack-hot-middleware/client?path=${ssr.publicPath}hot-middleware&timeout=2000&overlay=false`);
        this.config
            .plugin('webpack-hot-replacement')
            .use(Webpack.HotModuleReplacementPlugin);
    }
}
export class Watch extends BaseGenesis {
    constructor(ssr) {
        super(ssr);
        ssr.plugin.unshift(InstallPlugin);
    }
    get renderer() {
        if (!this._renderer) {
            throw TypeError(`Please execute 'await new Watch(ssr).start()'`);
        }
        return this._renderer;
    }
    set renderer(renderer) {
        this._renderer = renderer;
    }
    async start() {
        let ready;
        let clientDone = false;
        let serverDone = false;
        let promise = new Promise((resolve) => {
            ready = resolve;
        });
        const onReady = () => {
            if (clientDone && serverDone) {
                ready && ready();
                promise = null;
                ready = null;
            }
        };
        await this.ssr.plugin.callHook('beforeCompiler', 'watch');
        const [clientConfig, serverConfig] = await Promise.all([
            new WatchClientConfig(this.ssr).toConfig(),
            new ServerConfig(this.ssr).toConfig()
        ]);
        const clientCompiler = Webpack(clientConfig);
        const serverCompiler = Webpack(serverConfig);
        this.devMiddleware = WebpackDevMiddleware(clientCompiler, {
            publicPath: this.ssr.publicPath,
            writeToDisk: true,
            index: false
        });
        this.hotMiddleware = WebpackHotMiddleware(clientCompiler, {
            heartbeat: 5000,
            path: `${this.ssr.publicPath}hot-middleware`
        });
        const watchOptions = {
            aggregateTimeout: 300,
            poll: 1000
        };
        const clientOnDone = (stats) => {
            const jsonStats = stats.toJson();
            if (stats.hasErrors()) {
                jsonStats.errors.forEach((err) => console.log(error(err.message)));
            }
            if (stats.hasWarnings()) {
                jsonStats.warnings.forEach((err) => console.log(warning(err.message)));
            }
            if (stats.hasErrors())
                return;
            this.notify();
            clientDone = true;
            onReady();
        };
        const serverOnWatch = () => {
            this.notify();
            serverDone = true;
            onReady();
        };
        clientCompiler.hooks.done.tap('build done', clientOnDone);
        serverCompiler.watch(watchOptions, serverOnWatch);
        return promise;
    }
    // 这里应该提供销毁实例的方法
    destroy() { }
    async notify() {
        const { ssr } = this;
        if (!fs.existsSync(ssr.outputClientManifestFile) ||
            !fs.existsSync(ssr.outputServeAppFile)) {
            return;
        }
        if (this._renderer) {
            this._renderer.reload();
        }
        else {
            this._renderer = new ssr.Renderer(ssr);
        }
        await this.ssr.plugin.callHook('afterCompiler', 'watch');
    }
}
