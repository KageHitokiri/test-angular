import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: 'videojuego.component.html',
    styleUrls: []
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    public titulo: string;
    public listado: string;
    
    constructor(){
        this.titulo = "Componente de videojuegos";
        this.listado = "Listado de juegos";
        
        console.log("Se ha cargado el componente: VideojuegoComponent");
    }

    ngOnInit(){
        console.log("OnInit loaded");
    }

    ngDoCheck(){
        console.log("DoCheck ejecutandose");
    }

    switchTitle(){
        this.titulo = "Nuevo título";
    }

    ngOnDestroy(){
        console.log("OnDestroy ejecutado");
    }

}