import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    NavbarComponent,
    TestComponent
  ],
  exports:[TestComponent]
})
export class UiModule {}
