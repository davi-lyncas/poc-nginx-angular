import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationStart, Router } from '@angular/router';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  imports: [CommonModule, AvatarComponent],
  standalone: true
})
export class NavbarComponent implements OnInit {

  pageDescription: string = 'Início';
  showMenu = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.setPageDetails();
  
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.setPageDetails();
      }
    });
  }

  minimalize() {
    
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  private setPageDetails() {
  }

}
