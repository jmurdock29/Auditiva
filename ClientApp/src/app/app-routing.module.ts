import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { AdminPerfilComponent } from './components/administrador/perfil/perfil.component';
import { AdminProfesorComponent } from './components/administrador/gest-profesor/admin-profesor/admin-profesor.component';
import { GdProfesorComponent } from './components/administrador/gest-profesor/gd-profesor/gd-profesor.component';
import { MdProfesorComponent } from './components/administrador/gest-profesor/md-profesor/md-profesor.component';
import { AdminEstudianteComponent } from './components/administrador/gest-estudiante/admin-estudiante/admin-estudiante.component';
import { GdEstudianteComponent } from './components/administrador/gest-estudiante/gd-estudiante/gd-estudiante.component';
import { MdEstudianteComponent } from './components/administrador/gest-estudiante/md-estudiante/md-estudiante.component';
import { VocabularioMPComponent } from './components/temas/tema1/vocabulario-mp/vocabulario-mp.component'
import { VocabularioDVComponent } from './components/temas/tema2/vocabulario-dv/vocabulario-dv.component'
import { VocabularioFCComponent } from './components/temas/tema3/vocabulario-fc/vocabulario-fc.component'
import { ContenidoComponent } from './components/temas/contenido/contenido.component';
import { NavLateralComponent } from './components/nav-lateral/nav-lateral.component';
import { CursosComponent } from './components/administrador/gest-cursos/cursos/cursos.component';
import { MultiplicacionesComponent } from './components/temas/tema1/multiplicaciones/multiplicaciones.component';
import { FraccionesComponent } from './components/temas/tema3/1/fracciones1/fracciones.component';
import { IndiceComponent } from './components/indice/indice.component';
import { ConceptospreviosComponent } from './components/conceptosprevios/conceptosprevios.component';
import { DivisionesComponent } from './components/temas/tema2/divisiones/divisiones.component';
import { Fracciones2Component } from './components/temas/tema3/2/fracciones2/fracciones2.component';
import { ProfesorPerfilComponent } from './components/profesor/perfil/perfil.component';
import { EstudiantePerfilComponent } from './components/estudiante/perfil/perfil.component';
import { PasswordComponent } from './components/user/password/password.component';
// multiplicacion  
import { Activ1MPComponent } from './components/temas/tema1/activ1/activ1.component';
import { Activ2MPComponent } from './components/temas/tema1/activ2/activ2.component';
import { Activ3MPComponent } from './components/temas/tema1/activ3/activ3.component';
// division
import { Activ1DVComponent } from './components/temas/tema2/activ1/activ1.component';
import { Activ2DVComponent } from './components/temas/tema2/activ2/activ2.component';
import { Activ3DVComponent } from './components/temas/tema2/activ3/activ3.component';
// fracciones
import { Activ1FcComponent } from './components/temas/tema3/1/activ1/activ1.component';
import { Activ2FcComponent } from './components/temas/tema3/1/activ2/activ2.component';

import { Activ1Fc2Component } from './components/temas/tema3/2/activ1/activ1.component';
import { Activ2Fc2Component } from './components/temas/tema3/2/activ2/activ2.component';

import { ActividadFinalComponent } from './components/temas/tema3/actividad-final/actividad-final.component';
import { AuthGuard } from './auth/auth.guard';
import { TbProfesorComponent } from './components/administrador/gest-cursos/complemento/tb-profesor/tb-profesor.component';
import { TbEstudianteComponent } from './components/administrador/gest-cursos/complemento/tb-estudiante/tb-estudiante.component';
import { EditarCursoComponent } from './modals/editar-curso/editar-curso.component';

