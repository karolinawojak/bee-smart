import { Component, OnInit } from '@angular/core';
import { Alert } from '../../alert.model';
import { AlertsService } from '../../alerts.service';

@Component({
  selector: 'app-home-alerts',
  templateUrl: './home-alerts.component.html',
  styleUrls: ['./home-alerts.component.scss']
})

export class AppAlertsComponent implements OnInit {

  alertList: Alert[];

  // tslint:disable-next-line: variable-name
  constructor(private _alerts: AlertsService) {
    this.alerts();
  }

  ngOnInit() { }

  alerts(): any {
    this.alertList = this._alerts.getAlerts();
  }
}
