import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap, first, map, switchMap } from 'rxjs/operators';
import { HttpResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Owner } from '@shared/models/owner';
import { Router } from '@angular/router';

// Server endpoints for login
// const ownerLogin = "http://ec2-52-15-186-205.us-east-2.compute.amazonaws.com:8090/puppers/owners/login";

const HTTP_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentOwnerSubject: BehaviorSubject<Owner> = new BehaviorSubject<Owner>(null);
  currentOwner$: Observable<Owner> = this._currentOwnerSubject.asObservable();
  constructor(private http: HttpClient, private route: Router) { }

  isLoggedIn(): boolean {
    return this._currentOwnerSubject.value !== null;
  }

  login(email: string, password: string) {
    const url = `http://ec2-52-15-186-205.us-east-2.compute.amazonaws.com:8090/puppers/owners/login/${email}/${password}`
    
    return this.http.post<any>(url, HTTP_OPTIONS).pipe(
      switchMap((owner: Owner) => {
        const currentOwner = new Owner(owner);
        console.log(`login w/ id=${currentOwner.id}`)
        this._currentOwnerSubject.next(currentOwner);
        return this.currentOwner$;
      }),
      catchError(this.handleError<Owner>('ownerLogin', null))
    )
  }

  logout(): void {
    sessionStorage.removeItem("token");
    this._currentOwnerSubject.next(null)
    this.route.navigate(['/login']);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result);
    };
  }
}