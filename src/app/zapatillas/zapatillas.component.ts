import {Component, OnInit} from '@angular/core';
import {Zapatilla} from "../models/Zapatilla";

@Component ({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    
    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebook classic',"Reebok","Blanco",50,false),
            new Zapatilla('Nike runner',"Nike","Negro",90,false),
            new Zapatilla('Adidas grey',"Adidas","Griss",250,true)
        ];
    }

    ngOnInit(){
        console.log(this.zapatillas);
    }
}