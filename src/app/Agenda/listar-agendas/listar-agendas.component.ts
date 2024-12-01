import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/Services/agenda.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-listar-agendas',
  templateUrl: './listar-agendas.component.html',
  styleUrls: ['./listar-agendas.component.css']
})
export class ListarAgendasComponent implements OnInit {
  public listaAgenda: any = [];
  constructor(private agendaService: AgendaService) { }

  async ngOnInit(): Promise<void> {
    await this.listarMiAgenda();
  }
  
  ngAfterViewInit(): void{ }

  async listarMiAgenda() {
    await this.agendaService.consultarMiAgenda().subscribe(res => {
      if (res.estado == "SUCCESS") {
        console.log("Se asignan roles.");
        this.listaAgenda = res.objeto;
        this.inicializarDataTable();
      }
    });
  }

  inicializarDataTable(): void {
    setTimeout(() => {
      $('#lista-agenda').DataTable({
        language: environment.datatable_espanol
      });
    }, 250);
  }
}
