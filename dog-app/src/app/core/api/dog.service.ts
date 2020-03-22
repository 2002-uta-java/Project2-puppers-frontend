import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Dog } from '@shared/models/dog';
import { tap, catchError } from 'rxjs/operators';

// Server endpoints for Dog
// const getDogById = "http://ec2-52-15-186-205.us-east-2.compute.amazonaws.com:8090/puppers/dogs";
// const dogsGetAll = "http://ec2-52-15-186-205.us-east-2.compute.amazonaws.com:8090/puppers/dogs";
// const dogCreate = "http://ec2-52-15-186-205.us-east-2.compute.amazonaws.com:8090/puppers/dogs/new";
// const dogUpdate = "http://ec2-52-15-186-205.us-east-2.compute.amazonaws.com:8090/puppers/dogs/update";
// const dogDelete = "http://ec2-52-15-186-205.us-east-2.compute.amazonaws.com:8090/puppers/dogs/delete";
// 
const HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DogService {
  // apiEndPoint: string = "https://my-json-server.typicode.com/dhtran91/demo/dogs";
  apiEndPoint: string = "http://ec2-52-15-186-205.us-east-2.compute.amazonaws.com:8090/puppers/dogs";

  constructor(private http: HttpClient) { }

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.apiEndPoint).pipe(
      tap(dogs => console.log('fetched dogs')),
      catchError(this.handleError<Dog[]>('getDogs', []))
    )
  }

  getDogById(id: number): Observable<Dog> {
    const url = `${this.apiEndPoint}/${id}`;

    return this.http.get<Dog>(url).pipe(
      tap(_ => console.log(`fetched dog id=${id}`)),
      catchError(this.handleError<Dog>(`getDogById id=${id}`, null))
    );
  }

  // getDogsByOwnerId(id: number): Observable<Dog[]> {
  //   console.log(id);
  //   const url = `${this.apiEndPoint}/owners/${id}/dogs`;

  //   return this.http.get<Dog[]>(url).pipe(
  //     tap(_ => console.log(`fetched dogs by owner id=${id}`)),
  //     catchError(this.handleError<Dog[]>(`getDogsByOwnerId id=${id}`, []))
  //   );
  // }

  createDog(dog: any): Observable<Dog> {
    const url = `${this.apiEndPoint}/new`;

    return this.http.post<Dog>(url, dog, HTTP_OPTIONS).pipe(
      tap((d: Dog) => console.log(`added dog w/ id=${d.id}`)),
      catchError(this.handleError<Dog>('addDog'))
    );
  }

  updateDog(dog: Dog): Observable<Dog> {
    const url = `${this.apiEndPoint}/update`;

    return this.http.put<Dog>(url, dog, HTTP_OPTIONS).pipe(
      tap((d: Dog) => console.log(`updated owner w/ id=${d.id}`)),
      catchError(this.handleError<any>('updateDog'))
    )
  }

  removeDog(id: number): Observable<any> {
    const url = `${this.apiEndPoint}/delete`;

    return this.http.delete(url, HTTP_OPTIONS).pipe(
      tap(_ => console.log(`deleted dog id=${id}`)),
      catchError(this.handleError<Dog>('deleteDog'))
    )
  }

  // Handle Error Method
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result);
    };
  }
}