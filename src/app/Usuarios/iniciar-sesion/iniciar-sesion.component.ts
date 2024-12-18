import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import { UtilidadesService } from 'src/app/Services/utilidades.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  @Output() vistaIniciarSesion = new EventEmitter<boolean>(); 
  public form: FormGroup = this.fb.group({
    Correo: [""],
    Clave: [""]
  });
  constructor(private fb: FormBuilder, private usuariosService: UsuariosService, private router: Router, private utilidades: UtilidadesService) { }

  ngOnInit() { }

  onSubmit() {
    let correo = this.form.get("Correo")?.value, clave = this.form.get("Clave")?.value;
    if (correo.length < 1 || clave.length < 1) {
      alert("Ingrese el correo y clave para continuar.");
    } else {
      let body = {
        Correo: correo,
        Clave: clave
      }
      this.usuariosService.iniciarSesion(body).subscribe(res => {
        alert(res.mensaje);
        if (res.estado == "SUCCESS") {
          localStorage.setItem("token", res.token);
          this.utilidades.guardarInfoToken(res.token);
          this.router.navigate(['/Solicitar-Cita']);
        }
      })
    }
  }

  cambiarAIniciarSesion() {
    this.vistaIniciarSesion.emit(false);
  }
}
