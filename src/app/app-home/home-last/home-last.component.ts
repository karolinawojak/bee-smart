import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-last',
  templateUrl: './home-last.component.html',
  styleUrls: ['./home-last.component.scss']
})

export class AppLastComponent implements OnInit {

  lastEntry = new Date(2019, 11, 17, 3, 24, 0);
  constructor() { }

  ngOnInit() { }
}
