import { Injectable } from '@angular/core';
import { PluginManager } from './plugin.manager';
import { merge, Subject, of } from 'rxjs';
import { map, switchMap, debounceTime } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CommandService {
  private commandTerm$ = new Subject<string>();

  public commandResults$;

  constructor(private pluginManager: PluginManager) {
    this.commandResults$ = this.commandTerm$.pipe(
      debounceTime(200),
      switchMap(term => (term ? this.handle(term) : of([])))
    );
  }
  process(commandTerm: string = '') {
    console.log(`Processing Command Term: ${commandTerm}`);

    this.commandTerm$.next(commandTerm);
  }

  private handle(term: string) {
    const [, command, , commandArgs] = term.match(/^([^\s]+)(\s?)(.*)/);
    const plugins = this.pluginManager.getPlugins(command);

    return plugins && plugins.length
      ? merge(...plugins.map(plugin => plugin.handle(commandArgs)))
      : of([]);
  }
}
