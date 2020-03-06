import { Component, OnInit } from '@angular/core';
import { Alert } from '../../alert.model';
import { AlertsService } from '../../alerts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alerts-list',
  templateUrl: './alerts-list.component.html',
  styleUrls: ['../../app-home/home-alerts/home-alerts.component.scss']
})

export class AlertsListComponent implements OnInit {

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
