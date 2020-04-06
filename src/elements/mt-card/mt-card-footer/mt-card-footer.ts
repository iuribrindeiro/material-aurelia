import { containerless, bindable } from 'aurelia-framework';
import { BaseMaterialElement } from "../../base-material-element/base-material-element";

@containerless
export class MtCardFooter extends BaseMaterialElement {

  @bindable
  public customClass: string;
}
