import { View, autoinject } from 'aurelia-framework';

@autoinject
export class BaseMaterialElement {
  public owningView: View;

  constructor(public element: Element) {}
  
  created(owningView: View, myView: any) {
    this.owningView = owningView;
  }
}
