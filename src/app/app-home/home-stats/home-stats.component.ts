import { Component, OnInit } from '@angular/core';
import { Hive } from '../../hive';
import { MainStatsService } from '../../main-stats.service';

@Component({
  selector: 'app-home-stats',
  templateUrl: './home-stats.component.html',
  styleUrls: ['./home-stats.component.scss']
})

export class AppStatsComponent implements OnInit {

  statList: Hive[];

  // tslint:disable-next-line: variable-name
  constructor(private _stats: MainStatsService) {
    this.stats();
  }

  ngOnInit() { }

  stats(): any {
    this.statList = this._stats.getStats();
  }
}
