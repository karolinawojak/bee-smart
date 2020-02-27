import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../personal.service';

@Component({
  selector: 'app-home-last',
  templateUrl: './home-last.component.html',
  styleUrls: ['./home-last.component.scss']
})

export class AppLastComponent implements OnInit {

  lastVisitDate: Date;

  // tslint:disable-next-line: variable-name
  constructor(private _lastVisit: PersonalService) {
    this.lastVisit();
  }

  ngOnInit() {}

  lastVisit(): any {
    this.lastVisitDate = this._lastVisit.getVisit().last;

  }
}
