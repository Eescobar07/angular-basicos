import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
 
})
export class MainPageComponent {

personajes: Personaje[] = [
  {
    nombre: 'Goku',
    poder: 15000
  },
  {
    nombre: 'Vegeta',
    poder: 7500
  }
];

nuevo: Personaje={
  nombre: '',
  poder: 0
}  

agregar(){
    
  console.log('hey');
  //   if(this.nuevo.nombre.trim().length === 0){return;}
  
  //   console.log('HEY');
  //   console.log(this.nuevo);
  //   this.personajes.push(this.nuevo); //El push() es para meter algo en un arreglo
  //   this.nuevo={
  //     nombre: '',
  //     poder:0
  //   }
   }
}
