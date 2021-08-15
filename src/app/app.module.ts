import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { reducer } from 'reducer/reducer';

import { StartComponent } from './start/start.component';
import { QuestionsComponent } from './questions/questions.component';
import { AdditionalDataComponent } from './additional-data/additional-data.component';
import { BackComponent } from './back/back.component';
import { SummaryComponent } from './summary/summary.component';
import { CriticalityLevelComponent } from './criticality-level/criticality-level.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    QuestionsComponent,
    AdditionalDataComponent,
    BackComponent,
    SummaryComponent,
    CriticalityLevelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ myReducer: reducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
