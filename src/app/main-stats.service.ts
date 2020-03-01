import { Injectable } from '@angular/core';
import { HiveData } from './hiveData.model';

@Injectable({
  providedIn: 'root'
})
export class MainStatsService {

  private statList: HiveData[] = [
    { userID: 'f4wfr',
    hiveID: 'g4ssxt',
    timestamp: new Date(2019, 11, 18, 18, 30, 0),
    temperature: 37.8,
    humidity: 70,
    acoustics: 60.1,
    carbonDioxide: 0.01},
    { userID: 'f4wfr',
    hiveID: '2f45us',
    timestamp: new Date(2019, 11, 18, 18, 30, 0),
    temperature: 37.9,
    humidity: 68,
    acoustics: 58.4,
    carbonDioxide: 0.01}
  ];

  constructor() { }

  getStats(): HiveData[] {
    return this.statList;
  }
}
