import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalificacionesService } from '../../../services/calificaciones.service';
import { Calificaciones } from '../../../models/calificaciones';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-cons-calificaciones',
  templateUrl: './cons-calificaciones.component.html',
  styleUrls: ['./cons-calificaciones.component.css']
})
export class ConsCalificacionesComponent implements OnInit {
  calificacion:Calificaciones[];
  searchText: string;

  
  @Output() seleccionado = new EventEmitter<Calificaciones>();

    constructor(private authorizeService: AuthService,private calificacionService: CalificacionesService) { }
  
    ngOnInit() {

      this.calificacionService.get1().subscribe(result => {
        this.calificacion = result;
        this.searchText = this.userIdentidad();
    });

 
    }
  
  userIdentidad(): string {
      return this.authorizeService.getIdentidad();
  }

  userApellido(): string {
    return this.authorizeService.getApellido();
}

userNombre(): string {
  return this.authorizeService.getName();
}
  
}
