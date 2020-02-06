import { Component, OnInit } from '@angular/core';
import { AlertService } from "../alert/alert.service";
import { AlertMessage, AlertType } from "../alert/alert-message";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    setTimeout(() => this.alertService.sendAlert(new AlertMessage("This is information", AlertType.INFO)), 2000);
    setTimeout(() => this.alertService.sendAlert(new AlertMessage("This is a warning", AlertType.WARNING)), 3000);
    setTimeout(() => this.alertService.sendAlert(new AlertMessage("This is an error", AlertType.ERROR)), 4000);
    setTimeout(() => this.alertService.sendAlert(new AlertMessage("This is a success", AlertType.SUCCESS)), 5000);

  }

}
