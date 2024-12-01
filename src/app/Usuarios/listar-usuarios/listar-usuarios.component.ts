import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import { environment } from 'src/environments/environment';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit, AfterViewInit {
  public listaUsuarios: any = [];
  constructor(private usuariosService: UsuariosService) { }

  async ngOnInit(): Promise<void> {
    await this.listarUsuarios();
  }
  
  ngAfterViewInit(): void{ }

  async listarUsuarios() {
    await this.usuariosService.listarUsuarios().subscribe(res => {
      if (res.estado == "SUCCESS") {
        console.log("Se asignan usuarios.");
        this.listaUsuarios = res.objeto;
        this.inicializarDataTable();
      }
    });
  }

  async listarBarbersActivos() {
    await this.usuariosService.listarUsuarios().subscribe(res => {
      if (res.estado == "SUCCESS") {
        console.log("Se asignan usuarios.");
        this.listaUsuarios = res.objeto;
        this.inicializarDataTable();
      }
    });
  }

  inicializarDataTable(): void {
    setTimeout(() => {
      $('#lista-usuarios').DataTable({
        language: environment.datatable_espanol
      });
    }, 250);
  }
}
