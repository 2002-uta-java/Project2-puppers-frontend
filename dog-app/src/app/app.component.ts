import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { AuthService } from '@core/services/auth.service';
import { Owner } from '@shared/models/owner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isHandset$: Observable<boolean>;
  currentOwner: Owner;
  isLoggedIn: boolean
  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService) {}

  ngOnInit():void {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    this.authService.login('hoang@revature.com', 'password').subscribe();
    
    this.authService.currentOwner$.subscribe(o => this.currentOwner = o);
  }

}