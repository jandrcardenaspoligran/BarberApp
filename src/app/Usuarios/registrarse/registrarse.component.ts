import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import { UtilidadesService } from 'src/app/Services/utilidades.service';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  public form!: FormGroup;
  constructor(private fb: FormBuilder, private usuariosService: UsuariosService, private router: Router, private utilidades: UtilidadesService) { }

  async ngOnInit(): Promise<void> {
    this.form = this.fb.group({
      Correo: ["", Validators.required, Validators.email],
      Clave: ["", Validators.required],
      RepetirClave: ["", Validators.required],
      Nombre: ["", Validators.required],
      Apellidos: ["", Validators.required],
      Genero: ["", Validators.required],
      FechaNacimiento: ["", Validators.required]
    });
    let bandera = await this.utilidades.validarExpiracion();
    if(bandera){
      this.router.navigate(['/solicitar-cita']);
    }
  }

  onSubmit(): void {
    if (this.form.get("Correo")?.value != "" && this.form.get("Clave")?.value != "" && this.form.get("RepetirClave") && this.form.get("Nombre")?.value != "" && this.form.get("Apellidos")?.value != "" && this.form.get("Genero")?.value != "" && this.form.get("FechaNacimiento")?.value) {
      if (isNaN(this.form.get("Clave")?.value) || isNaN(this.form.get("RepetirClave")?.value) || this.form.get("Clave")?.value.length != 4 || this.form.get("RepetirClave")?.value.length != 4) {
        alert("La contraseña debe ser de 4 carácteres y deben ser números");
      } else {
        if (this.form.get("Clave")?.value != this.form.get("RepetirClave")?.value) {
          alert("Las contraseñas no coinciden");
        }else{
          let body = {
          "Correo": this.form.get("Correo")?.value,
          "Clave": this.form.get("Clave")?.value,
          "Nombre": this.form.get("Nombre")?.value,
          "Apellidos": this.form.get("Apellidos")?.value,
          "Genero": this.form.get("Genero")?.value,
          "FechaNacimiento": this.form.get("FechaNacimiento")?.value
          };

          this.usuariosService.registrarUsuario(body).subscribe(res => {
            alert(res.mensaje);
          });
        }
      }
    } else {
      alert("Todos los campos son obligatorios");
    }
  }
}
