import { Observable, of } from 'rxjs';

export class Result {
    constructor(public text: string) {}
    select() {
        console.log(`${this.text} selected`);
    }
}

export class Plugin {
    name: string;
    command: string;

    constructor({name, command}) {
        this.name = name;
        this.command = command;
    }
    handle(args: string): Observable<Result[]> {
        return of([new Result(args)]);
    }
}