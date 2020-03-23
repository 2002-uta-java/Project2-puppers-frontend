import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from '@core/services/auth.service';
import { Owner } from '@shared/models/owner';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentOwner$: Observable<Owner>;
  @Input() isHandset:boolean;
  @Output() menuClick:EventEmitter<any> = new EventEmitter();
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.currentOwner$ = this.authService.currentOwner$;
  }

  onMenuClick() {
    this.menuClick.emit();
  }

  onLogout() {
    this.authService.logout();
  }

}
