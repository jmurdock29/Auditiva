import { Component, OnInit } from '@angular/core';
import { AyudaOnlineMessageService } from '../../services/ayuda-online-message.service';
// import * as _swal from 'sweetalert';
// import { SweetAlert } from 'sweetalert/typings/core';
// const swal: SweetAlert;
@Component({
  selector: 'app-ayuda-online',
  templateUrl: './ayuda-online.component.html',
  styleUrls: ['./ayuda-online.component.css']
})
export class AyudaOnlineComponent  {

  constructor(public _AyudaOnlineMessageService: AyudaOnlineMessageService) {
  }
   contactForm(form) {
   this._AyudaOnlineMessageService.sendMessage(form).subscribe(() => {
   alert( "Mensaje enviado correctamente");
   });
   }
}
