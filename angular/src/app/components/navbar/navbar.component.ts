import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AvatarComponent } from '../avatar/avatar.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  imports: [CommonModule, AvatarComponent, BreadcrumbComponent],
  standalone: true
})
export class NavbarComponent implements OnInit {

  showMenu = false;
  showSidenav = true;

  constructor() { }

  ngOnInit() { }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleSideNav() {
    this.showSidenav = !this.showSidenav;
    SidenavComponent.visible = this.showSidenav;
  }
}
