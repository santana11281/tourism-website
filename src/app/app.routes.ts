import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsContainerComponent } from './components/details/details-container/details-container.component';
import { HomeContainerComponent } from './components/home/home-container/home-container.component';
import { RouteComponent } from './components/details/route/route.component';
import { GalleryComponent } from './components/details/gallery/gallery.component';
import { RatingComponent } from './components/details/rating/rating.component';
import { InfoDetailsComponent } from './components/details/info-details/info-details.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { DestinosComponent } from './components/destinos/destinos.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeContainerComponent,
    children: [
      { path: 'recientes', component: HomeContainerComponent },
      { path: 'populares', component: HomeContainerComponent },
      { path: 'tendencia', component: HomeContainerComponent },
      { path: '', redirectTo: 'recientes', pathMatch: 'full' }
    ]
  },
  {
    path: 'details',
    component: DetailsContainerComponent,
    children: [
      { path: 'info/:id', component: InfoDetailsComponent },
      { path: 'route/:id', component: RouteComponent },
      { path: 'gallery/:id', component: GalleryComponent },
      { path: 'rating/:id', component: RatingComponent },
      { path: '', redirectTo: 'info', pathMatch: 'full' }
    ]
  },
  { path: 'about', component: AboutUsComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'experiencias', component: ExperiencesComponent },
  { path: 'destinos', component: DestinosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
