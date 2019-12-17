import { Pipe, PipeTransform } from '@angular/core';
import { Curso } from '../models/curso';

@Pipe({
  name: 'filtroCurso'
})
export class FiltroCursoPipe implements PipeTransform {
  transform(cursos: Curso[], searchText: string) {
    if (searchText == null) return cursos;
    return cursos.filter(curso =>
      curso.pGrado.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
}
}