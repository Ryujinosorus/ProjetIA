import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { PeopleComponent } from './people/people.component';
import { PublicationComponent } from './publication/publication.component';
import { MeetingComponent } from './meeting/meeting.component';
import { GithubComponent } from './github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResearchComponent,
    PeopleComponent,
    PublicationComponent,
    MeetingComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
