import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Título de prueba';
  public mostrarVideojuegos:boolean = true;

  ocultarVideojuegos(value:boolean){
    this.mostrarVideojuegos = value;
  }
  
}
