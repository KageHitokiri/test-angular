import {Component, OnInit} from '@angular/core';
import {Zapatilla} from "../models/Zapatilla";

@Component ({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    
    constructor(){
        this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('Nike Red',"Nike","Rojo",90,true),
            new Zapatilla('Reebook classic',"Reebok","Blanco",50,false),
            new Zapatilla('Nike runner',"Nike","Negro",190,false),
            new Zapatilla('Adidas grey',"Adidas","Gris",250,true),
            new Zapatilla('Reebook Strong',"Reebok","Verde",30,false)
        ];
    }

    ngOnInit(){
        console.log(this.zapatillas);
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index)=>{
            if (this.marcas.indexOf(zapatilla.marca)<0) {
                this.marcas.push(zapatilla.marca);
            }
        });
        console.log(this.marcas);
    }

}