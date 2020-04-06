import { ValidationRules } from 'aurelia-validation';

export class UserModel {
  public name: string;
  public email: string;
  public password: string;
  public confirmationPassword: string;
  public subscribe: boolean;
  public age: number = 18;

  constructor(data: any = {}) {
    this.name = data.name || '';
    this.email = data.email || '';
    this.password = data.password || '';
    this.subscribe = !!data.subscribe;
    this.age = data.age || 18;
  }
}

ValidationRules
    .ensure((e: UserModel) => e.email)
    .email()
    .required()
    .ensure((e: UserModel) => e.password)
    .required()
    .satisfies((v: string) => v && v.length >= 8)
    .withMessage("The password must contain 8 or more characters")
    .ensure((e: UserModel) => e.confirmationPassword)
    .required()
    .satisfies((v: string, e: UserModel) => v == e.password)
    .withMessage("Must be equal to password")
    .on(UserModel);
