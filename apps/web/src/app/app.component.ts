import { Component } from '@angular/core';
import { CommandService } from './command.service';

@Component({
  selector: 'nona-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web';

  results$ = this.commandService.commandResults$;

  constructor(private commandService: CommandService) {}

  onCommand(commandTerm: string) {
    //if (commandTerm) {
      this.commandService.process(commandTerm);
    //}
  }
}
