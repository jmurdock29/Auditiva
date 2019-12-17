import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { AdminPerfilComponent } from './components/administrador/perfil/perfil.component';
import { GdProfesorComponent } from './components/administrador/gest-profesor/gd-profesor/gd-profesor.component';
import { MdProfesorComponent } from './components/administrador/gest-profesor/md-profesor/md-profesor.component';
import { AdminProfesorComponent } from './components/administrador/gest-profesor/admin-profesor/admin-profesor.component';
import { AdminEstudianteComponent } from './components/administrador/gest-estudiante/admin-estudiante/admin-estudiante.component';
import { GdEstudianteComponent } from './components/administrador/gest-estudiante/gd-estudiante/gd-estudiante.component';
import { MdEstudianteComponent } from './components/administrador/gest-estudiante/md-estudiante/md-estudiante.component';
import { ContenidoComponent } from './components/temas/contenido/contenido.component';
import { NavLateralComponent } from './components/nav-lateral/nav-lateral.component';
import { CursosComponent } from './components/administrador/gest-cursos/cursos/cursos.component';
import { MultiplicacionesComponent } from './components/temas/tema1/multiplicaciones/multiplicaciones.component';
import { FraccionesComponent } from './components/temas/tema3/1/fracciones1/fracciones.component';
import { IndiceComponent } from './components/indice/indice.component';
import { VocabularioMPComponent } from './components/temas/tema1/vocabulario-mp/vocabulario-mp.component'
import { VocabularioDVComponent } from './components/temas/tema2/vocabulario-dv/vocabulario-dv.component'
import { VocabularioFCComponent } from './components/temas/tema3/vocabulario-fc/vocabulario-fc.component'
import { ConceptospreviosComponent } from './components/conceptosprevios/conceptosprevios.component';
import { Fracciones2Component } from './components/temas/tema3/2/fracciones2/fracciones2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DivisionesComponent } from './components/temas/tema2/divisiones/divisiones.component';
import { FormulariosNavComponent } from './components/formularios-nav/formularios-nav.component';
import { PasswordComponent } from './components/user/password/password.component';
import { ProfesorPerfilComponent } from './components/profesor/perfil/perfil.component';
import { EstudiantePerfilComponent } from './components/estudiante/perfil/perfil.component';
import { AlertModalComponent } from './modals/alert-modal/alert-modal.component';
import { FiltroProfesorPipe } from './pipes/filtro-profesor.pipe';
import { TbProfesorComponent } from './components/administrador/gest-cursos/complemento/tb-profesor/tb-profesor.component';
import { TbEstudianteComponent } from './components/administrador/gest-cursos/complemento/tb-estudiante/tb-estudiante.component';
import { ActividadFinalComponent } from './components/temas/tema3/actividad-final/actividad-final.component';
import { ConslProfesorComponent } from './modals/consl-profesor/consl-profesor.component';
import { FiltroCursoPipe } from './pipes/filtro-curso.pipe';
import { TablaProfesorComponent } from './modals/complemento/tabla-profesor/tabla-profesor.component';
import { EditarCursoComponent } from './modals/editar-curso/editar-curso.component';
import { AgregarProfesorComponent } from './modals/agregar-profesor/agregar-profesor.component';
import { TablaEstudianteComponent } from './modals/complemento/tabla-estudiante/tabla-estudiante.component';
import { AgregarEstudianteComponent } from './modals/agregar-estudiante/agregar-estudiante.component';
import { ConslEstudianteComponent } from './modals/consl-estudiante/consl-estudiante.component';
import { StoreModule } from '@ngrx/store';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
import { ConsCalificacionesComponent } from './components/estudiante/cons-calificaciones/cons-calificaciones.component';
import { FiltroCalificacionPipe } from './pipes/filtro-calificacion.pipe';
import { AyudaOnlineComponent } from './components/ayuda-online/ayuda-online.component';
import { AyudaOnlineMessageService } from './services/ayuda-online-message.service';
import { CalificacionesProfesorComponent } from './components/profesor/calificaciones-profesor/calificaciones-profesor.component';
import { EditarNotasComponent } from './components/profesor/editar-notas/editar-notas.component';
import { CursoEstudianteComponent } from './components/estudiante/curso-estudiante/curso-estudiante.component';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    LoginComponent,
    RegisterComponent,
    Page404Component,
    AdminPerfilComponent,
    AdminProfesorComponent,
    GdProfesorComponent,
    MdProfesorComponent,
    AdminEstudianteComponent,
    GdEstudianteComponent,
    MdEstudianteComponent,
    ContenidoComponent,
    NavLateralComponent,
    CursosComponent,
    VocabularioMPComponent,
    VocabularioDVComponent,
    VocabularioFCComponent,
    MultiplicacionesComponent,
    DivisionesComponent,
    FraccionesComponent,
    IndiceComponent,
    FormulariosNavComponent,
    ConceptospreviosComponent,
    Fracciones2Component,
    PasswordComponent,
    ProfesorPerfilComponent,
    EstudiantePerfilComponent,
    Activ1MPComponent,
    AlertModalComponent,
    FiltroProfesorPipe,
    TbProfesorComponent,
    TbEstudianteComponent,
    Activ2MPComponent,
    Activ3MPComponent,
    Activ1DVComponent,
    ActividadFinalComponent,
    ConslProfesorComponent,
    FiltroCursoPipe,
    TablaProfesorComponent,
    EditarCursoComponent,
    AgregarProfesorComponent,
    TablaEstudianteComponent,
    AgregarEstudianteComponent,
    ConslEstudianteComponent,
    Activ1FcComponent,
    ConsCalificacionesComponent,
    FiltroCalificacionPipe,
    AyudaOnlineComponent,
    CalificacionesProfesorComponent,
    EditarNotasComponent,
    CursoEstudianteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    DragDropModule,

    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
    ]),
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService,  { dataEncapsulation: false  },
    // ),
  ],
  entryComponents: [
    AlertModalComponent,
    ConslProfesorComponent,
    AgregarProfesorComponent,
    AgregarEstudianteComponent,
    ConslEstudianteComponent
],
  providers: [AyudaOnlineMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
