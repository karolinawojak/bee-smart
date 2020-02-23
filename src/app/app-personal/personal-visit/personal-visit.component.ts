import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../personal.service';

@Component({
  selector: 'app-personal-visit',
  templateUrl: './personal-visit.component.html',
  styleUrls: ['../personal-main/personal-main.component.scss']
})

export class PersonalVisitComponent implements OnInit {

  firstVisitDate: Date;

  // tslint:disable-next-line: variable-name
  constructor(private _firstVisit: PersonalService) {
    this.firstVisit();
  }

  ngOnInit() {}

  firstVisit(): any {
    this.firstVisitDate = this._firstVisit.getVisit()[1];

  }
}
