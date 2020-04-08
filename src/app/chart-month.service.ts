import { Injectable } from '@angular/core';
import { HiveData } from './hiveData.model';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartMonthService {

  private userData: User[] = [];
  private hives = [];
  private statList: HiveData[] = [];
  private temperatureDailyList = [];
  private humidityDailyList = [];
  private acousticsDailyList = [];
  private carbonDioxideDailyList = [];
  private temperatureList = [];
  private humidityList = [];
  private acousticsList = [];
  private carbonDioxideList = [];
  private minTemperature: number;
  private maxTemperature: number;
  private minHumidity: number;
  private maxHumidity: number;
  private minAcoustics: number;
  private maxAcoustics: number;
  private minCarbonDioxide: number;
  private maxCarbonDioxide: number;
  private chartList = [];
  private chartData = [];
  private chartDataUpdated = new Subject<HiveData[]>();

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  getMonthlyData() {
    let temperature: number;
    let humidity: number;
    let acoustics: number;
    let carbonDioxide: number;
    let date: Date;
    let day: number;
    let currentDay: number;
    let totalTemp: number;
    let totalHum: number;
    let totalAcc: number;
    let totalCarb: number;
    let avgTemp = 0;
    let avgHum = 0;
    let avgAcc = 0;
    let avgCarb = 0;

    this._http.get<User[]>('http://localhost:3000/api/personal')
      .subscribe((personalData) => {
        this.userData = personalData;

        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < personalData[0].hives.length; i++) {
        this.hives.push(personalData[0].hives[i].hiveID);
        }
    });

    this._http.get<HiveData[]>('http://localhost:3000/api/monthly-stats')
      .subscribe((hiveData) => {
        this.statList = hiveData;
        date = new Date(this.statList[0].timestamp);
        day = date.getDate();
        currentDay = day;

        for (let hive of this.hives) {
          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < this.statList.length; i++) {
            if (hive == this.statList[i].hiveID) {
              temperature = this.statList[i].temperature;
              humidity = this.statList[i].humidity;
              acoustics = this.statList[i].acoustics;
              carbonDioxide = this.statList[i].carbonDioxide;
              date = new Date(this.statList[i].timestamp);
              day = date.getDate();

              if (currentDay == day) {
                this.temperatureDailyList.push(temperature);
                this.humidityDailyList.push(humidity);
                this.acousticsDailyList.push(acoustics);
                this.carbonDioxideDailyList.push(carbonDioxide / 10);
                continue;
              }

              currentDay = day;

              totalTemp = 0;
              totalHum = 0;
              totalAcc = 0;
              totalCarb = 0;
              // tslint:disable-next-line: prefer-for-of
              for (let i = 0; i < this.temperatureDailyList.length; i++) {
                totalTemp += this.temperatureDailyList[i];
                totalHum += this.humidityDailyList[i];
                totalAcc += this.acousticsDailyList[i];
                totalCarb += this.carbonDioxideDailyList[i];
              }

              avgTemp = totalTemp / this.temperatureDailyList.length;
              avgHum = totalHum / this.humidityDailyList.length;
              avgAcc = totalAcc / this.acousticsDailyList.length;
              avgCarb = totalCarb / this.carbonDioxideDailyList.length;

              this.temperatureList.push(avgTemp);
              this.humidityList.push(avgHum);
              this.acousticsList.push(avgAcc);
              this.carbonDioxideList.push(avgCarb);

              this.temperatureDailyList = [];
              this.humidityDailyList = [];
              this.acousticsDailyList = [];
              this.carbonDioxideDailyList = [];
            }
          }
          this.minTemperature = Math.min.apply(null, this.temperatureList);
          this.maxTemperature = Math.max.apply(null, this.temperatureList);
          this.minHumidity = Math.min.apply(null, this.humidityList);
          this.maxHumidity = Math.max.apply(null, this.humidityList);
          this.minAcoustics = Math.min.apply(null, this.acousticsList);
          this.maxAcoustics = Math.max.apply(null, this.acousticsList);
          this.minCarbonDioxide = Math.min.apply(null, this.carbonDioxideList) * 10;
          this.maxCarbonDioxide = Math.max.apply(null, this.carbonDioxideList) * 10;

          this.chartList.push(this.temperatureList);
          this.chartList.push(this.humidityList);
          this.chartList.push(this.acousticsList);
          this.chartList.push(this.carbonDioxideList);

          this.chartData.push({hiveID: hive,
            chartData:  [
            {fill: false, data: this.temperatureList, label: 'Temperatura'},
            {fill: false, data: this.humidityList, label: 'Wilgotność'},
            {fill: false, data: this.acousticsList, label: 'Akustyka'},
            {fill: false, borderColor: 'gray', pointBackgroundColor: 'gray',
            data: this.carbonDioxideList, label: 'Dwutlenek węgla'}
            ],
          minTemp: this.minTemperature,
          maxTemp: this.maxTemperature,
          minHum: this.minHumidity,
          maxHum: this.maxHumidity,
          minAcous: this.minAcoustics,
          maxAcous: this.maxAcoustics,
          minCarbon: this.minCarbonDioxide,
          maxCarbon: this.maxCarbonDioxide
          });

          this.temperatureList = [];
          this.humidityList = [];
          this.acousticsList = [];
          this.carbonDioxideList = [];
          this.chartList = [];
        }
        this.chartDataUpdated.next([...this.chartData]);
      });
  }

  monthlyStatsUpdateListener() {
    return this.chartDataUpdated.asObservable();
  }
}
