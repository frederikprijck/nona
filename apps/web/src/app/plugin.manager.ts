import { Injectable } from '@angular/core';
import { Plugin } from './plugin';

@Injectable({ providedIn: 'root' })
export class PluginManager {
  plugins: Array<Plugin> = [
    new Plugin({ name: 'CLI', command: 'ng' }),
    new Plugin({ name: 'Github', command: 'gh' })
  ];
  getPlugins(command: string): Array<Plugin> {
    return this.plugins.filter(plugin => plugin.command === command);
  }
}
