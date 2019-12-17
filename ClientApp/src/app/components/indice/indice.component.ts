import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent implements OnInit {
  public nombre;
  public numero;
 public close(nombre) {
    if(nombre=="Cerrar"){
      document.getElementById("Cerrar").style.height = "0%";
    }
  }

  ngOnInit() {
  }

}
