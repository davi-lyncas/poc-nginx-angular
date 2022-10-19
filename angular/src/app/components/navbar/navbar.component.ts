import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
  standalone: true
})
export class NavbarComponent implements OnInit {

  pageDescription: string = 'Início';

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

  private setPageDetails() {
  }

}
