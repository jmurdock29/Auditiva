import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from '../models/profesor';
import { Observable, from } from 'rxjs';
import { HandleErrorService } from 'src/app/services/handle-error.service';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string;
  constructor(private _router: Router, private http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleErrorService) {
    this.baseUrl = baseUrl;

  }

  profesor: Profesor;

  login(user: string, nombre: string, apellido: string, password: string, rol: string, grado: string) {
    sessionStorage.setItem('user', user);
    sessionStorage.setItem('nombre', nombre);
    sessionStorage.setItem('apellido', apellido);
    sessionStorage.setItem('roles', rol);
    sessionStorage.setItem('grado', grado);

    //this._router.navigate(['/login']);
  }



  logout() {
    sessionStorage.clear();
    //this._router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem('user') != null;
  }

  hasRole(rol: string): boolean {
    let roles: string[]
    if (!this.isAuthenticated()) return false;
    if (sessionStorage.getItem('roles') == 'ADMINISTRADOR') {
      roles = ["ADMINISTRADOR"];
      return roles.indexOf(rol) >= 0;
    } else {
      if (sessionStorage.getItem('roles') == "PROFESOR") {
        roles = ["PROFESOR"];
        return roles.indexOf(rol) >= 0;
      } else {
        if (sessionStorage.getItem('roles') == "ESTUDIANTE") {
          roles = ["ESTUDIANTE"];
          return roles.indexOf(rol) >= 0;
        }
      }
    }
  }

  getIdentidad(): string {
    return sessionStorage.getItem('user') != null ? sessionStorage.getItem('user') : 'Anonimo';
  }

  getName(): string {
    return sessionStorage.getItem('nombre') != null ? sessionStorage.getItem('nombre') : 'Anonimo';
  }

  getApellido(): string {
    return sessionStorage.getItem('apellido') != null ? sessionStorage.getItem('apellido') : 'Anonimo';
  }


  getRolUser(): string {
    return sessionStorage.getItem('roles') != null ? sessionStorage.getItem('roles') : 'Anonimo';
  }

  getGrado(): string {
    return sessionStorage.getItem('grado') != null ? sessionStorage.getItem('grado') : 'Anonimo';
  }




  



}

