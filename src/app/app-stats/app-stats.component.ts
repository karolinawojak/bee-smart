import { Component, OnInit } from '@angular/core';
import { Hive } from '../hive';
import { Data } from '../data';

@Component({
  selector: 'app-stats',
  templateUrl: './app-stats.component.html',
  styleUrls: ['./app-stats.component.scss']
})

export class AppStatsComponent implements OnInit {
  beehives: Hive[] = [
    { name: 'Ul 1' },
    { name: 'Ul 2' }
  ];

  statistics: Data[] = [
    { date: new Date(2019, 11, 18, 18, 40, 0), temperature: 38, humidity: 70, acoustics: 60, carbonDioxide: 0.01 },
    { date: new Date(2019, 11, 18, 18, 30, 0), temperature: 38, humidity: 70, acoustics: 60, carbonDioxide: 0.01 }
  ];

  constructor() { }

  ngOnInit() { }
}
