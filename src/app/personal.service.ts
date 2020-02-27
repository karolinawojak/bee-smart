import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  private lastVisitDate: Date = new Date(2019, 11, 17, 3, 24, 0);
  private firstVisitDate: Date = new Date(2019, 3, 5, 15, 35, 0);

  private hiveArray: Array<{id: string, date: Date}> = [
    {id: '1', date: new Date(2019, 3, 5, 15, 35, 0)},
    {id: '2', date: new Date(2019, 7, 10, 3, 24, 0)},
  ];

constructor() { }

  getVisit() {
    return {
      last: this.lastVisitDate,
      first: this.firstVisitDate,
      hives: this.hiveArray
    };
  }
}
