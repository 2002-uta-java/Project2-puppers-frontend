import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Owner } from '@shared/models/owner';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

// Server endpoints for Owner
// const getOwnerById = "http://ec2-52-15-186-205.us-east-2.compute.amazonaws.com:8090/puppers/owners";
// const ownersGetAll = "http://ec2-52-15-186-205.us-east-2.compute.amazonaws.com:8090/puppers/owners";
// const ownerCreate = "http://ec2-52-15-186-205.us-east-2.compute.amazonaws.com:8090/puppers/owners/new";
// const ownerUpdate = "http://ec2-52-15-186-205.us-east-2.compute.amazonaws.com:8090/puppers/owners/update";
// const ownerDelete = "http://ec2-52-15-186-205.us-east-2.compute.amazonaws.com:8090/puppers/owners";

const HTTP_OPTIONS = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  // apiEndPoint: string = "https://my-json-server.typicode.com/dhtran91/demo/owners";
  apiEndPoint: string = "http://ec2-52-15-186-205.us-east-2.compute.amazonaws.com:8090/puppers/owners";
  constructor(private http: HttpClient) { }

  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.apiEndPoint).pipe(
      map(arr => arr.map(u => new Owner(u))),
      tap(owners => console.log('fetched owners')),
      catchError(this.handleError('getOwners', []))
    );
  }

  getOwnerById(id: number): Observable<Owner> {
    const url = `${this.apiEndPoint}/${id}`;

    return this.http.get<Owner>(url).pipe(
      map(o => new Owner(o)),
      tap(_ => console.log(`fetched owner id=${id}`)),
      catchError(this.handleError<Owner>(`getOwnerById id=${id}`, null))
    );
  }

  createOwner(owner: any): Observable<Owner> {
    const url = `${this.apiEndPoint}/new`

    return this.http.post<Owner>(url, owner, HTTP_OPTIONS).pipe(
      tap((o: Owner) => console.log(`added owner w/ id=${o.id}`)),
      catchError(this.handleError<Owner>('addOwner'))
    );
  }

  updateOwner(owner: Owner): Observable<Owner> {
    const url = `${this.apiEndPoint}/update`;

    return this.http.put<Owner>(url, owner, HTTP_OPTIONS).pipe(
      tap((o: Owner) => console.log(`updated owner w/ id=${o.id}`)),
        catchError(this.handleError<any>('updateOwner'))
    )
  }

  removeOwner(id: number): Observable<any> {
    const url = `${this.apiEndPoint}/delete`
    return this.http.delete(this.apiEndPoint, HTTP_OPTIONS).pipe(
      tap(_ => console.log(`deleted owner id=${id}`)),
      catchError(this.handleError<Owner>('deleteOwner'))
    );
  }

  // Handle Error Method
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result);
    };
  }
}
