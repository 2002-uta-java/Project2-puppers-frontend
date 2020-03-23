import { Component, OnInit } from '@angular/core';

import { Breed } from '@shared/models/breed';
import { BreedService } from '@core/api/breed.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit {
  breeds$: Observable<Breed[]>;
  searchInput: string = "";

  constructor(private breedService: BreedService) { }

  ngOnInit(): void {}

  onSearch(name: string):void {
    this.breeds$ = this.breedService.getBreedsByName(name);
  }

  resetQuery():void {
    this.searchInput = "";
  }
}
