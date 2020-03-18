import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [NavbarComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent, CardComponent]
})
export class SharedModule { }
