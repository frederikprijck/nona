import { handleSquirrelEvent } from './app/events/squirrel.events';
import { app, BrowserWindow } from 'electron';

// handle setup events as quickly as possible
if (handleSquirrelEvent()) {
    // squirrel event handled (except first run event) and app will exit in 1000ms, so don't do anything else
    app.quit();
}

import App from './app/app';
import Events from './app/events/electron.events';

App.main(app, BrowserWindow);
Events.bootstrapElectronEvents();