import { ConsCalificacionesComponent } from './components/estudiante/cons-calificaciones/cons-calificaciones.component';
import { AyudaOnlineComponent } from './components/ayuda-online/ayuda-online.component';
import { CalificacionesProfesorComponent } from './components/profesor/calificaciones-profesor/calificaciones-profesor.component';
import { CursoEstudianteComponent } from './components/estudiante/curso-estudiante/curso-estudiante.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // TOO MUNDO


  // TOO MUNDO PERO LOGEAO
  {
    path: 'home/contenido',
    component: ContenidoComponent, canActivate: [AuthGuard]
  },

  {
    path: 'buzon/auydaOnline',
    component: AyudaOnlineComponent, canActivate: [AuthGuard]
  },


  {
    path: 'contenido/conceptos',
    component: ConceptospreviosComponent, canActivate: [AuthGuard]
  },

  // vocabulario


  {
    path: 'contenido/vocabulario/multiplicaciones',
    component: VocabularioMPComponent, canActivate: [AuthGuard]
  },

  {
    path: 'contenido/vocabulario/divisiones',
    component: VocabularioDVComponent, canActivate: [AuthGuard]
  },

  {
    path: 'contenido/vocabulario/fracciones',
    component: VocabularioFCComponent, canActivate: [AuthGuard]
  },

  // multiplicacion

  {
    path: "contenido/teoria-multiplicaciones",
    component: MultiplicacionesComponent, canActivate: [AuthGuard]
  },


  {
    path: 'contenido/multiplicaciones-Actividad1',
    component: Activ1MPComponent, canActivate: [AuthGuard]
  },

  {
    path: 'contenido/multiplicaciones-Actividad2',
    component: Activ2MPComponent, canActivate: [AuthGuard]
  },

  // divisiones
  {
    path: "contenido/teoria-divisiones",
    component: DivisionesComponent, canActivate: [AuthGuard]
  },

  {
    path: 'contenido/division-Actividad1',
    component: Activ1DVComponent, canActivate: [AuthGuard]
  },

  // fracciones
  {
    path: "contenido/teoria-fracciones-parte-1",
    component: FraccionesComponent, canActivate: [AuthGuard]
  },

  {
    path: "contenido/teoria-fracciones-parte-2",
    component: Fracciones2Component, canActivate: [AuthGuard]
  },

  {
    path: 'contenido/fraccines-Actividad1',
    component: Activ1FcComponent, canActivate: [AuthGuard]
  },



  // ADMIN
  {
    path: 'administrador/perfil',
    component: AdminPerfilComponent, canActivate: [AuthGuard], data: { role: 'ADMINISTRADOR' }
  },

  {
    path: 'administrador/profesores',
    component: AdminProfesorComponent, canActivate: [AuthGuard], data: { role: 'ADMINISTRADOR' }
  },

  {
    path: 'administrador/profesores-guardar',
    component: GdProfesorComponent
  },

  {
    path: 'administrador/profesores-modificar-eliminar/:identificacion',
    component: MdProfesorComponent, canActivate: [AuthGuard], data: { role: 'ADMINISTRADOR' }
  },

  {
    path: 'administrador/estudiantes',
    component: AdminEstudianteComponent, canActivate: [AuthGuard], data: { role: 'ADMINISTRADOR' }
  },

  {
    path: 'administrador/estudiantes-guardar',
    component: GdEstudianteComponent, canActivate: [AuthGuard], data: { role: 'ADMINISTRADOR' }
  },

  {
    path: "administrador/estudiantes-modificar-eliminar/:identificacion",
    component: MdEstudianteComponent, canActivate: [AuthGuard], data: { role: 'ADMINISTRADOR' }
  },

  {
    path: 'administrador/cursos',
    component: CursosComponent, canActivate: [AuthGuard], data: { role: 'ADMINISTRADOR' }
  },

  {
    path: 'administrador/cursos-agregar-profesor',
    component: TbProfesorComponent, canActivate: [AuthGuard], data: { role: 'ADMINISTRADOR' }
  },

  {
    path: 'administrador/cursos-agregar-estudiante',
    component: TbEstudianteComponent, canActivate: [AuthGuard], data: { role: 'ADMINISTRADOR' }
  },

  {
    path: 'administrador/cursos-modificar-eliminar/:cursoId',
    component: EditarCursoComponent, canActivate: [AuthGuard], data: { role: 'ADMINISTRADOR' }
  },

  // PROFESOR
  {
    path: 'profesor/perfil',
    component: ProfesorPerfilComponent, canActivate: [AuthGuard], data: { role: 'PROFESOR' }
  },
  

  {
    path: 'Calificaciones/profesor-curso',
    component: CalificacionesProfesorComponent, canActivate: [AuthGuard], data: { role: 'PROFESOR' }
  },
  // ESTUDIANTE
  {
    path: 'estudiante/perfil',
    component: EstudiantePerfilComponent, canActivate: [AuthGuard], data: { role: 'ESTUDIANTE' }
  },

  {
    path: 'estudiante/curso',
    component: CursoEstudianteComponent, canActivate: [AuthGuard], data: { role: 'ESTUDIANTE' }
  },

  { path: "contenido/teoria-fracciones-parte-1", component: FraccionesComponent },
  { path: "contenido/teoria-fracciones-parte-2", component: Fracciones2Component },

  { path: "estudiante/calificaciones", component: ConsCalificacionesComponent },


  { path: "contenido/multiplicaciones-Actividad1", component: Activ1MPComponent },

  { path: "home", component: HomeComponent },
  { path: "user/login", component: LoginComponent },
  { path: "user/password", component: PasswordComponent },
  // .....
  { path: "navLateral", component: NavLateralComponent,canActivate: [AuthGuard]},
  { path: "**", component: Page404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

