import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';


@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
  ],
  exports:[
    MainPageComponent
  ]
})
export class DbzModule { }
