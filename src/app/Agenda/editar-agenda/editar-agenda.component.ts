import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AgendaService } from 'src/app/Services/agenda.service';

@Component({
  selector: 'app-editar-agenda',
  templateUrl: './editar-agenda.component.html',
  styleUrls: ['./editar-agenda.component.css']
})
export class EditarAgendaComponent implements OnInit {
  public agenda: any;
  public form: FormGroup = this.fb.group({
    obsBarber: [""],
    estado: [""]
  });
  constructor(private agendaService: AgendaService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      let id = params.get('id');
      this.consultarAgendaPorId(id!);
    });
  }

  consultarAgendaPorId(id: string) {
    this.agendaService.consultarAgendaPorId(id).subscribe(res => {
      this.agenda = res.objeto;
      this.initForm(res.objeto);
      console.log(res.objeto);
    });
  }

  initForm(agenda: any) {
    this.form = this.fb.group({
      obsBarber: [agenda.obsBarber],
      estado: [agenda.estado]
    });
  }

  onSubmit() {
    let body = {
      EditadoPor: this.agenda.editadoPor,
      Estado: this.form.get("estado")?.value,
      FechaActualizacion: this.agenda.fechaActualizacion,
      FechaCreacion: this.agenda.fechaCreacion,
      FechaHora: this.agenda.fechaHora,
      Id: this.agenda.id,
      IdBarber: this.agenda.idBarber,
      IdCliente: this.agenda.idCliente,
      MsgCliente: this.agenda.msgCliente,
      ObsBarber: this.form.get("obsBarber")?.value
    }
    this.agendaService.actualizarCita(body).subscribe(res => {
      
    });
  }

}
