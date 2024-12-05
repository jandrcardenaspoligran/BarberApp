import { Component, OnInit } from '@angular/core';
import { interval, Subscription, switchMap } from 'rxjs';
import { NotificacionesService } from 'src/app/Services/notificaciones.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private pollingSubscription: Subscription | undefined;
  public conteo_notificaciones = 0;
  public notificaciones: any[] = [];
  public rol: string = JSON.parse(localStorage.getItem("infoToken")!).NombreRol.toLowerCase();
  constructor(private notificacionesService: NotificacionesService) { }

  ngOnInit(): void {
    this.notificacionesService.consultar().subscribe(res => {
      this.conteo_notificaciones = res.objeto.filter((item: { leido: number; }) => item.leido == 0).length;
      this.notificaciones = res.objeto;
    });
    this.iniciarPolling();
    console.log(this.rol);
  }

  iniciarPolling(): void {
    let global = this;
    this.pollingSubscription = interval(60000)
      .pipe(switchMap(() => this.notificacionesService.consultar()))
      .subscribe(
        (res) => {
          global.conteo_notificaciones = res.objeto.filter((item: { leido: number; }) => item.leido == 0).length;
          this.notificaciones = res.objeto;
          console.log( res.objeto.filter((item: { leido: number; }) => item.leido == 0).length);
        },
        (error) => {
          console.error('Error al obtener datos:', error);
        }
      );
      
  }

  cerrarSesion(){
    localStorage.removeItem("token");
    localStorage.removeItem("infoToken");
  }

  actualizar(){
    console.log("Si");
    this.notificacionesService.actualizar().subscribe(res => console.log());
  }
}
