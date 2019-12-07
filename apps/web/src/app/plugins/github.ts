import { Result, Plugin } from '../plugin';
import { from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import * as Octokit from '@octokit/rest';

const octokit = new Octokit();

export class GithubResult extends Result {
    constructor(text: string, description: string, iconUrl: string, private url: string) {
      super(text, description, iconUrl);
    }
    select() {
        window.require('electron').ipcRenderer.send('openExternal', this.url);
    }
  }
  
  export class GithubPlugin implements Plugin {
    public name = 'Github';
    public command = 'gh';
  
    handle(q: string) {
      return from(
        octokit.search.repos({
          q
        })
      ).pipe(
          tap(console.log),
        map(result =>
          result.data.items.map(
            item =>
              new GithubResult(`${item.owner.login}/${item.name}`, item.description, item.owner.avatar_url, item.html_url)
          )
        )
      );
    }
  }