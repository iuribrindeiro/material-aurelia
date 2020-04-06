import { containerless, bindable } from 'aurelia-framework';
import { BaseMaterialElement } from "../../base-material-element/base-material-element";

@containerless
export class MtCheckbox extends BaseMaterialElement {

  @bindable
  public label: string;
}
