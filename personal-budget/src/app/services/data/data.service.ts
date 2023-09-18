import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseURL: string = 'http://localhost:3001/budget';

  constructor(private http: HttpClient) {}

  getBudget(): Observable<any> {
    return this.http.get(this.baseURL);
  }
}
