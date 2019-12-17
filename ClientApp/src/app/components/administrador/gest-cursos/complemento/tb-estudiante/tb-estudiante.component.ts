import { Component, OnInit } from '@angular/core';
import { ProfesorService } from '../../../../../services/profesor.service';
import { CursoService } from '../../../../../services/curso.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ConslEstudianteComponent } from '../../../../../modals/consl-estudiante/consl-estudiante.component';
import { AlertModalComponent } from '../../../../../modals/alert-modal/alert-modal.component';
import { Profesor } from '../../../../../models/profesor';
import { Curso } from '../../../../../models/curso'

@Component({
  selector: 'app-tb-estudiante',
  templateUrl: './tb-estudiante.component.html',
  styleUrls: ['./tb-estudiante.component.css']
})
export class TbEstudianteComponent implements OnInit {
  curso: Curso;
  profesor:Profesor;
  sprofesor:string;
  registerForm: FormGroup;
  submitted = false;

  constructor(
      private cursoService: CursoService, 
      private profesorService: ProfesorService,          
      private formBuilder: FormBuilder,
      private modalService: NgbModal) { }

      // identificacion: string;
      // nombres: string;
      // apellidos: string;
      // grado: string;
      // tipo: string;
  ngOnInit() {
      
      this.curso = new Curso();
      this.curso.cursoId = "";
      this.curso.pNombres = "";
      this.curso.pApellidos = "";
      this.curso.pGrado = "";
      this.curso.pTipo = "";

      
      this.registerForm = this.formBuilder.group({
        cursoId: [this.curso.cursoId, Validators.required],
        pNombres: [''],
        pApellidos: [''],
        pGrado: [this.curso.pGrado, Validators.required],   
        pTipo: [''],
          
      });
      
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  buscarProfesor() {
      this.profesorService.getByIdentificacion(this.registerForm.value.cursoId).subscribe(profesor => {
          if (profesor != null) {
              this.f['cursoId'].setValue(profesor.identificacion);
              this.f['pApellidos'].setValue(profesor.apellidos);
              this.f['pNombres'].setValue(profesor.nombres);
              this.f['pTipo'].setValue(profesor.tipo);
        
          }
          else
          {
              this.openModalEstudiante();
          }
      });
  }

  // Manejo Modal

  openModalEstudiante()
    {
        this.modalService.open(ConslEstudianteComponent,
             { size: 'lg' }).result.then((profesor) => this.actualizar(profesor));
    }


  actualizar(profesor: Profesor) {
      this.registerForm.controls['cursoId'].setValue(profesor.identificacion);
      this.registerForm.controls['pApellidos'].setValue(profesor.apellidos);
      this.registerForm.controls['pNombres'].setValue(profesor.nombres);
      this.registerForm.controls['pTipo'].setValue(profesor.tipo);
  }
  //Fin Manejo Modal

  
  //Manejo Registrar
  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      this.create();
      this.onReset();
  }

  create() {
      this.curso = this.registerForm.value;
      this.profesor = this.registerForm.value;

      this.cursoService.post(this.curso).subscribe()
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Resultado Operación";
      messageBox.componentInstance.message = 'Registro guardado!! :-)';;
      this.update();
  }

  
  update(): void {
   
    this.profesorService.update(this.profesor).subscribe();
    
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

}
