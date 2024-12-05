import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UtilidadesService {

  constructor() { }

  guardarInfoToken(token: string) {
    let tokenDecode = jwt_decode.jwtDecode(token);
    localStorage.setItem("infoToken", JSON.stringify(tokenDecode));
  }

  validarRol(rol: string = "CLIENTE"){
    if (localStorage.getItem("infoToken") != null) {
      
    }
    let objeto = JSON.parse(localStorage.getItem("infoToken")!);
    return objeto.NombreRol.toUpperCase().includes(rol);
  }
}
