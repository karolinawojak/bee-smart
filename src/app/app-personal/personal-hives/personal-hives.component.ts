import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../personal.service';
import { Hive } from '../../hive.model';

@Component({
  selector: 'app-personal-hives',
  templateUrl: './personal-hives.component.html',
  styleUrls: ['../personal-main/personal-main.component.scss']
})

export class PersonalHivesComponent implements OnInit {

  hiveList: Hive[];

  // tslint:disable-next-line: variable-name
  constructor(private _hives: PersonalService) {
    this.firstVisit();
  }

  ngOnInit() {}

  firstVisit(): any {
    this.hiveList = this._hives.getPersonalData()[0].hives;
  }
}
