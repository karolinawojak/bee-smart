import { Component, OnInit } from '@angular/core';
import { HiveData } from '../../hiveData.model';
import { MainStatsService } from '../../main-stats.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-stats',
  templateUrl: './home-stats.component.html',
  styleUrls: ['./home-stats.component.scss']
})

export class AppStatsComponent implements OnInit {

  statList: HiveData[];
  private statSubscription: Subscription;

  constructor(public statsService: MainStatsService) {}

  ngOnInit() {
    this.statsService.getStats();
    this.statSubscription = this.statsService.statsUpdateListener()
      .subscribe((stats: HiveData[]) => {
        this.statList = stats.slice(-2);
      });
  }
}
