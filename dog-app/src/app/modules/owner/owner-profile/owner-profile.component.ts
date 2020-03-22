import { Component, OnInit } from '@angular/core';
import { DogService } from '@core/api/dog.service';
import { AuthService } from '@core/services/auth.service';
import { Owner } from '@shared/models/owner';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-owner-profile',
  templateUrl: './owner-profile.component.html',
  styleUrls: ['./owner-profile.component.css']
})
export class OwnerProfileComponent implements OnInit {
  owner$: Observable<Owner>;
  owner: Owner;

  constructor(private authService: AuthService, private dogService: DogService) { }

  ngOnInit(): void {
    this.owner$ = this.authService.currentOwner$
  }

}
