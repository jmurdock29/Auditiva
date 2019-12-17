import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Profesor } from 'src/app/models/profesor';
import { ProfesorService } from '../../../services/profesor.service';
@Component({
  selector: 'app-tabla-profesor',
  templateUrl: './tabla-profesor.component.html',
  styleUrls: ['./tabla-profesor.component.css']
})
export class TablaProfesorComponent implements OnInit {
  profesores:Profesor[];
  searchText: string;
  @Output() seleccionado = new EventEmitter<Profesor>();

  constructor( private profesorService: ProfesorService,) { }

  ngOnInit() {
  
    this.profesorService.get1().subscribe(result => {
      this.profesores = result;
      this.searchText = 'PROFESOR';
  });
  }

  seleccionar(profesor: Profesor) {
    this.seleccionado.emit(profesor);
}
}
