import { Injectable } from '@angular/core';
import { Plugin } from './plugin';
import { GithubPlugin } from './plugins/github';

@Injectable({ providedIn: 'root' })
export class PluginManager {
  plugins: Array<Plugin> = [new GithubPlugin()];
  getPlugins(command: string): Array<Plugin> {
    console.log(this.plugins);
    return this.plugins.filter(plugin => plugin.command === command);
  }
}
