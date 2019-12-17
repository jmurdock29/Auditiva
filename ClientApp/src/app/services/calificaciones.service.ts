

import { Injectable, Inject } from '@angular/core';
import { HandleErrorService } from './handle-error.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, observable } from 'rxjs';
import { Calificaciones } from '../models/calificaciones'

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {
    baseUrl: string;
    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') baseUrl: string,
        private handleErrorService: HandleErrorService)
    {
        this.baseUrl = baseUrl;
    }

      /** GET profesor from the server */
      getAll(): Observable<Calificaciones[]> {
        return this.http.get<Calificaciones[]>(this.baseUrl + 'api/Calificaciones')
      }

      
      get1(): Observable<Calificaciones[]> {
        return this.http.get<Calificaciones[]>(this.baseUrl + 'api/Calificaciones')
            .pipe(
                tap(_ => this.handleErrorService.log('datos enviados')),
                catchError(this.handleErrorService.handleError<Calificaciones[]>('Consulta calificaciones', null))
            );
    }

    get3(calificacionId: number): Observable<Calificaciones> {
      const url = `${this.baseUrl + 'api/Curso'}/${calificacionId}`;
      return this.http.get<Calificaciones>(url).pipe(
      );
    }

    post(calificaciones: Calificaciones): Observable<Calificaciones> {
        return this.http.post<Calificaciones>(this.baseUrl + 'api/Calificaciones', calificaciones)
            .pipe(
                tap(_ => this.handleErrorService.log('datos enviados')),
                catchError(this.handleErrorService.handleError<Calificaciones>('Agregado nota', null))
            );
    }

              /** PUT: update the profesor on the server */
              update(calificaciones: Calificaciones): Observable<any> {
                const url = `${this.baseUrl + 'api/Calificaciones'}/${calificaciones.calificacionId}`;
                return this.http.put(url, calificaciones, httpOptions).pipe(
                  tap(_ => this.log(`updated curso cursoId=${calificaciones.calificacionId}`)),
                  catchError(this.handleError<any>('calificaciones'))
                );
              }

    delete(calificaciones: Calificaciones | string): Observable<Calificaciones> {
        const id = typeof calificaciones === 'string' ? calificaciones : calificaciones.calificacionId;
        const url = `${this.baseUrl + 'api/calificaciones'}/${id}`;
    
        return this.http.delete<Calificaciones>(url, httpOptions).pipe(
        );
      }

      private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
          this.log(`${operation} failed: ${error.message}`);
          return of(result as T);
        };
      }
      /** Log a HeroService message with the MessageService */
      private log(message: string) {
    
        alert(message);
      }
}
