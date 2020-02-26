import { Component, OnInit } from '@angular/core';
import { Hive } from '../../hive';
import { MainStatsService } from '../../main-stats.service';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-overall-stats',
  templateUrl: './overall-stats.component.html',
  styleUrls: ['../overall-main/overall-main.component.scss']
})

export class OverallStatsComponent implements OnInit {

  statList: Hive[];

  public lineChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    fill: false
  };  public lineChartLabels = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 
  'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
  public lineChartType = 'line';
  public lineChartLegend = true;  public lineChartData = [
    {fill: false, data: [35, 35, 35, 36, 37, 36, 35, 35, 35, 35, 36, 37, 
      36, 35, 35, 35, 35, 36, 37, 36, 35, 35, 35, 35], label: 'Temperatura'},
    {fill: false, data: [75, 75, 74, 73, 72, 70, 70, 75, 75, 74, 73, 72, 
    72, 72, 75, 75, 74, 73, 72, 72, 72, 75, 75, 76], label: 'Wilgotność'},
    {fill: false, data: [40, 36, 43, 49, 40, 48, 47, 42, 40, 41, 40, 36, 
    43, 59, 42, 40, 41, 40, 36, 43, 59, 42, 40, 41], label: 'Akustyka'},
    {fill: false, borderColor: 'gray', pointBackgroundColor: 'gray', 
    data: [80, 90, 92, 90, 90, 90, 92, 80, 90, 92, 90, 90, 
    90, 92, 84, 85, 88, 90, 92, 90, 90, 90, 92, 91], label: 'Dwutlenek węgla'}
  ];

  // tslint:disable-next-line: variable-name
  constructor(private _stats: MainStatsService) {
    this.stats();
  }

  ngOnInit() {}

  stats(): any {
    this.statList = this._stats.getStats();
  }
}
