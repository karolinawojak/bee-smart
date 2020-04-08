import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../login-main/login-main.component.scss']
})

export class LoginFormComponent implements OnInit {

  constructor(private router: Router) {}

  username: string;
  password: string;

  ngOnInit() {}

  login(): void {

    if (this.username === 'admin' && this.password === 'admin') {

     this.router.navigate(['home']);

    } else {

      alert('Niepoprawne dane');

    }

  }
}
