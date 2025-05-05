import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from './Serie'
import { environment } from '../../enviroments/enviroment.development';

@Injectable({
  providedIn: 'root'
})
export class SerieListService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  getSeriesList(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl);

  }
}
