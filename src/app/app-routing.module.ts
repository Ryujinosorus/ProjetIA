import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ResearchComponent} from "./research/research.component";
import {PeopleComponent} from "./people/people.component";
import {PublicationComponent} from "./publication/publication.component";
import {MeetingComponent} from "./meeting/meeting.component";
import {GithubComponent} from "./github/github.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'researchs', component: ResearchComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'publications', component: PublicationComponent },
  { path: 'meetings', component: MeetingComponent },
  { path: 'github', component: GithubComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
