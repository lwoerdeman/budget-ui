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
    setTimeout(() => this.alertService.sendAlert(new AlertMessage("This is information", AlertType.INFO)), 2000)
  }

}
