import { Component, Input, OnInit } from '@angular/core';

import { FilmsService } from '../services/films.service';
import { Films, ObjectFilms } from '../entity/films';
import { Person } from 'src/app/people/entity/person';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  @Input() films: string | undefined;
  listUrls: string[] | undefined;

  titles: string[] = [];

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    if(this.films != undefined){
      this.listUrls = this.films.split(',');
      this.listFilmsByPerson(this.listUrls)
    }
  }

  listFilmsByPerson(listUrls: string[]){
    listUrls.forEach((urlFilm) => {
      this.filmsService.listFilmsByPerson(urlFilm).subscribe(
        (title: string) => {
          this.titles.push(title);
        } );
    });
  }
  
}


