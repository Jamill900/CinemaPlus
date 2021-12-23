import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent},
  { path: 'movie-list', component: MovieListComponent},
  { path: 'campaigns', component: CampaignsComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'movie/:id', component: MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
