import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-lateral',
  templateUrl: './nav-lateral.component.html',
  styleUrls: ['./nav-lateral.component.css']
})
export class NavLateralComponent implements OnInit {

  public nombre;
  public numero;

  public openNav(nombre){
    if(nombre=="IndiceC"){
      document.getElementById("IndiceC").style.height = "100%";
    }    
  }
  public closeNav(nombre) {
    if(nombre=="IndiceC"){
      document.getElementById("IndiceC").style.height = "0%";
    }
  }

  ngOnInit() {
  }

}
