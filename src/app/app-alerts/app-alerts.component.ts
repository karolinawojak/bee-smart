import { Component, OnInit } from '@angular/core';
import { Alert } from '../alert';

@Component({
  selector: 'app-alerts',
  templateUrl: './app-alerts.component.html',
  styleUrls: ['./app-alerts.component.scss']
})

export class AppAlertsComponent implements OnInit {
  alerts: Alert[] = [
    { date: new Date(2019, 11, 18, 18, 43, 2), content: 'Akustyka za niska', value: 0 },
    { date: new Date(2019, 11, 18, 13, 55, 33), content: 'Temperatura za wysoka', value: 0 },
    { date: new Date(2019, 11, 16, 3, 15, 44), content: 'Temperatura za wysoka', value: 0 },
    { date: new Date(2019, 11, 15, 22, 10, 12), content: 'Temperatura za niska', value: 0 }
  ];

   constructor() { }

  ngOnInit() { }
}
