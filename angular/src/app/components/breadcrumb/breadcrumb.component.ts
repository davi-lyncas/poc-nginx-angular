import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';
import { Router } from 'src/app/services/routing/router.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less'],
  imports: [CommonModule],
  standalone: true
})
export class BreadcrumbComponent implements OnInit, OnDestroy {

  private navSubs!: Subscription;
  crumbs: string[] = [];
  crumbPath: Record<string, string[]> = {};

  constructor(private router: Router) { }

  ngOnInit() {
    this.navSubs = this.router.events.subscribe(event => {
      const assert = event instanceof NavigationStart;
      if (!assert) return;

      const path = event.url.replace(/(.*)(\?.*)/, '$1');
      const crumbs = path.split('/')
        .filter(c => c != '' && c != '#')
        .map(c => formatCase(c));

      crumbs.forEach(crumb => {
        this.crumbPath[crumb] = allBeforeIncluding(crumbs, crumb);
      });

      this.crumbs = crumbs;
    });
  }

  navigate(crumb: string) {
    const path = this.crumbPath[crumb];
    this.router.navigate(path);
  }

  ngOnDestroy() {
    this.navSubs.unsubscribe();
  }
}

function formatCase(string: string) {
  let transformed = string.replaceAll('#', '');
  transformed = transformed.replaceAll(/\d{1,}/g, '');
  transformed = transformed.replaceAll(/\/{1,}/g, '/');
  transformed = transformed.toLowerCase();
  transformed = transformed[0].toUpperCase() + transformed.substring(1);

  return transformed;
}

function allBeforeIncluding(array: string[], string: string) {
  return array.slice(0, array.indexOf(string)+1);
}
