import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
    
})
export class HeroeComponent{
    nombre: string = 'Ironman';
     edad: number = 45

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

     obtenerNombre(): string{

        // return this.nombre + '-' + this.edad; ESTA LINEA ES LO MISMO QUE ESTÁ ABAJO PERO DE OTRA FORMA
        return `${this.nombre} - ${this.edad}`;
     }

     cambiarNombre():void{
        this.nombre = 'Spiderman';
     }

     cambiarEdad():void{
        this.edad= 30;
     }
}