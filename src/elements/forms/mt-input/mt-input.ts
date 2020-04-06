import { bindable, autoinject, containerless } from 'aurelia-framework';
import { BaseMaterialElement } from "../../base-material-element/base-material-element";

@autoinject
export class MtInput extends BaseMaterialElement {
  @bindable
  public label?: string;

  public input: Element;

  public isFocused: boolean = false;

  public isFilled: boolean = false;

  attached() {
    if (this.input) {
      this.input.addEventListener('change', e => this.onInputElementChange(e));
      this.input.addEventListener('focus', e => this.onElementFocus());
      this.input.addEventListener('focusout', e => this.onElementFocusOut());
    }
  }

  detached() {
    if (this.input) {
      this.input.addEventListener('change', e => this.onInputElementChange(e));
      this.input.removeEventListener('focus', e => this.onElementFocus())
      this.input.removeEventListener('focusout', e => this.onElementFocusOut());
    }
  }

  private onElementFocus() {
    this.isFocused = true;
  }

  private onElementFocusOut() {
    this.isFocused = false;
  }

  private onInputElementChange(e: Event) {
    this.isFilled = !!(e.target as HTMLInputElement).value;
  }
}
