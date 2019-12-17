import { Pipe, PipeTransform } from '@angular/core';
import { Profesor } from '../models/profesor';

@Pipe({
  name: 'filtroProfesor'
})
export class FiltroProfesorPipe implements PipeTransform {
  transform(profesores: Profesor[], searchText: string) {
    if (searchText == null) return profesores;
    return profesores.filter(profesor =>
      profesor.tipo.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
  
    );
}
}
