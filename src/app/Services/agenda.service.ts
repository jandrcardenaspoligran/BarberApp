import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private api: string = environment.api_url+"/Agenda";
  constructor(private http: HttpClient) { }

  consultarAgendaPorId(id: string) : Observable<any>{
    let token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.api}/ConsultarAgendaPorId/${id}`, { headers });
  }
  
  consultarMiAgenda() : Observable<any>{
    let token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.api}/ConsultarCitasAgendadasPorIdBarber`, { headers });
  }

  consultarMisCitas() : Observable<any>{
    let token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.api}/ConsultarMisCitas`, { headers });
  }

  consultarHistorialCitas() : Observable<any>{
    let token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.api}/ConsultarHistorialCitas`, { headers });
  }

  consultarCitasDisponiblesPorIdBarber(barber: string) : Observable<any>{
    let token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.api}/ConsultarCitasDisponiblesPorIdBarber/${barber}`, { headers });
  }

  consultarAgendaFiltrada(barber: string = "", estado: string = "") : Observable<any>{
    let token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.api}/ConsultarCitasDisponiblesPorIdBarber/${barber}&${estado}`, { headers });
  }

  registrarCita(formData: FormData): Observable<any>{
    let token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.api}/RegistrarCita`, formData, { headers })
  }

  actualizarCita(body: any): Observable<any>{
    let token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.api}/ActualizarCita`, body, { headers })
  }
}
