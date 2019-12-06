import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommandBarComponent } from './command-bar.component';
import { CommandResultsComponent } from './command-results.component';

@NgModule({
  declarations: [AppComponent, CommandBarComponent, CommandResultsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
