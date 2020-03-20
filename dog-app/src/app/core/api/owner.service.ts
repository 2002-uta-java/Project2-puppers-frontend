import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Owner } from '@shared/models/owner';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  baseUrl: string = "https://my-json-server.typicode.com/dhtran91/demo/owners";
  
  constructor(private http: HttpClient) { }

  getOwners():Observable<Owner[]> {
    return this.http.get<Owner[]>(this.baseUrl).pipe(
      map(arr => arr.map(u => new Owner(u)))
    );
  }

  getOwner(id: number): Observable<Owner> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Owner>(url);
  }

  createOwner(owner: any): Observable<Owner> {
    return this.http.post<Owner>(this.baseUrl, owner);
  }

  updateOwner(owner: Owner): Observable<Owner> {
    const url = `${this.baseUrl}/${owner.ownerId}`;
    return this.http.put<Owner>(url, owner);
  }

  removeOwner(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
