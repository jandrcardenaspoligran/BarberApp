import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/Services/roles.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-listar-roles',
  templateUrl: './listar-roles.component.html',
  styleUrls: ['./listar-roles.component.css']
})
export class ListarRolesComponent implements OnInit, AfterViewInit {
  public listaRoles: any = [];
  constructor(private rolesService: RolesService) { }

  async ngOnInit(): Promise<void> {
    await this.listarRoles();
  }
  
  ngAfterViewInit(): void{ }

  async listarRoles() {
    await this.rolesService.listarRoles().subscribe(res => {
      if (res.estado == "SUCCESS") {
        console.log("Se asignan roles.");
        this.listaRoles = res.objeto;
        this.inicializarDataTable();
      }
    });
  }

  inicializarDataTable(): void {
    setTimeout(() => {
      $('#lista-roles').DataTable({
        language: environment.datatable_espanol
      });
    }, 250);
  }
}
