import { Injectable } from '@angular/core';
import { HiveData } from './hiveData.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartMonthService {

  private statList: HiveData[] = [];
  private statListUpdated = new Subject<HiveData[]>();

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  getMonthlyData() {
    this._http.get<HiveData[]>('http://localhost:3000/api/monthly-stats')
      .subscribe((hiveData) => {
        this.statList = hiveData;
        this.statListUpdated.next([...this.statList]);
      });
  }

  monthlyStatsUpdateListener() {
    return this.statListUpdated.asObservable();
  }
}
