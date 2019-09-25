import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelFormComponent } from './travel-form/travel-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AutoFormComponent } from './auto-form/auto-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelFormComponent,
    AutoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
