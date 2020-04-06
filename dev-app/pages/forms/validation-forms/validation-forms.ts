import { autoinject } from 'aurelia-framework';
import { ValidationController } from 'aurelia-validation';
import { UserModel } from '../../../models/user-model';
import { CustomValidationControllerFactory } from 'resources';
import Swal from 'sweetalert2'

@autoinject
export class ValidationForms {
  public user: UserModel = new UserModel();
  public loading: boolean = false;
  private _validationController: ValidationController;

  constructor(private _validationControllerFactory: CustomValidationControllerFactory) {}

  created() {
    this._validationController = this._validationControllerFactory.createForCurrentScope();
  }

  public async save() {
    let result = await this._validationController.validate();

    if (result.valid) {
      this.loading = true;
      setTimeout(async () => {
        await Swal.fire("Registered!", `Your registration was made! Email: ${this.user.email}; Password: ${this.user.password}; Subscribe: ${this.user.subscribe}`, "success");
        this.loading = false;
      }, 1300);
    }
  }

}


