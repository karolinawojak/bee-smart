import { Injectable } from '@angular/core';
import { Alert } from './alert';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  private alertList: Alert[] = [
    { date: new Date(2019, 11, 18, 18, 43, 2), content: 'Akustyka za niska', value: 0, hive: 2 },
    { date: new Date(2019, 11, 18, 13, 55, 33), content: 'Temperatura za wysoka', value: 0, hive: 1 },
    { date: new Date(2019, 11, 16, 3, 15, 44), content: 'Temperatura za wysoka', value: 0, hive: 1 },
    { date: new Date(2019, 11, 15, 22, 10, 12), content: 'Temperatura za niska', value: 0, hive: 2 }
  ];

  constructor() { }

  getAlerts(): Alert[] {
    return this.alertList;
  }
}
