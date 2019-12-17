import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../../services/curso.service';
import { AuthService } from '../../../services/auth.service'
import { Curso } from 'src/app/models/curso';
@Component({
  selector: 'app-curso-estudiante',
  templateUrl: './curso-estudiante.component.html',
  styleUrls: ['./curso-estudiante.component.css']
})
export class CursoEstudianteComponent implements OnInit {
  curso:Curso[];
  searchText: string;
  constructor(private authorizeService: AuthService,private cusoService: CursoService) { }

  ngOnInit() {
    this.cusoService.get1().subscribe(result => {
      this.curso = result;
      this.searchText = this.tomaGrado();
  });

  }
  
  tomaGrado(): string {
    return this.authorizeService.getGrado();
}

userApellido(): string {
  return this.authorizeService.getApellido();
}

userNombre(): string {
return this.authorizeService.getName();
}

}
