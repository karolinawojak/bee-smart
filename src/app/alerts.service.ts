import { Injectable } from '@angular/core';
import { Alert } from './alert.model';
import { HiveData } from './hiveData.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  private statList: HiveData[] = [];
  private alertList: Alert[] = [];
  private alertsUpdated = new Subject<Alert[]>();

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  getAlerts() {
    let date: Date;
    let month: number;
    let content: string;
    let value: number;
    let hive: string;

    this._http.get<HiveData[]>('http://localhost:3000/api/stats')
      .subscribe((hiveData) => {
        this.statList.length = 0;
        this.statList = hiveData;

        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.statList.length; i++) {
          hive = this.statList[i].hiveID;
          date = new Date(this.statList[i].timestamp);
          month = date.getMonth() + 1;

          value = this.statList[i].temperature;
          if (month >= 3 && month <= 9) {
            if (value < 35) {
              content = 'Temperatura za niska';
              this.alertList.unshift({date, content, value, hive});
            } else if (value > 35) {
              content = 'Temperatura za wysoka';
              this.alertList.unshift({date, content, value, hive});
            }
          } else {
            if (value < 25) {
              content = 'Temperatura za niska';
              this.alertList.unshift({date, content, value, hive});
            } else if (value > 25) {
              content = 'Temperatura za wysoka';
              this.alertList.unshift({date, content, value, hive});
            }
          }

          value = this.statList[i].humidity;
          if (month >= 3 && month <= 9) {
            if (value < 40) {
              content = 'Wilogtność za niska';
              this.alertList.unshift({date, content, value, hive});
            } else if (value > 40) {
              content = 'Wilgotność za wysoka';
              this.alertList.unshift({date, content, value, hive});
            }
          } else {
            if (value < 70 ) {
              content = 'Wilogtność za niska';
              this.alertList.unshift({date, content, value, hive});
            } else if (value > 70) {
              content = 'Wilgotność za wysoka';
              this.alertList.unshift({date, content, value, hive});
            }
          }

          value = this.statList[i].carbonDioxide;
          if (value < 600) {
            content = 'Dwutlenek węgla za niski';
            this.alertList.unshift({date, content, value, hive});
          }

          value = this.statList[i].acoustics;
          if (value > 65) {
            content = 'Akustyka za wysoka';
            this.alertList.unshift({date, content, value, hive});
          }
        }
        this.alertsUpdated.next([...this.alertList]);
      });
  }

  alertsUpdateListener() {
    return this.alertsUpdated.asObservable();
  }
}
