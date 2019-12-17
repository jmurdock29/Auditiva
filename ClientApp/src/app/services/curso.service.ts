
import { Injectable, Inject } from '@angular/core';
import { HandleErrorService } from './handle-error.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of, observable } from 'rxjs';
import { Curso } from '../models/curso'

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class CursoService {
    baseUrl: string;
    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') baseUrl: string,
        private handleErrorService: HandleErrorService)
    {
        this.baseUrl = baseUrl;
    }

      /** GET profesor from the server */
      getAll(): Observable<Curso[]> {
        return this.http.get<Curso[]>(this.baseUrl + 'api/Curso')
      }

      
      get1(): Observable<Curso[]> {
        return this.http.get<Curso[]>(this.baseUrl + 'api/Curso')
            .pipe(
                tap(_ => this.handleErrorService.log('datos enviados')),
                catchError(this.handleErrorService.handleError<Curso[]>('Consulta curso', null))
            );
    }

    get3(cursoId: number): Observable<Curso> {
      const url = `${this.baseUrl + 'api/Curso'}/${cursoId}`;
      return this.http.get<Curso>(url).pipe(
        tap(_ => this.log(`fetched curso identificacion=${cursoId}`)),
        catchError(this.handleError<Curso>(`getHero id=${cursoId}`))
      );
    }

    post(curso: Curso): Observable<Curso> {
        return this.http.post<Curso>(this.baseUrl + 'api/Curso', curso)
            .pipe(
                tap(_ => this.handleErrorService.log('datos enviados')),
                catchError(this.handleErrorService.handleError<Curso>('Agregado al curso', null))
            );
    }

    

              update(curso: Curso): Observable<any> {
                const url = `${this.baseUrl + 'api/Curso'}/${curso.cursoId}`;
                return this.http.put(url, curso, httpOptions).pipe(
                  tap(_ => this.log(`updated curso cursoId=${curso.cursoId}`)),
                  catchError(this.handleError<any>('profesor'))
                );
              }
            

    delete(curso: Curso | string): Observable<Curso> {
        const id = typeof curso === 'string' ? curso : curso.cursoId;
        const url = `${this.baseUrl + 'api/curso'}/${id}`;
    
        return this.http.delete<Curso>(url, httpOptions).pipe(
          tap(_ => this.log(`se eleminó del curso la persona con id=${id}`)),
          catchError(this.handleError<Curso>('deleteCurso'))
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
