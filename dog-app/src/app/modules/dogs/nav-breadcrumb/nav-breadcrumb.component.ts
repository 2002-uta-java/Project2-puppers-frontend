import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationStart } from '@angular/router';
import { switchMap, tap, filter } from 'rxjs/operators';
import { Observable, BehaviorSubject, of } from 'rxjs';

@Component({
  selector: 'app-nav-breadcrumb',
  templateUrl: './nav-breadcrumb.component.html',
  styleUrls: ['./nav-breadcrumb.component.css']
})
export class NavBreadcrumbComponent implements OnInit {
  breadcrumbs$: Observable<string[]> = of([]);
  constructor(private activatedRoute:ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    const url = this.route.url.substring(1).split('/');

    this.handleUrl(url);

    this.route.events.pipe(
      filter(e => e instanceof NavigationStart)
      ).subscribe((event: NavigationStart) => {
        const newUrl = event.url.substring(1).split('/');
        this.handleUrl(newUrl);
      }
    )
  }

  handleUrl(urlArr: string[]): void {
    if(urlArr.length > 1) {
      this.breadcrumbs$ = of(urlArr.slice(1))
    } else {
      this.breadcrumbs$ = of([])
    }
  }
}
