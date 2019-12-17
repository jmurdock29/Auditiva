
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CursoService } from '../../../../services/curso.service';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../../../../models/curso';
import { AlertModalComponent } from 'src/app/modals/alert-modal/alert-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgregarProfesorComponent } from '../../../../modals/agregar-profesor/agregar-profesor.component';
import { AgregarEstudianteComponent } from '../../../../modals/agregar-estudiante/agregar-estudiante.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {
  cursos:Curso[];
  searchText: string;
  
  @Output() seleccionado = new EventEmitter<Curso>();
   constructor(
     private route: ActivatedRoute,
     private cursoService: CursoService,
     private modalService: NgbModal,
   ) { }
  
  

   ngOnInit() {
    this.getAll();
    this.cursoService.get1().subscribe(result => {
      this.cursos = result;
      this.searchText = '';
  });
  }

  
  
  getAll(){
    this.cursoService.getAll()
    .subscribe(cursos=>this.cursos=cursos);
  }

  // consulta(){
  //     const messageBox = this.modalService.open(AlertModalComponent)
  //     messageBox.componentInstance.title = "Consulta";
  //     messageBox.componentInstance.message = "los datos se han cargado";
  //   }

  open(curso: Curso){
    const modalRef = this.modalService.open(AgregarProfesorComponent, { size: 'lg' });
  }

  open2(curso: Curso){
    const modalRef = this.modalService.open(AgregarEstudianteComponent, { size: 'lg' });
  }

  seleccionar(curso: Curso) {
    this.seleccionado.emit(curso);
}

}
