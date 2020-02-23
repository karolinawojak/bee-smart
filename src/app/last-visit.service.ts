import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LastVisitService {

  private lastVisitDate: Date = new Date(2019, 11, 17, 3, 24, 0);

  constructor() { }

  getLastVisit() {
    return this.lastVisitDate;
  }
}
