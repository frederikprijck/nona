import { Component, Input } from '@angular/core';
import { Result } from './plugin';

@Component({
    selector: 'n2-command-results',
    templateUrl: './command-results.component.html'
})
export class CommandResultsComponent {
    @Input()
    results: Array<Result>;
}