import { Component, OnInit, ElementRef } from '@angular/core';
import { User } from '../../user.model';
import { PersonalService } from '../../personal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-personal-credentials',
  templateUrl: './personal-credentials.component.html',
  styleUrls: ['../personal-main/personal-main.component.scss']
})

export class PersonalCredentialsComponent implements OnInit {

  userData: User[];
  private statSubscription: Subscription;
  oldPass: string;
  newPass: string;
  newPassRepeat: string;

  constructor(public statsService: PersonalService) {}

  ngOnInit() {
    this.statsService.getPersonalData();
    this.statSubscription = this.statsService.personalStatsUpdateListener()
      .subscribe((data: User[]) => {
        this.userData = data;
      });
  }

  onKeyOld(event) {
    this.oldPass = event.target.value;
  }

  onKeyNew(event) {
    this.newPass = event.target.value;
  }

  onKeyNewRep(event) {
    this.newPassRepeat = event.target.value;
  }

  onEdit(userId: string) {
    console.log(this.userData[0].password);
    console.log(this.oldPass);
    console.log(this.newPassRepeat);

    if (this.oldPass === this.userData[0].password) {
      if (this.newPass === this.newPassRepeat) {
        this.statsService.updatePersonalData(userId, this.newPass);
        confirm('Hasło zmienione')
      } else {
        alert('Powtórzone hasło niepoprawne');
      }
    } else {
      alert('Stare hasło niepoprawne');
    }
  }
}
