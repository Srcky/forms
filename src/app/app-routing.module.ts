import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelFormComponent } from './travel-form/travel-form.component';


const routes: Routes = [
  { path: 'form', component: TravelFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
