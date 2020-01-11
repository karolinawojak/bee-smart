import { Component, OnInit } from '@angular/core';
import { Hive } from '../../hive';

@Component({
  selector: 'app-stats',
  templateUrl: './app-stats.component.html',
  styleUrls: ['./app-stats.component.scss']
})

export class AppStatsComponent implements OnInit {
  beehives: Hive[] = [
    { name: 'Ul 1',
    data:  { date: new Date(2019, 11, 18, 18, 30, 0), temperature: 37.8, humidity: 70, acoustics: 60.1, carbonDioxide: 0.01 }},
    { name: 'Ul 2',
    data:  { date: new Date(2019, 11, 18, 18, 30, 0), temperature: 38, humidity: 69.9, acoustics: 60.2, carbonDioxide: 0.01 }}
  ];

  constructor() { }

  ngOnInit() { }
}
