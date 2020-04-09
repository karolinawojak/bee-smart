import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../../user.model';
import { PersonalService } from '../../personal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['../login-main/login-main.component.scss']
})

export class LoginFormComponent implements OnInit {

  username: string;
  password: string;
  userData: User[];
  private statSubscription: Subscription;

  constructor(private router: Router, public statsService: PersonalService) {}

  ngOnInit() {
    this.statsService.getPersonalData();
    this.statSubscription = this.statsService.personalStatsUpdateListener()
      .subscribe((data: User[]) => {
        this.userData = data;
      });
  }

  login(): void {

    if (this.username === this.userData[0].id && this.password === this.userData[0].password) {
     this.router.navigate(['home']);
    } else {
      alert('Niepoprawne dane');
    }
  }
}
