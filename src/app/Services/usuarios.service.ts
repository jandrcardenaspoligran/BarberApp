import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private api: string = environment.api_url+"/Usuarios";
  constructor(private http: HttpClient) { }

  registrarUsuario(body: object): Observable<any>{
    return this.http.post(`${this.api}/Registrar`, body);
  }

  iniciarSesion(body: object): Observable<any>{
    return this.http.post(`${this.api}/IniciarSesion`, body);
  }

  listarUsuarios() : Observable<any>{
    let token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.api}/UsuariosConRol`, { headers });
  }

  miPerfil(): Observable<any> {
    let token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.api}/MiPerfil`,  { headers });
  }

  actualizarMiPerfil(body: object): Observable<any> {
    let token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.api}/ActualizarMiPerfil`, body,  { headers });
  }

  listarBarbersActivos() : Observable<any>{
    let token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.api}/ConsultarBarbers`, { headers });
  }
}
