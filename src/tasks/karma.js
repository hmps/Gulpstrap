import { Task } from '../task';

import { Server } from 'karma';

function karmaFactory(opts) {
    let name = opts.name || 'karma';
    Task.checkRequiredParams(name, opts, ['config']);

    let configFile = process.cwd() + '/' + opts.config;


    return Task.addGulpTask(name, () => {
        return new Promise((done) => {
            // server.start({configFile}, resolve)
            new Server(configFile, [done]).start();
        });
    });
}

export  { karmaFactory as karma };
