import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Hive } from './hive.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  private userData: User[] = [];
  private personalStatsUpdated = new Subject<User[]>();

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  getPersonalData() {
    this._http.get<User[]>('http://localhost:3000/api/personal')
      .subscribe((personalData) => {
        this.userData = personalData;
        this.personalStatsUpdated.next([...this.userData]);
      });
  }

  personalStatsUpdateListener() {
    return this.personalStatsUpdated.asObservable();
  }
}
