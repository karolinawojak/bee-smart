import { Injectable } from '@angular/core';
import { User } from './user.model';

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

  private userData: User[] = [
    { userID: 'f4wfr',
    firstVisit: new Date(2019, 3, 5, 15, 35, 0),
    lastVisit: new Date(2019, 7, 10, 3, 24, 0),
    hives: [
      { hiveID: 'g4ssxt', name: 'Ul1', firstReading: new Date(2019, 11, 18, 18, 30, 0) },
      { hiveID: '2f45us', name: 'Ul2', firstReading: new Date(2019, 7, 10, 3, 24, 0) }
    ]}
  ];

constructor() { }

  getPersonalData() {
    return this.userData;
  }
}
