import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuariosService } from 'src/app/Services/usuarios.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css'],
  providers: [DatePipe]
})
export class MiPerfilComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    Id: [""],
    Nombre: [""],
    Apellidos: [""],
    Genero: [""],
    FechaNacimiento: [""],
    Clave: [""],
    RepetirClave: [""]
  });
  public usuario: any;
  constructor(private usuariosServices: UsuariosService, private fb: FormBuilder, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.miPerfil();
  }

  miPerfil() {
    this.usuariosServices.miPerfil().subscribe(res => {
      this.usuario = res.objeto;
      this.initForm(res.objeto);
    });
  }

  initForm(usuario: any) {
    this.form = this.fb.group({
      Id: [usuario.id],
      Nombre: [usuario.nombre],
      Apellidos: [usuario.apellidos],
      Genero: [usuario.genero],
      FechaNacimiento: [this.datePipe.transform(usuario.fechaNacimiento, 'yyyy-MM-dd')],
      Clave: [""],
      RepetirClave: [""]
    });
  }

  onSubmit() {
    if (isNaN(this.form.get("Clave")?.value) || this.form.get("Clave")?.value.length != 0 || this.form.get("Clave")?.value.length != 4) {
      alert("La clave debe contener 4 números.");
      return;
    }
    let body = {
      Id: this.usuario.id,
      Nombre: this.form.get("Nombre")?.value,
      Apellidos: this.form.get("Apellidos")?.value,
      Genero: this.form.get("Genero")?.value,
      FechaNacimiento: this.form.get("FechaNacimiento")?.value,
      Clave: this.form.get("Clave")?.value,
      Correo: "N/A"
    }
    this.usuariosServices.actualizarMiPerfil(body).subscribe(res => {
      alert(res.mensaje);
      window.location.reload();
    });
  }
}
