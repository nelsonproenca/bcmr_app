import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionsComponent } from './questions/questions.component';
import { StartComponent } from './start/start.component';
import { AdditionalDataComponent } from './additional-data/additional-data.component';
import { BackComponent } from './back/back.component';
import { SummaryComponent } from './summary/summary.component';
import { SplashComponent } from './splash/splash.component';

const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: 'splash', component: SplashComponent },
  { path: 'start', component: StartComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'additional-data', component: AdditionalDataComponent },
  { path: 'back', component: BackComponent },
  { path: 'summary', component: SummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
