import { Component, OnInit } from '@angular/core';
import { User } from '../../user.model';
import { PersonalService } from '../../personal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-last',
  templateUrl: './home-last.component.html',
  styleUrls: ['./home-last.component.scss']
})

export class AppLastComponent implements OnInit {

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
