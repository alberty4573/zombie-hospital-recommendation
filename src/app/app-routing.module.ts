import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainGradingComponent } from './pain-grading/pain-grading.component';
import { IllnessSelectionComponent } from './illness-selection/illness-selection.component';
import { HospitalSuggestionComponent } from './hospital-suggestion/hospital-suggestion.component';

const routes: Routes = [
  { path: '', redirectTo: '/illness', pathMatch: 'full' },
  { path: 'illness', component: IllnessSelectionComponent },
  { path: 'pain-grading', component: PainGradingComponent },
  { path: 'hospital-suggestion', component: HospitalSuggestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
