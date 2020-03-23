import { Component, OnInit } from '@angular/core';
import { DogService } from '@core/api/dog.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Dog } from '@shared/models/dog';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-dog-profile',
  templateUrl: './dog-profile.component.html',
  styleUrls: ['./dog-profile.component.css']
})
export class DogProfileComponent implements OnInit {
  dog$: Observable<Dog>;
  constructor(private dogService: DogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dog$ = this.route.paramMap.pipe(switchMap
      (data => {
        const id = +data.get('id');
          return  this.dogService.getDogById(id)
        }));
  }

}
