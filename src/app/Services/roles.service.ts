import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  private api: string = environment.api_url+"/Roles";
  constructor(private http: HttpClient) { }

  listarRoles() : Observable<any>{
    let token = localStorage.getItem("token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.api}/Roles`, { headers });
  }
}
