import { Component, OnInit } from '@angular/core';
import { CalificacionesService } from '../../../../services/calificaciones.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from '../../../../modals/alert-modal/alert-modal.component';
import { Calificaciones } from '../../../../models/calificaciones'
import { AuthService } from '../../../../services/auth.service';
import { Numeros } from '../../../../models/numeros'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-activ1',
  templateUrl: './activ1.component.html',
  styleUrls: ['./activ1.component.css']
})
export class Activ1DVComponent implements OnInit {
  calificaciones: Calificaciones;
  numeros : Numeros;
  registerForm: FormGroup;

  calificacionId : string;
  cIdentificacion : string;
  titleTema: string;
  numbActividad: string;
  notaActividad: string;

  

  
  constructor(
      private calificacioneService: CalificacionesService, 
      private modalService: NgbModal,
      private authorizeService: AuthService,
      private route: ActivatedRoute,) { }


      
ngOnInit() {
  this.calificaciones = new Calificaciones();
  this.numeros = new Numeros();
  this.numeros.cIntentos=1;



}

userIdentidad(): string {
  return this.authorizeService.getIdentidad();
}

add(){
this.validacion();
}

validacion(): void {

if(this.numeros.cNumero1==null || this.numeros.cSigno==null 
  || this.numeros.cNumero2==null || this.numeros.cResultado==null){
  const messageBox = this.modalService.open(AlertModalComponent)
  messageBox.componentInstance.title = "Resultado Operación";
  messageBox.componentInstance.message = ('Ingrese todos los campos');
}else{
if(this.numeros.cIntentos==1){
  const messageBox = this.modalService.open(AlertModalComponent)
  messageBox.componentInstance.title = "Respuesta incorrecta";
  messageBox.componentInstance.message = ('Tienes otro intento!');
  this.numeros.cIntentos=0;
}else{
  if( this.numeros.cNumero1=="10" && this.numeros.cSigno=="Division" 
  && this.numeros.cNumero2=="2" && this.numeros.cResultado=="5"){
    this.Guardar("100");
  }else{
    if( this.numeros.cNumero1=="10" && this.numeros.cSigno!="Division" 
    && this.numeros.cNumero2=="2" && this.numeros.cResultado=="5"){
 this.Guardar("75");
    }else{
     if( this.numeros.cNumero1=="10" && this.numeros.cSigno=="Division" 
     && this.numeros.cNumero2=="2" && this.numeros.cResultado!=="5"){
      this.Guardar("75");
     }
    }
    if( this.numeros.cNumero1=="10" && this.numeros.cSigno!="Division" 
    && this.numeros.cNumero2=="2" && this.numeros.cResultado!="5"){
     this.Guardar("50");
    }else{
      if( this.numeros.cNumero1!="10" && this.numeros.cSigno=="Division" 
      && this.numeros.cNumero2!="2" && this.numeros.cResultado=="5"){
       this.Guardar("50");
      }
    }
    if(this.numeros.cNumero1!="10" && this.numeros.cSigno!="Division" 
    && this.numeros.cNumero2!="5" && this.numeros.cResultado!="5"){
      this.Guardar("0");
    }else{
      this.Guardar("0");
    }
    }
  }  

}

}




Guardar(nota: string){
this.calificaciones.calificacionId ="14"+this.userIdentidad()+"5";
this.calificaciones.cIdentificacion=this.userIdentidad();
this.calificaciones.titleTema="Multiplicaciones";
this.calificaciones.numbActividad="ACTIVIDAD-1";
this.calificaciones.notaActividad=nota;
this.calificacioneService.post(this.calificaciones).subscribe();
const messageBox = this.modalService.open(AlertModalComponent)
messageBox.componentInstance.title = "Resultado Operación";
messageBox.componentInstance.message = ('Fin de prueba! tu nota es:'+this.calificaciones.notaActividad);}



onReset() {
this.registerForm.reset();
}

}
