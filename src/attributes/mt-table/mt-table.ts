import { autoinject } from 'aurelia-framework';

@autoinject
export class MtTableCustomAttribute {
  constructor(private _element: Element) {
    this._element.classList.add('table', 'table-striped');
  }
}
