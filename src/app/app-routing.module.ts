import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeMainComponent } from './app-home/home-main/home-main.component';
import { TodayMainComponent } from './app-today/today-main/today-main.component';
import { OverallMainComponent } from './app-overall/overall-main/overall-main.component';
import { AlertsMainComponent } from './app-alerts/alerts-main/alerts-main.component';
import { PersonalMainComponent } from './app-personal/personal-main/personal-main.component';

const routes: Routes = [
  { path: '', component:  HomeMainComponent },
  { path: 'today', component:  TodayMainComponent },
  { path: 'overall', component:  OverallMainComponent },
  { path: 'alerts', component:  AlertsMainComponent },
  { path: 'personal', component:  PersonalMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
