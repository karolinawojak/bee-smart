import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../personal.service';

@Component({
  selector: 'app-personal-hives',
  templateUrl: './personal-hives.component.html',
  styleUrls: ['../personal-main/personal-main.component.scss']
})

export class PersonalHivesComponent implements OnInit {

  hiveList: Array<{id: string, date: Date}>;

  // tslint:disable-next-line: variable-name
  constructor(private _hives: PersonalService) {
    this.firstVisit();
  }

  ngOnInit() {}

  firstVisit(): any {
    this.hiveList = this._hives.getVisit().hives;
  }
}
