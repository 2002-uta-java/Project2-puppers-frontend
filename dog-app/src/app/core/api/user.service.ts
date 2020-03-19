import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@shared/models/user';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "https://my-json-server.typicode.com/dhtran91/demo/users";
  
  constructor(private http: HttpClient) { }

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl).pipe(
      map(arr => arr.map(u => new User(u)))
    );
  }

  getUser(id: number): Observable<User> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<User>(url);
  }

  createUser(user: any): Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.baseUrl}/${user.id}`;
    return this.http.put<User>(url, user);
  }

  removeUser(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}    
