import { AlertModalComponent } from 'src/app/modals/alert-modal/alert-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfesorService } from '../../../../services/profesor.service';
import { Profesor } from '../../../../models/profesor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gd-estudiante',
  templateUrl: './gd-estudiante.component.html',
  styleUrls: ['./gd-estudiante.component.css']
})
export class GdEstudianteComponent implements OnInit {

 
  contacto: FormGroup;
submitted = false;
  constructor(private profesorService: ProfesorService, private formBuilder: FormBuilder,private modalService: NgbModal,
    ) { }
profesor: Profesor;



  ngOnInit() {
    this.profesor = new  Profesor();
  this.contacto = this.formBuilder.group({
    identificacion: ['', Validators.required],   
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],  
    genero: ['', Validators.required],   
    FechaNacimiento: ['', Validators.required],  
    telefono: ['', Validators.required],                                    
    correo: ['', [Validators.required, Validators.email]],
    grado:  [this.profesor.grado = "SIN-GRADO"],
    tipo: [this.profesor.tipo = "ESTUDIANTE"],
    password: [this.profesor.password = "Auditiva2019"]

    
});
  }

  add(){
    if (this.contacto.invalid) {
      return;
  }else{
    
    this.profesorService.addProfesor(this.profesor)
    .subscribe(profesor => {});
    const messageBox = this.modalService.open(AlertModalComponent)
    messageBox.componentInstance.title = "Resultado Operación";
    messageBox.componentInstance.message = ('El registro fue guardado!');
    this.OnReset();
  }
  }


  get f() { return this.contacto.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.contacto.invalid) {
          return;
      }

  }

  OnReset() {
    this.submitted = false;
    this.contacto.reset();
  }

}
