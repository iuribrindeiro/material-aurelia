import perfectScrollbar from 'perfect-scrollbar';
import { containerless } from 'aurelia-framework';
import { BaseMaterialElement } from "../../base-material-element/base-material-element";

@containerless
export class MtMainPanel extends BaseMaterialElement {

  public mainPanel: Element;

  attached() {
    new perfectScrollbar(this.mainPanel);
  }
}
