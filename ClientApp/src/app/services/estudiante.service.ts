
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Estudiante } from '../models/estudiante';

const httpOptions = {
  headers: new HttpHeaders({ 'content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }

  
    /** POST: add a new profesor to the server */
    addEstudiante(estudiante: Estudiante): Observable<Estudiante> {
      return this.http.post<Estudiante>(this.baseUrl + 'api/Estudiante', estudiante, httpOptions).pipe(
        tap((newEstudiante: Estudiante) => this.log(`added NewEstudiante w/ identificacion=${newEstudiante.identificacion}`)),
        catchError(this.handleError<Estudiante>('addEstudiante'))
      );
    }

      
    /** GET profesor from the server */
    getAll(): Observable<Estudiante[]> {
      return this.http.get<Estudiante[]>(this.baseUrl + 'api/Estudiante').pipe(
        tap(_ => this.log('Se Consulta la información')),
        catchError(this.handleError<Estudiante[]>('getAll', []))
      );
    }

        /** GET profesor by id. Will 404 if id not found */
        get(id: number): Observable<Estudiante> {
          const url = `${this.baseUrl + 'api/Estudiante'}/${id}`;
          return this.http.get<Estudiante>(url).pipe(
            tap(_ => this.log(`fetched estudiante id=${id}`)),
            catchError(this.handleError<Estudiante>(`getHero id=${id}`))
          );
        }

   
            /** PUT: update the profesor on the server */
    update(estudiante: Estudiante): Observable<any> {
      const url = `${this.baseUrl + 'api/Estudiante'}/${estudiante.id}`;
      return this.http.put(url, estudiante, httpOptions).pipe(
        tap(_ => this.log(`updated profesor id=${estudiante.id}`)),
        catchError(this.handleError<any>('estudiante'))
      );
    }
  
      
    /** DELETE: delete the profesor from the server */
    delete(estudiante: Estudiante | number): Observable<Estudiante> {
      const id= typeof estudiante === 'number' ? estudiante : estudiante.id;
      const url = `${this.baseUrl + 'api/Estudiante'}/${id}`;
      return this.http.delete<Estudiante>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted estudiante id=${id}`)),
        catchError(this.handleError<Estudiante>('deleteEstudiante'))
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
        alert(`EstudianteService: ${message}`);
      }


}