import { Observable } from 'rxjs';

export abstract class Result {
  constructor(public text: string, public description: string, public iconUrl: string) {}
  abstract select();
}

export interface Plugin {
  name: string;
  command: string;

  handle: (args: string) => Observable<Result[]>;
}
