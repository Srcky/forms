import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelFormComponent } from './travel-form/travel-form.component';
import { AutoFormComponent } from './auto-form/auto-form.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'travel', component: TravelFormComponent },
  { path: 'auto', component: AutoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
