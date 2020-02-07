import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { User } from "../models/user";
import { AlertService } from "../alert/alert.service";
import { AlertMessage, AlertType } from "../alert/alert-message";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public authService: AuthService,
              private alertService: AlertService) { }

  ngOnInit() {
  }

  public signIn() {
    this.authService.user = new User("Landon", "Woerdeman", "fake.email@gmail.com");
  }

  public signUp() {
    this.alertService.sendAlert(new AlertMessage("We aren't accepting sign-ups at the moment", AlertType.WARNING));
  }

  public signOut() {
    this.authService.user = null;
  }

}
