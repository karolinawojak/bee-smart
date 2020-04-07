import { Component, OnInit } from '@angular/core';
import { HiveData } from '../../hiveData.model';
import { ChartMonthService } from '../../chart-month.service';
import { ChartsModule } from 'ng2-charts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-overall-stats',
  templateUrl: './overall-stats.component.html',
  styleUrls: ['../overall-main/overall-main.component.scss']
})

export class OverallStatsComponent implements OnInit {

  statList = [];
  private statSubscription: Subscription;

  public lineChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    fill: false
  };
  public lineChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9',
  '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData =  [];

  // tslint:disable-next-line: variable-name
  constructor(public statsService: ChartMonthService) {}

  ngOnInit() {
    this.statsService.getMonthlyData();
    this.statSubscription = this.statsService.monthlyStatsUpdateListener()
      .subscribe((stats) => {
        this.statList = stats;
      });
  }
}
