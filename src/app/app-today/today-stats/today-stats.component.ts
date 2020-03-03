import { Component, OnInit } from '@angular/core';
import { HiveData } from '../../hiveData.model';
import { MainStatsService } from '../../main-stats.service';
import { ChartsModule } from 'ng2-charts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-today-stats',
  templateUrl: './today-stats.component.html',
  styleUrls: ['../today-main/today-main.component.scss']
})

export class TodayStatsComponent implements OnInit {

  statList: HiveData[];
  private statSubscription: Subscription;

  public lineChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    fill: false
  };  public lineChartLabels = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
  '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
  public lineChartType = 'line';
  public lineChartLegend = true;  public lineChartData = [
    {fill: false, data: [35, 35, 35, 36, 37, 36, 35, 35, 35, 35, 36, 37,
      36, 35, 35, 35, 35, 36, 37, 36, 35, 35, 35, 35], label: 'Temperatura'},
    {fill: false, data: [75, 75, 74, 73, 72, 70, 70, 75, 75, 74, 73, 72,
    72, 72, 75, 75, 74, 73, 72, 72, 72, 75, 75, 76], label: 'Wilgotność'},
    {fill: false, data: [40, 36, 43, 59, 60, 58, 57, 42, 40, 41, 40, 36,
    43, 59, 42, 40, 41, 40, 36, 43, 59, 42, 40, 41], label: 'Akustyka'},
    {fill: false, borderColor: 'gray', pointBackgroundColor: 'gray',
    data: [80, 90, 92, 90, 90, 90, 92, 80, 90, 92, 90, 90,
    90, 92, 84, 85, 88, 90, 92, 90, 90, 90, 92, 91], label: 'Dwutlenek węgla'}
  ];

  // tslint:disable-next-line: variable-name
  constructor(public statsService: MainStatsService) {}

  ngOnInit() {
    this.statsService.getStats();
    this.statSubscription = this.statsService.statsUpdateListener()
      .subscribe((stats: HiveData[]) => {
        this.statList = stats.slice(-2);
      });
  }
}
