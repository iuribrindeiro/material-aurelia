import { ValidationControllerFactory, ValidationController } from 'aurelia-validation';
import { autoinject, Container } from 'aurelia-framework';
import { BootstrapFormRenderer } from '../renderers/bootstrap-form-renderer';

@autoinject
export class CustomValidationControllerFactory {
  constructor(private _validationControllerFactory: ValidationControllerFactory, private _container: Container) {}

  createForCurrentScope(): ValidationController {
    if (this._container.hasResolver(ValidationController))
      this._container.unregister(ValidationController);
    let validationController = this._validationControllerFactory.createForCurrentScope();
    validationController.addRenderer(new BootstrapFormRenderer());

    return validationController;
  }
}
