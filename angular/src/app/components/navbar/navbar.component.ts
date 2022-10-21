import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AvatarComponent } from '../avatar/avatar.component';
import { SidenavComponent } from '../sidenav/sidenav.component';

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
  showSidenav = true;

  constructor(private router: Router) { }

  ngOnInit() {
    // this.setPageDetails();
  
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // this.setPageDetails();
      }
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleSideNav() {
    this.showSidenav = !this.showSidenav;
    SidenavComponent.sidenavController(this.showSidenav);
  }
}
