export enum AlertType {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'danger',
  SUCCESS = 'success'
}

export class AlertMessage {
  readonly message: string;
  readonly alertType: AlertType;

  constructor(message: string, alertType: AlertType) {
    this.message = message;
    this.alertType = alertType;
  }
}
