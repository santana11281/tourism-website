import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsContainerComponent } from './components/details/details-container/details-container.component';
import { HomeContainerComponent } from './components/home/home-container/home-container.component';



export const routes: Routes = [
  { path: 'home', component: HomeContainerComponent },
  { path: 'details/:id', component: DetailsContainerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
