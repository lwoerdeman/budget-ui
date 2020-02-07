import { User } from "./user";

export class UserSignup extends User {
  private readonly password: string;

  constructor(firstName: string, lastName: string, email: string, password: string) {
    super(firstName, lastName, email);
    this.password = password;
  }
}
