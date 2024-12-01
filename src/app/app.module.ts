import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './Usuarios/iniciar-sesion/iniciar-sesion.component';
import { ListarUsuariosComponent } from './Usuarios/listar-usuarios/listar-usuarios.component';
import { RegistrarseComponent } from './Usuarios/registrarse/registrarse.component';
import { HeaderComponent } from './Complementos/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioUsuarioComponent } from './Usuarios/formulario-usuario/formulario-usuario.component';
import { ListarRolesComponent } from './Roles/listar-roles/listar-roles.component';
import { EditarRolComponent } from './Roles/editar-rol/editar-rol.component';
import { SolicitarCitaComponent } from './Agenda/solicitar-cita/solicitar-cita.component';
import { ListarAgendasComponent } from './Agenda/listar-agendas/listar-agendas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MiAgendaComponent } from './Agenda/mi-agenda/mi-agenda.component';
import { HistorialAgendaComponent } from './Agenda/historial-agenda/historial-agenda.component';
import { MisCitasComponent } from './Agenda/mis-citas/mis-citas.component';
import { EditarAgendaComponent } from './Agenda/editar-agenda/editar-agenda.component';
import { MiPerfilComponent } from './Usuarios/mi-perfil/mi-perfil.component';
import { EditarMiCitaComponent } from './Agenda/editar-mi-cita/editar-mi-cita.component';


@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    ListarUsuariosComponent,
    RegistrarseComponent,
    HeaderComponent,
    FormularioUsuarioComponent,
    ListarRolesComponent,
    EditarRolComponent,
    SolicitarCitaComponent,
    ListarAgendasComponent,
    MiAgendaComponent,
    HistorialAgendaComponent,
    MisCitasComponent,
    EditarAgendaComponent,
    MiPerfilComponent,
    EditarMiCitaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    IniciarSesionComponent,
    RegistrarseComponent,
    ListarUsuariosComponent,
    FormularioUsuarioComponent,
    SolicitarCitaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
