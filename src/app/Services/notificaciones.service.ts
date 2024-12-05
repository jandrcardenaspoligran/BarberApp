import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  private api: string = environment.api_url+"/Notificaciones";
  constructor(private http: HttpClient) { }

  consultar(): Observable<any>{
    let token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.api}/Consultar`, { headers });
  } 

  actualizar(): Observable<any> {
    let token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.api}/Actualizar`, { headers });
  }
}
