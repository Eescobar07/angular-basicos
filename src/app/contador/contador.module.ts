import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador/contador.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
            ContadorComponent
    ],
    imports: [
         CommonModule,
         BrowserModule 
    ],
    exports: [
        ContadorComponent
       
    ],
    providers: [

    ],
})
export class ContadorModule {} 