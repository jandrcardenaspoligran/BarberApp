import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UtilidadesService {

  constructor() { }

  validarExpiracion(): boolean{
    const FECHA_HORA_ACTUAL = Math.floor(Date.now() / 1000); 
    let objetoToken;
    let infoToken = localStorage.getItem("infoToken")
    if(infoToken){
      objetoToken= JSON.parse(infoToken);
      if (objetoToken.exp < FECHA_HORA_ACTUAL) {
        localStorage.removeItem("token");
        return false;
      }else{
        return true;
      }
    }
    return false;
  }

  guardarInfoToken(token: string){
    let tokenDecode = jwt_decode.jwtDecode(token);
    localStorage.setItem("infoToken", JSON.stringify(tokenDecode));
  }
}
