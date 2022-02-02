import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddflightsComponent } from './addflights/addflights.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UtilpopupModule } from '@story/utilpopup';

@NgModule({
  imports: [CommonModule,
    BrowserModule,
  ReactiveFormsModule,
UtilpopupModule],
  declarations: [
    AddflightsComponent
  ],
  exports:[AddflightsComponent]
})
export class UiaddModule {}
