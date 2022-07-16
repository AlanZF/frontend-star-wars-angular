import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';

import { PeopleService } from './people/services/people.service';
import { FilmsService } from './films/services/films.service';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/components/people.component';
import { FilmsComponent } from './films/components/films.component';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    FilmsComponent,
    BootstrapModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [
    PeopleService,
    FilmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
