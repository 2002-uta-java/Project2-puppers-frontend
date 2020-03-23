import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Breed } from '@shared/models/breed';
import { take, switchMap, tap, catchError } from 'rxjs/operators';

const API_KEY = '54a07675-79fc-401d-a979-a2b41545ebd8'
const HEADER_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'x-api-key': API_KEY})
}

@Injectable({
  providedIn: 'root'
})
export class BreedService {
  apiEndPoint = 'https://api.thedogapi.com/v1/breeds';
  private _breedsSubject$: BehaviorSubject<Breed[]>;
  public readonly breeds$: Observable<Breed[]>

  constructor(private http:HttpClient) {
     this._breedsSubject$ = new BehaviorSubject([]);
    this.breeds$ = this._breedsSubject$.asObservable();
  }


  getBreeds():Observable<Breed[]> {
    return this.http.get<Breed[]>(this.apiEndPoint, HEADER_OPTIONS).pipe(
      switchMap(data => {
        this._breedsSubject$.next(data);
        return this.breeds$;
    }))
  }

  getBreedsByName(name: string):Observable<Breed[]> {
    const url = this.apiEndPoint + `/search?q=${name}`
    
    return this.http.get<Breed[]>(url, HEADER_OPTIONS).pipe(
      tap(data => console.log(`Getting breeds by name: ${name}`)),
      catchError(this.handleError<Breed[]>('GetBreedsByName')));
  }

    // Handle Error Method
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        return of(result);
      };
    }
}
