
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as $ from 'jquery';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';




@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  //isExpanded = false;
  ngOnInit(){
 
  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  constructor(private authorizeService: AuthService,
    private _router: Router
    ) { }


  userIdentidad(): string {
      return this.authorizeService.getIdentidad();
  }

  rolUser(): string {
    return this.authorizeService.getRolUser();
  }

  nameUser(): string {
    return this.authorizeService.getName();
  }

  public isAuthenticated(): boolean
  {
      return this.authorizeService.isAuthenticated();
  }

  isAuthenticatedRole(role: string): boolean {
      if (this.isAuthenticated && role != null ) {
          return this.authorizeService.hasRole(role);
      }
  }

  logout() {
    this.authorizeService.logout();
    this._router.navigate(['/home']);
  }

}
