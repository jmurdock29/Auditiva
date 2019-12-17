

import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../services/curso.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Curso } from '../../models/curso'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {


  curso: Curso;
  scurso:string;
  registerForm: FormGroup;
  submitted = false;
  
constructor(private route: ActivatedRoute,
    private cursoService: CursoService,
    private formBuilder: FormBuilder,
    private location: Location,
   ) { }


ngOnInit() {
  this.get();  

  this.registerForm = this.formBuilder.group({
    pGrado: ['', Validators.required],           
  });
}



  get(): void {
    const cursoId= +this.route.snapshot.paramMap.get('cursoId');
    this.cursoService.get3(cursoId).subscribe(hero => this.curso = hero);
  }

 

  update(): void {
    this.cursoService.update(this.curso).subscribe(() => this.goBack());
    
  }

  delete(): void {
    this.cursoService.delete(this.curso).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }


  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
        return;
    }

}



}

