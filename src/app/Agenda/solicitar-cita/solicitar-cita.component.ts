import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AgendaService } from 'src/app/Services/agenda.service';
import { UsuariosService } from 'src/app/Services/usuarios.service';

@Component({
  selector: 'app-solicitar-cita',
  templateUrl: './solicitar-cita.component.html',
  styleUrls: ['./solicitar-cita.component.css']
})
export class SolicitarCitaComponent implements OnInit {
  public barbersActivos: any[] = [];
  public agendaPorBarber: any[] | undefined = undefined;
  public agenda: any = undefined;
  public form: FormGroup = this.fb.group({
    MsgCliente: [""],
    ImgReferencia: [""]
  });
  public archivoImg: any;
  constructor(private agendaService: AgendaService, private usuariosService: UsuariosService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.listarBarbersActivo();
  }

  initForm(){
    this.form = this.fb.group({
      MsgCliente: [""],
      ImgReferencia: [""]
    });
    this.archivoImg = undefined;
    this.agenda = undefined;
  }

  async listarBarbersActivo() {
    await this.usuariosService.listarBarbersActivos().subscribe(res => {
      if (res.estado == "SUCCESS") {
        console.log("Se listan Barbers activos.");
        this.barbersActivos = res.objeto;
      }
    });
  }

  consultarAgendaDisponible($event: any) {
    let idBarber = ($event.target as HTMLSelectElement).value;
    this.agendaService.consultarCitasDisponiblesPorIdBarber(idBarber).subscribe(res => {
      this.agendaPorBarber = res.objeto;
      console.log(res);
    });
  }

  cambiarTEnFechas(fecha: string) {
    return fecha.replace("T", " ");
  }

  formularioSolicitarCita(idAgenda: string, fechaHora: string) {
    let global_this = this;;
    this.agendaService.consultarAgendaPorId(idAgenda).subscribe(res => {
      if (res.estado == "SUCCESS")
        global_this.agenda = res.objeto;
      else
        global_this.agenda = undefined;
    });
  }

  onSubmit(){
    let formData: FormData = new FormData();
    formData.append("Id", this.agenda.id);
    formData.append("ImgArchivo", this.archivoImg);
    formData.append("FechaHora", this.agenda.fechaHora);
    formData.append("IdBarber", this.agenda.idBarber);
    formData.append("FechaCreacion", this.agenda.fechaCreacion);
    formData.append("MsgCliente", this.form.get("MsgCliente")?.value == undefined ? "" :  this.form.get("MsgCliente")?.value);
    this.agendaService.registrarCita(formData).subscribe(res => {
      alert(res.mensaje);
      window.location.reload;
    });
  }

  imgReferenciaChange(event: any) {
    const file = event.target.files[0];
    if (file) {
    this.archivoImg = file 
    }
  }

  limpiarAgenda(){
    this.agenda = undefined;
  }
}
