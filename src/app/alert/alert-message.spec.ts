import { AlertMessage, AlertType } from './alert-message';

describe('AlertMessage', () => {
  it('should create an instance', () => {
    expect(new AlertMessage("message", AlertType.WARNING)).toBeTruthy();
  });
});
