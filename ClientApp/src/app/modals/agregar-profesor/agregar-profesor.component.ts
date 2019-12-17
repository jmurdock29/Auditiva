import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agregar-profesor',
  templateUrl: './agregar-profesor.component.html',
  styleUrls: ['./agregar-profesor.component.css']
})
export class AgregarProfesorComponent  {

  constructor(public activeModal: NgbActiveModal) { }

  
}
