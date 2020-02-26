import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppHeaderComponent } from './app-header/app-header.component';
import { HomeMainComponent } from './app-home/home-main/home-main.component';
import { AppLastComponent } from './app-home/home-last/home-last.component';
import { AppAlertsComponent } from './app-home/home-alerts/home-alerts.component';
import { AppStatsComponent } from './app-home/home-stats/home-stats.component';

import { TodayMainComponent } from './app-today/today-main/today-main.component';
import { TodayStatsComponent } from './app-today/today-stats/today-stats.component';

import { OverallMainComponent } from './app-overall/overall-main/overall-main.component';

import { AlertsMainComponent } from './app-alerts/alerts-main/alerts-main.component';
import { AlertsListComponent } from './app-alerts/alerts-list/alerts-list.component';

import { PersonalMainComponent } from './app-personal/personal-main/personal-main.component';
import { PersonalVisitComponent } from './app-personal/personal-visit/personal-visit.component';
import { PersonalCredentialsComponent } from './app-personal/personal-credentials/personal-credentials.component';
import { PersonalAddComponent } from './app-personal/personal-add/personal-add.component';

import localePl from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomeMainComponent,
    AppLastComponent,
    AppAlertsComponent,
    AppStatsComponent,
    TodayMainComponent,
    OverallMainComponent,
    AlertsMainComponent,
    AlertsListComponent,
    PersonalMainComponent,
    PersonalVisitComponent,
    PersonalCredentialsComponent,
    PersonalAddComponent,
    TodayStatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pl'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
