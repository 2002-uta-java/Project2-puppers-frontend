import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser$: Observable<boolean>;
  @Input() isHandset:boolean;
  @Output() menuClick:EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
    this.currentUser$ = of(true);
  }

  onMenuClick() {
    this.menuClick.emit();
  }

}
