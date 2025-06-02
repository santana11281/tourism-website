import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsContainerComponent } from './components/details/details-container/details-container.component';
import { HomeContainerComponent } from './components/home/home-container/home-container.component';
import { RouteComponent } from './components/details/route/route.component';
import { GalleryComponent } from './components/details/gallery/gallery.component';
import { RatingComponent } from './components/details/rating/rating.component';
import { InfoDetailsComponent } from './components/details/info-details/info-details.component';

export const routes: Routes = [
  { path: 'home', component: HomeContainerComponent },
  {
    path: 'details/:id',
    component: DetailsContainerComponent,
    children: [
      { path: 'info', component: InfoDetailsComponent },
      { path: 'route', component: RouteComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'rating', component: RatingComponent },
      { path: '', redirectTo: 'info', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
