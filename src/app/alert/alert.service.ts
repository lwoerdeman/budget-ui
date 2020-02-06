import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { AlertMessage } from "./alert-message";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alertSubject = new Subject<AlertMessage>();
  readonly alert$ = this.alertSubject.asObservable();

  constructor() { }

  sendAlert(alert: AlertMessage) {
    this.alertSubject.next(alert);
  }
}
