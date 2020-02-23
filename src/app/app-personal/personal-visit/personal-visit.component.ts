import { Component, OnInit } from '@angular/core';
import { VisitsService } from '../../visits.service';

@Component({
  selector: 'app-personal-visit',
  templateUrl: './personal-visit.component.html',
  styleUrls: ['./personal-visit.component.scss']
})

export class PersonalVisitComponent implements OnInit {

  firstVisitDate: Date;

  // tslint:disable-next-line: variable-name
  constructor(private _firstVisit: VisitsService) {
    this.firstVisit();
  }

  ngOnInit() {}

  firstVisit(): any {
    this.firstVisitDate = this._firstVisit.getVisit()[1];

  }
}
