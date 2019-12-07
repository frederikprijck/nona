/**
 * This module is responsible on handling all the inter process communications 
 * between the frontend to the electron backend.
 */

import { app, ipcMain, shell } from 'electron';
import { packageVersion } from '../constants';

export default class Events {
    static bootstrapElectronEvents(): Electron.IpcMain {
        return ipcMain;
    }
}

// Retrieve app version
ipcMain.handle('get-app-version', (event) => {
    console.log(`Fetching application version... [v${packageVersion}]`);

    return packageVersion;
});

ipcMain.on('openExternal', (event, url) => {
    shell.openExternal(url);
})

// Handle App termination
ipcMain.on('quit', (event, code) => {
    app.exit(code);
});