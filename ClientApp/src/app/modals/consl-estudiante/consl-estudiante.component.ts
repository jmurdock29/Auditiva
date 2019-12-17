
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Profesor } from 'src/app/models/profesor';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-consl-estudiante',
  templateUrl: './consl-estudiante.component.html',
  styleUrls: ['./consl-estudiante.component.css']
})
export class ConslEstudianteComponent  {


  constructor( public activeModal: NgbActiveModal) { }

  actualizar(profesor: Profesor) {
    this.activeModal.close(profesor);
}
}
