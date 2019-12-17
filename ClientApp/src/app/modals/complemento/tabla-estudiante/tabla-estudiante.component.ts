import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Profesor } from 'src/app/models/profesor';
import { ProfesorService } from '../../../services/profesor.service';
@Component({
  selector: 'app-tabla-estudiante',
  templateUrl: './tabla-estudiante.component.html',
  styleUrls: ['./tabla-estudiante.component.css']
})
export class TablaEstudianteComponent implements OnInit {

  profesores:Profesor[];
  searchText: string;
  @Output() seleccionado = new EventEmitter<Profesor>();

  constructor( private profesorService: ProfesorService,) { }

  ngOnInit() {
  
    this.profesorService.get1().subscribe(result => {
      this.profesores = result;
      this.searchText = 'ESTUDIANTE';
  });
  }

  seleccionar(profesor: Profesor) {
    this.seleccionado.emit(profesor);
}
}
