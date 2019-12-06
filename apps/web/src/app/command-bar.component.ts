import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'n2-command-bar',
    templateUrl: './command-bar.component.html'
})
export class CommandBarComponent {
    @Output()
    command = new EventEmitter();
}