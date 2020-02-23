import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitsService {

  private lastVisitDate: Date = new Date(2019, 11, 17, 3, 24, 0);
  private firstVisitDate: Date = new Date(2019, 3, 5, 15, 35, 0);

  constructor() { }

  getVisit() {
    return [ this.lastVisitDate, this.firstVisitDate ];
  }
}
