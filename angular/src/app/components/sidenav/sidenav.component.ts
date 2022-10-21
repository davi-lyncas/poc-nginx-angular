import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';
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

  protected user!: UserInfo;
  protected show = true;
  private static sidenav = new Subject<boolean>();

  public static get sidenavController () {
    return (show: boolean) => this.sidenav.next(show);
  }

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserInfo()
      .then(user => this.user = user);

      SidenavComponent.sidenav.subscribe(o => this.show = o);
  }

  protected navigate(url: string) {
    this.router.navigateByUrl(url)
  }
}
