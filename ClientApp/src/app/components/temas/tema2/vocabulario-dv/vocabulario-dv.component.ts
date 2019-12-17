import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vocabulario-dv',
  templateUrl: './vocabulario-dv.component.html',
  styleUrls: ['./vocabulario-dv.component.css']
})
export class VocabularioDVComponent implements OnInit {

  public nombre;
  public numero;

  public openNav(nombre) {
    if (nombre == "DivisionC") {
      document.getElementById("DivisionC").style.width = "1000px"
    } else if (nombre == "DividiendoC") {
      document.getElementById("DividiendoC").style.width = "1000px";
    } else if (nombre == "DivisorC") {
      document.getElementById("DivisorC").style.width = "1000px";
    } else if (nombre == "CocienteC"){
      document.getElementById("CocienteC").style.width = "1000px";
    }else{
      document.getElementById("RestoC").style.width = "1000px";
    }
    
    
  }
  public closeNav(nombre) {
    if (nombre == "DivisionC") {
      document.getElementById("DivisionC").style.width = "0px"
    } else if (nombre == "DividiendoC") {
      document.getElementById("DividiendoC").style.width = "0px";
    } else if (nombre == "DivisorC") {
      document.getElementById("DivisorC").style.width = "0px";
    } else if (nombre == "CocienteC"){
      document.getElementById("CocienteC").style.width = "0px";
    }else{
      document.getElementById("RestoC").style.width = "0px";
    }
  }
  ngOnInit() {
  }

}
