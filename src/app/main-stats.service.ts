import { Injectable } from '@angular/core';
import { HiveData } from './hiveData.model';
import { Alert } from './alert.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainStatsService {

  private statList: HiveData[] = [];
  private statsUpdated = new Subject<HiveData[]>();
  private alertList: Alert[] = [];

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  getStats() {
    this._http.get<HiveData[]>('http://localhost:3000/api/stats')
      .subscribe((hiveData) => {
        this.statList = hiveData;
        this.statsUpdated.next([...this.statList]);
      });
  }

  statsUpdateListener() {
    return this.statsUpdated.asObservable();
  }

  getAlerts() {
    let date: Date;
    let content: string;
    let value: number;
    let hive: string;

    for (let i = 0; i < this.statList.length; i++) {
      date = this.statList[i].timestamp;
      hive = this.statList[i].hiveID;

      value = this.statList[i].temperature;
      if (value < 35) {
        content = 'Temperatura za niska';
        this.alertList.push({date, content, value, hive});
      } else if (this.statList[i].temperature > 35) {
        content = 'Temperatura za wysoka';
        this.alertList.push({date, content, value, hive});
      }

      value = this.statList[i].humidity;
      if (value < 40) {
        content = 'Wilogtność za niska';
        this.alertList.push({date, content, value, hive});
      } else if (this.statList[i].humidity > 40) {
        content = 'Wilgotność za wysoka';
        this.alertList.push({date, content, value, hive});
      }

      value = this.statList[i].carbonDioxide;
      if (value < 600) {
        content = 'Dwutlenek węgla za niski';
        this.alertList.push({date, content, value, hive});
      }

      value = this.statList[i].acoustics;
      if (value > 65) {
        content = 'Akustyka za wysoka';
        this.alertList.push({date, content, value, hive});
      }
    }
  }
}
