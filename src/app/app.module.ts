import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppHeaderComponent } from './app-header/app-header.component';
import { AppMainComponent } from './app-home/app-main/app-main.component';
import { AppLastComponent } from './app-home/app-last/app-last.component';
import { AppAlertsComponent } from './app-home/app-alerts/app-alerts.component';
import { AppStatsComponent } from './app-home/app-stats/app-stats.component';

import localePl from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMainComponent,
    AppLastComponent,
    AppAlertsComponent,
    AppStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pl'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
