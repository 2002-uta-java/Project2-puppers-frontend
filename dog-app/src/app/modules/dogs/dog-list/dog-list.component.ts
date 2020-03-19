import { Component, OnInit } from '@angular/core';
import { DogService } from '@core/api/dog.service';
import { Observable } from 'rxjs';
import { Dog } from '@shared/models/dog';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  cards$: Observable<any> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    switchMap(({ matches }) => {
      if (matches) {
        return [
          { rowHeight: '1:5',cols: 4, rows: 1 },
        ];
      }

      return [
        { rowHeight: '1:1.4',cols: 1, rows: 1 },
      ];
    })
  );

  dogs$: Observable<Dog[]>

  constructor(private dogService: DogService, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.dogs$ = this.dogService.getDogs();
  }

}
