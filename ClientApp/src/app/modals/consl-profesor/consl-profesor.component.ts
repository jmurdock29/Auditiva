
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Profesor } from 'src/app/models/profesor';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-consl-profesor',
  templateUrl: './consl-profesor.component.html',
  styleUrls: ['./consl-profesor.component.css']
})
export class ConslProfesorComponent {


  constructor( public activeModal: NgbActiveModal) { }

  actualizar(profesor: Profesor) {
    this.activeModal.close(profesor);
}
 

}
