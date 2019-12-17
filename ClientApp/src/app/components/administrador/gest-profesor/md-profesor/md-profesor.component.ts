import { AlertModalComponent } from 'src/app/modals/alert-modal/alert-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesorService } from '../../../../services/profesor.service';
import { Profesor } from '../../../../models/profesor';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-md-profesor',
  templateUrl: './md-profesor.component.html',
  styleUrls: ['./md-profesor.component.css']
})
export class MdProfesorComponent implements OnInit {
 profesor:Profesor;
 sprofesor:string;
  constructor(
    private route: ActivatedRoute,
    private profesorService: ProfesorService,
    private location: Location,
    private formBuilder: FormBuilder,private modalService: NgbModal,

  ) { }

  contacto: FormGroup;
  submitted = false;


  ngOnInit() {
    this.get();


    this.contacto = this.formBuilder.group({
      identificacion: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      genero: ['', Validators.required],
      FechaNacimiento: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],

  });

  }

  get(): void {
    const identificacion= +this.route.snapshot.paramMap.get('identificacion');
    this.profesorService.get3(identificacion).subscribe(hero => this.profesor = hero);
  }

 

  update(): void {
   
    this.profesorService.update(this.profesor).subscribe(() => this.goBack());
    // const messageBox = this.modalService.open(AlertModalComponent)
    // messageBox.componentInstance.title = "Resultado Operación";
    // messageBox.componentInstance.message = ('El registro fue modificado!');
  }

  delete(): void {
    this.profesorService.delete(this.profesor).subscribe(() => this.goBack());
    // const messageBox = this.modalService.open(AlertModalComponent)
    // messageBox.componentInstance.title = "Resultado Operación";
    // messageBox.componentInstance.message = ('El registro fue eliminado!');
  }

  goBack(): void {
    this.location.back();
  }


  onSubmit() {
    this.submitted = true;

    if (this.contacto.invalid) {
        return;
    }

    alert('Mensaje Enviado !')
}




}
