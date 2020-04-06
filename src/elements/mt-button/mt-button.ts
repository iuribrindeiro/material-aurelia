import { bindable, autoinject, containerless } from 'aurelia-framework';
import { BaseMaterialElement } from "../base-material-element/base-material-element";
import { Colors } from "../base-material-element/colors";

@autoinject
@containerless
export class MtButton extends BaseMaterialElement {
  @bindable
  public type: Colors;

  @bindable
  public icon: string;

  @bindable
  public disabled: boolean;

  @bindable
  public iconDirection: IconDirection = IconDirection.Left;

  @bindable
  public size: Size;

  @bindable
  public btnStyle: Style;

  @bindable
  public iconOnly: boolean = false;

  @bindable
  public loading: boolean = false;

  constructor(element: Element) {
    super(element)
  }

  public get iconDirectionLeft(): boolean {
    return this.iconDirection == IconDirection.Left;
  }
}

export enum IconDirection {
  Left = "left",
  Right = "right"
}


export enum Size {
  Small = "sm",
  Large = "lg"
}


export enum Style {
  Round = "round",
  Link = "link"
}
