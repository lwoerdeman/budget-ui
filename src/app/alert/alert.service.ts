import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { AlertMessage, AlertType } from "./alert-message";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alertSubject = new Subject<AlertMessage>();
  readonly alert$ = this.alertSubject.asObservable();

  constructor() { }

  info(message: string) {
    this.alertSubject.next(new AlertMessage(message, AlertType.INFO));
  }

  warn(message: string) {
    this.alertSubject.next(new AlertMessage(message, AlertType.WARNING));
  }

  error(message: string) {
    this.alertSubject.next(new AlertMessage(message, AlertType.ERROR));
  }
}
