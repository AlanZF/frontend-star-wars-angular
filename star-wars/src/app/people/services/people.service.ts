import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { ObjectPeople, Person } from '../entity/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private readonly apiUrl = 'https://swapi.dev/api/people/';

  constructor(private http: HttpClient) { }

  public listAllPeople(): Observable<Person[]> {
    return this.http.get<ObjectPeople>(this.apiUrl)
      .pipe(map((res: ObjectPeople) => res.results))
  }

}