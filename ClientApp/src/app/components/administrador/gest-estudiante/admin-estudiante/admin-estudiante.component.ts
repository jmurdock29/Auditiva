import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProfesorService } from '../../../../services/profesor.service';
import { Profesor } from '../../../../models/profesor';
@Component({
  selector: 'app-admin-estudiante',
  templateUrl: './admin-estudiante.component.html',
  styleUrls: ['./admin-estudiante.component.css']
})
export class AdminEstudianteComponent implements OnInit {
  profesores:Profesor[];
  searchText: string;
  
  @Output() seleccionado = new EventEmitter<Profesor>();

    constructor(private profesorService: ProfesorService) { }
  
    ngOnInit() {
      this.getAll();
      this.profesorService.get1().subscribe(result => {
        this.profesores = result;
        this.searchText = 'ESTUDIANTE';
    });
    }
  
    getAll(){
      this.profesorService.getAll()
      .subscribe(profesores=>this.profesores=profesores);
    }
  
    seleccionar(profesor: Profesor) {
      this.seleccionado.emit(profesor);
  }

}
