import { Component, OnInit } from '@angular/core';
import { User } from '../../user.model';
import { PersonalService } from '../../personal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-personal-visit',
  templateUrl: './personal-visit.component.html',
  styleUrls: ['../personal-main/personal-main.component.scss']
})

export class PersonalVisitComponent implements OnInit {

  userData: User[];
  private statSubscription: Subscription;

  constructor(public statsService: PersonalService) {}

  ngOnInit() {
    this.statsService.getPersonalData();
    this.statSubscription = this.statsService.personalStatsUpdateListener()
      .subscribe((data: User[]) => {
        this.userData = data;
      });
  }
}
