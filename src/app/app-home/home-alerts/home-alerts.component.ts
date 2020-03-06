import { Component, OnInit } from '@angular/core';
import { Alert } from '../../alert.model';
import { AlertsService } from '../../alerts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-alerts',
  templateUrl: './home-alerts.component.html',
  styleUrls: ['./home-alerts.component.scss']
})

export class AppAlertsComponent implements OnInit {

  alertList: Alert[];
  private alertsSubscription: Subscription;

  constructor(public alertsService: AlertsService) {}

  ngOnInit() {
    this.alertsService.getAlerts();
    this.alertsSubscription = this.alertsService.alertsUpdateListener()
      .subscribe((alerts: Alert[]) => {
        this.alertList = alerts;
      });
  }
}
