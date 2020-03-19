import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dog } from '@shared/models/dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  baseUrl: string = "https://my-json-server.typicode.com/dhtran91/demo/dogs";
  
  constructor(private http: HttpClient) { }

  getDogs():Observable<[Dog]> {
    return this.http.get<[Dog]>(this.baseUrl);
  }

  getDog(id: number):Observable<Dog> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Dog>(url);
  }

  createDog(dog: any):Observable<Dog> {
    return this.http.post<Dog>(this.baseUrl, dog);
  }

  updateDog(dog: Dog):Observable<Dog> {
    const url = `${this.baseUrl}/${dog.id}`;
    return this.http.put<Dog>(url, dog);
  }

  removeDog(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
