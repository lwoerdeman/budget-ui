export enum AlertType {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'danger',
  SUCCESS = 'success'
}

export class AlertMessage {
  readonly message: string;
  readonly alertType: AlertType;
  closed: boolean;

  constructor(message: string, alertType: AlertType) {
    this.message = message;
    this.alertType = alertType;
    this.closed = false;
  }
}
