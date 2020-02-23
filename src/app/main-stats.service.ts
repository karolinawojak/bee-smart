import { Injectable } from '@angular/core';
import { Hive } from './hive';

@Injectable({
  providedIn: 'root'
})
export class MainStatsService {

  private statList: Hive[] = [
    { name: 'Ul 1',
    data:  { date: new Date(2019, 11, 18, 18, 30, 0), temperature: 37.8, humidity: 70, acoustics: 60.1, carbonDioxide: 0.01 }},
    { name: 'Ul 2',
    data:  { date: new Date(2019, 11, 18, 18, 30, 0), temperature: 38, humidity: 69.9, acoustics: 60.2, carbonDioxide: 0.01 }}
  ];

  constructor() { }

  getStats(): Hive[] {
    return this.statList;
  }
}
