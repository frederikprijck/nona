/**
 * This module is responsible on handling all the setup events that is submitted by squirrel.
 */

import { app } from 'electron';
import { spawn } from 'child_process';
import { resolve, join, basename } from 'path';
import { packageVersion } from '../constants';


// app paths
const appFolder = resolve(process.execPath, '..');
const appRootFolder = resolve(appFolder, '..');
const updateExe = resolve(join(appRootFolder, 'Update.exe'));
const exeName = resolve(join(appRootFolder, 'app-' + packageVersion, basename(process.execPath)));


export function handleSquirrelEvent(): boolean {
    if (process.argv.length === 1 || process.platform !== 'win32') {
        return false;
    }
    
    switch (process.argv[1]) {
        case '--squirrel-install':
        case '--squirrel-updated':           
            // Install desktop and start menu shortcuts
            update(['--createShortcut', exeName]);

            return true;

        case '--squirrel-uninstall':
            // Remove desktop and start menu shortcuts
            update(['--removeShortcut', exeName]);
            
            return true;
        
        case '--squirrel-obsolete':
            app.quit();
            return true;
    }

    return false;
}

function update(args: Array<string>) {
    try {
        spawn(updateExe, args, { detached: true }).on('close', () => setTimeout(app.quit, 1000));
    } catch(error) {
        setTimeout(app.quit, 1000);
    }
}
