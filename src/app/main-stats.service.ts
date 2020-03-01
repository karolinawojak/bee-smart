import { Injectable } from '@angular/core';
import { HiveData } from './hiveData.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainStatsService {

  private statList: HiveData[] = [];
  private statsUpdated = new Subject<HiveData[]>();

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
}
