import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-classic-app',
  templateUrl: './classic-app.component.html',
  styleUrls: ['./classic-app.component.less'],
  standalone: true
})
export class ClassicAppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    location.href = `${environment.classic_app}${this.router.url}`;
  }
}
