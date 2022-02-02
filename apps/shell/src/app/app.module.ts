import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UiModule } from '@story/ui';
import { UiaddModule } from '@story/uiadd';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';



@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule,UiModule,UiaddModule,RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
