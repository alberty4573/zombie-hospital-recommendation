import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IllnessSelectionComponent } from './illness-selection/illness-selection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


import { PainGradingComponent } from './pain-grading/pain-grading.component';
import { HospitalSuggestionComponent } from './hospital-suggestion/hospital-suggestion.component';



@NgModule({
  declarations: [
    AppComponent,
    IllnessSelectionComponent,
    PainGradingComponent,
    HospitalSuggestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
