import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelFormComponent } from './travel-form/travel-form.component';
import { AutoFormComponent } from './auto-form/auto-form.component';


const routes: Routes = [
  { path: 'travel', component: TravelFormComponent },
  { path: 'auto', component: AutoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
