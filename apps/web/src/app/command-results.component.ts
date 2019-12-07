import { Component, Input } from '@angular/core';
import { Result } from './plugin';

@Component({
    selector: 'nona-command-results',
    templateUrl: './command-results.component.html',
    styleUrls: ['./command-results.component.scss']
})
export class CommandResultsComponent {
    @Input()
    results: Array<Result>;
}