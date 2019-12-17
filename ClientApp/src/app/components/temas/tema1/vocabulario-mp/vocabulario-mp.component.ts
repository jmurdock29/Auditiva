import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vocabulario-mp',
  templateUrl: './vocabulario-mp.component.html',
  styleUrls: ['./vocabulario-mp.component.css']
})
export class VocabularioMPComponent implements OnInit {

  public nombre;
  public numero;

  public openNav(nombre){
    if(nombre == "MultiplicacionC"){
      document.getElementById("MultiplicacionC").style.width = "1000px"
    }else if(nombre == "ProductoC"){
      document.getElementById("ProductoC").style.width = "1000px";
    }else{
      document.getElementById("FactoresC").style.width = "1000px";
    }
  }
  public closeNav(nombre) {
    if(nombre == "MultiplicacionC"){
      document.getElementById("MultiplicacionC").style.width = "0px";
    }else if(nombre == "ProductoC"){
      document.getElementById("ProductoC").style.width = "0px";
    }else{
      document.getElementById("FactoresC").style.width = "0px";
    }
  }
  ngOnInit() {
  }

}
