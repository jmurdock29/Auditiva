import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Profesor } from '../models/profesor';
import { HandleErrorService } from '..//services/handle-error.service';

const httpOptions = {
  headers: new HttpHeaders({ 'content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  baseUrl: string;
    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') baseUrl: string,
        private handleErrorService: HandleErrorService) {
        this.baseUrl = baseUrl;
    }
  
    /** POST: add a new profesor to the server */
    addProfesor(profesor: Profesor): Observable<Profesor> {
      return this.http.post<Profesor>(this.baseUrl + 'api/Profesor', profesor, httpOptions).pipe(
       
      );
    }


      /** GET profesor by identificacion. Will 404 if id not found */
      get3(identificacion: number): Observable<Profesor> {
        const url = `${this.baseUrl + 'api/Profesor'}/${identificacion}`;
        return this.http.get<Profesor>(url).pipe(
        
        );
      }

    

      
    /** GET profesor from the server */
    getAll(): Observable<Profesor[]> {
      return this.http.get<Profesor[]>(this.baseUrl + 'api/Profesor').pipe(

      );
    }

        /** GET profesor by identificacion. Will 404 if id not found */
 /*       get(identificacion: string): Observable<Profesor> {
          const url = `${this.baseUrl + 'api/Profesor'}/${identificacion}`;
          return this.http.get<Profesor>(url).pipe(
            tap(_ => this.log(`fetched profesor identificacion=${identificacion}`)),
            catchError(this.handleError<Profesor>(`getHero id=${identificacion}`))
          );
        }
*/
        get(id: string): Observable<Profesor> {
          const url = `${this.baseUrl + 'api/Profesor'}/${id}`;
          return this.http.get<Profesor>(url).pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Profesor>('Cuenta Service', null))
          );
        }


        get1(): Observable<Profesor[]> {
          return this.http.get<Profesor[]>(this.baseUrl + 'api/Profesor')
              .pipe(
                  tap(_ => this.handleErrorService.log('datos enviados')),
                  catchError(this.handleErrorService.handleError<Profesor[]>('Consulta Clientes', null))
              );
      }

      getByIdentificacion(identificacion:string): Observable<Profesor> {
        return this.http.get<Profesor>(this.baseUrl + 'api/Cliente/' + identificacion)
            .pipe(
                tap(_ => this.handleErrorService.log('datos enviados')),
                catchError(this.handleErrorService.handleError<Profesor>('Consulta de Cliente', null))
            );
    }


   
            /** PUT: update the profesor on the server */
    update(profesor: Profesor): Observable<any> {
      const url = `${this.baseUrl + 'api/Profesor'}/${profesor.identificacion}`;
      return this.http.put(url, profesor, httpOptions).pipe(
      );
    }
  
      
    /** DELETE: delete the profesor from the server */
    delete(profesor: Profesor | string): Observable<Profesor> {
      const id= typeof profesor === 'string' ? profesor : profesor.identificacion;
      const url = `${this.baseUrl + 'api/Profesor'}/${id}`;
      return this.http.delete<Profesor>(url, httpOptions).pipe(
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