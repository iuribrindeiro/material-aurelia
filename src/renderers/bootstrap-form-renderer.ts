import {
  RenderInstruction,
  ValidateResult,
  ValidationRenderer
} from 'aurelia-validation';

export class BootstrapFormRenderer implements ValidationRenderer {
  public render(instruction: RenderInstruction): void {
    for (let { result, elements } of instruction.unrender) {
      for (let element of elements) {
        this.remove(element, result);
      }
    }

    for (let { result, elements } of instruction.render) {
      for (let element of elements) {
        this.add(element, result);
      }
    }
  }

  public add(element: Element, result: ValidateResult): void {
    const formGroup = element.closest('.form-group');
    if (!formGroup)
      return;

    if (!result.valid) {
      this.addError(formGroup, result);
    }
  }

  remove(element: Element, result: ValidateResult) {
    const formGroup = element.closest('.form-group');
    if (!formGroup)
      return;

    this.removeError(formGroup);
  }

  private addError(formGroup: Element, result: ValidateResult) {
    formGroup.classList.add('has-danger');
    formGroup.classList.remove('has-success');

    const message = document.createElement('label');
    message.className = 'error';
    message.textContent = result.message;
    formGroup.appendChild(message);
  }

  private removeError(formGroup: Element) {
    const message = formGroup.querySelector(`.error`);
    if (message) {
      formGroup.removeChild(message);
    }
    
    this.setSuccessFormGroup(formGroup);
  }

  private setSuccessFormGroup(formGroup: Element) {
    formGroup.classList.remove('has-danger');
    formGroup.classList.add('has-success');
  }
}
