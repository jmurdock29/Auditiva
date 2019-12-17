import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AyudaOnlineMessageService {
constructor(private _http: HttpClient) { }
sendMessage(body) {
 return this._http.post('http://localhost:3000/formulario', body);
 }
}