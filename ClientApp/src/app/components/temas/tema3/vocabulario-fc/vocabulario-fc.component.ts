import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vocabulario-fc',
  templateUrl: './vocabulario-fc.component.html',
  styleUrls: ['./vocabulario-fc.component.css']
})
export class VocabularioFCComponent implements OnInit {

  public nombre;
  public numero;

  
  
  

  public openNav(nombre){
    if(nombre == "FraccionC"){
      document.getElementById("FraccionC").style.width = "1000px"
    }else if(nombre == "NumeradorC"){
      document.getElementById("NumeradorC").style.width = "1000px";
    }else{
      document.getElementById("DenominadorC").style.width = "1000px";
    }
  }
  public closeNav(nombre) {
    if(nombre == "FraccionC"){
      document.getElementById("FraccionC").style.width = "0px";
    }else if(nombre == "NumeradorC"){
      document.getElementById("NumeradorC").style.width = "0px";
    }else{
      document.getElementById("DenominadorC").style.width = "0px";
    }
  }
  ngOnInit() {
  }

}
