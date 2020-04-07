import { Component, OnInit } from '@angular/core';
import { HiveData } from '../../hiveData.model';
import { ChartTodayService } from '../../chart-today.service';
import { ChartsModule } from 'ng2-charts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-today-stats',
  templateUrl: './today-stats.component.html',
  styleUrls: ['../today-main/today-main.component.scss']
})

export class TodayStatsComponent implements OnInit {

  statList = [];
  private statSubscription: Subscription;

  public lineChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    fill: false
  };
  public lineChartLabels = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
  '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData =  [];

  // tslint:disable-next-line: variable-name
  constructor(public statsService: ChartTodayService) {}

  ngOnInit() {
    this.statsService.getTodayData();
    this.statSubscription = this.statsService.todayStatsUpdateListener()
      .subscribe((stats) => {
        this.statList = stats;
      });
  }
}
