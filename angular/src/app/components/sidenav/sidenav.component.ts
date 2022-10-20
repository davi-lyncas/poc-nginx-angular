import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HasRoleDirective } from 'src/app/directives/roles/has-role.directive';
import { UserService } from 'src/app/services/user/user.service';
import { UserInfo } from 'src/app/types/user-types';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less'],
  imports: [CommonModule, NavbarComponent, RouterOutlet, HasRoleDirective],
  standalone: true,
})
export class SidenavComponent implements OnInit {

  user!: UserInfo;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserInfo()
      .then(user => this.user = user);
  }

  navigate(url: string) {
    this.router.navigateByUrl(url)
  }
}
