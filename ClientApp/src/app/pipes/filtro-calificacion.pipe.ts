import { Pipe, PipeTransform } from '@angular/core';
import { Calificaciones } from '../models/calificaciones';

@Pipe({
  name: 'filtroCalificacion'
})
export class FiltroCalificacionPipe implements PipeTransform {

  transform(calificaciones: Calificaciones[], searchText: string) {
    if (searchText == null) return calificaciones;
    return calificaciones.filter(calificacion =>
      calificacion.cIdentificacion.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      ||
      calificacion.calificacionId.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
  
    )
}
transform2(calificaciones: Calificaciones[],searchText2: string) {
  if (searchText2 == null) return calificaciones;
  return calificaciones.filter(calificacion =>
    calificacion.calificacionId.toLowerCase().indexOf(searchText2.toLowerCase()) !== -1

  )


}

}
