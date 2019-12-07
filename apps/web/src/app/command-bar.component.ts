import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'nona-command-bar',
    templateUrl: './command-bar.component.html'
})
export class CommandBarComponent {
    @Output()
    command = new EventEmitter();
}