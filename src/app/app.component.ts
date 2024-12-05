import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  vistaIniciarSesion: boolean = true;
  title = 'BarberApp';
  ngOnInit(): void {
  }
  sesionValida(){
    return localStorage.getItem("token") != null;
  }

  cambiarAIniciarSesion(valor: boolean){
    this.vistaIniciarSesion = valor;
  }
}
