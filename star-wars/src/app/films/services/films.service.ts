import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

import { ObjectFilms, Films } from '../entity/films';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private readonly format = '?format=json';

  constructor(private http: HttpClient) {}

  public listFilmsByPerson(url: string): Observable<string> {
    return this.http.get<Films>(url + this.format)
      .pipe(map((resp: Films) => resp.title));
  }

}
