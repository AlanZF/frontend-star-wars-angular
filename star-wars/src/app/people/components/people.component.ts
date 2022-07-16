import { Component, OnInit } from '@angular/core';

import { Person } from '../entity/person';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: Person[] = [];
  link: string = 'https://swapi.dev/api';

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.listAllPeople();
  }

  listAllPeople() {
    this.peopleService.listAllPeople()
      .subscribe(people => this.people = people);
  }
}
