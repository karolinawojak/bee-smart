import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last',
  templateUrl: './app-last.component.html',
  styleUrls: ['./app-last.component.scss']
})

export class AppLastComponent implements OnInit {

  lastEntry = new Date(2019, 11, 17, 3, 24, 0);
  constructor() { }

  ngOnInit() { }
}
