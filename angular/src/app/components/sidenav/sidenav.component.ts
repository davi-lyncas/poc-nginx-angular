import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HasRoleDirective } from 'src/app/directives/roles/has-role.directive';
import { UserService } from 'src/app/services/user/user.service';
import { UserInfo } from 'src/app/types/user-types';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less'],
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterOutlet, HasRoleDirective]
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
      .then(success => {
        if (!success) location.href = environment.classic_app + '/' + url;
      })
      .catch(_=> location.href = environment.classic_app + '/' + url);
  }

}
