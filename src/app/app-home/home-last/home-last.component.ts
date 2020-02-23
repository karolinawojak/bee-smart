import { Component, OnInit } from '@angular/core';
import { VisitsService } from '../../visits.service';

@Component({
  selector: 'app-home-last',
  templateUrl: './home-last.component.html',
  styleUrls: ['./home-last.component.scss']
})

export class AppLastComponent implements OnInit {

  lastVisitDate: Date;

  // tslint:disable-next-line: variable-name
  constructor(private _lastVisit: VisitsService) {
    this.lastVisit();
  }

  ngOnInit() {}

  lastVisit(): any {
    this.lastVisitDate = this._lastVisit.getLastVisit()[0];

  }
}
