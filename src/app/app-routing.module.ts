import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './Usuarios/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './Usuarios/registrarse/registrarse.component';
import { SolicitarCitaComponent } from './Agenda/solicitar-cita/solicitar-cita.component';
import { ListarAgendasComponent } from './Agenda/listar-agendas/listar-agendas.component';
import { EditarAgendaComponent } from './Agenda/editar-agenda/editar-agenda.component';
import { ListarUsuariosComponent } from './Usuarios/listar-usuarios/listar-usuarios.component';
import { ListarRolesComponent } from './Roles/listar-roles/listar-roles.component';
import { HistorialAgendaComponent } from './Agenda/historial-agenda/historial-agenda.component';
import { MiPerfilComponent } from './Usuarios/mi-perfil/mi-perfil.component';
import { MisCitasComponent } from './Agenda/mis-citas/mis-citas.component';
import { EditarMiCitaComponent } from './Agenda/editar-mi-cita/editar-mi-cita.component';

const routes: Routes = [
  { path: '', redirectTo: 'Iniciar-Sesion', pathMatch: 'full' },
  { path: 'Iniciar-Sesion', component: IniciarSesionComponent },
  { path: 'Registrarse', component: RegistrarseComponent },
  { path: 'Solicitar-Cita', component: SolicitarCitaComponent },
  { path: 'Mi-Agenda', component: ListarAgendasComponent },
  { path: 'Editar-Agenda', component: EditarAgendaComponent },
  { path: 'Gestionar-Usuarios', component: ListarUsuariosComponent },
  { path: 'Gestionar-Roles', component: ListarRolesComponent },
  { path: 'Historial-Agenda', component: HistorialAgendaComponent },
  { path: 'Mi-Perfil', component: MiPerfilComponent },
  { path: 'Mis-Citas', component: MisCitasComponent},
  { path: 'Editar-Mi-Cita', component: EditarMiCitaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
