import { ActivatedRoute } from '@angular/router';

import { ProfesorService } from 'src/app/services/profesor.service'
import { Profesor } from 'src/app/models/profesor';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';
import { AlertModalComponent } from 'src/app/modals/alert-modal/alert-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profesor: Profesor;
  stask: string;
  registerForm: FormGroup;
  logear:Login;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private profesorService: ProfesorService,
    private location: Location,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private modalService: NgbModal,
    private _router: Router
  ) { }

  ngOnInit() {
    this.logear = new Login();
    this.registerForm = this.formBuilder.group({
      usuario: [this.logear.usuario,Validators.required],
      contrase: [this.logear.contrase,Validators.required]
    });
    
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.verify();
    this.navegar();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  navegar(){
    if(this.profesor.tipo=="ADMINISTRADOR"){
      this._router.navigate(['/administrador/perfil']);

    }else{
      if(this.profesor.tipo=="PROFESOR"){
        this._router.navigate(['/profesor/perfil']);
      }else{
        this._router.navigate(['/estudiante/perfil']);
      }
    }
  }

  get(): void {
    const id =
      this.route.snapshot.paramMap.get('id');
    this.profesorService.get(this.logear.usuario)
      .subscribe(hero => this.profesor = hero);
  }

  
  verify(){
    if (this.profesor.identificacion == this.logear.usuario && this.profesor.password == this.logear.contrase){
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Resultado Operación";
      messageBox.componentInstance.message = ('Bienvenido: '+this.profesor.nombres+'- Su cargo en el sistema es: '+this.profesor.tipo);
      this.login()
    }else{
      const messageBox = this.modalService.open(AlertModalComponent)
      messageBox.componentInstance.title = "Resultado Operación";
      messageBox.componentInstance.message = ('Verifique los datos de su cuenta :-)');
      
    }
  }
  

  login()
  {
      this.authService.login(this.profesor.identificacion,this.profesor.nombres,this.profesor.apellidos, this.profesor.password, this.profesor.tipo, this.profesor.grado);
  }




}
