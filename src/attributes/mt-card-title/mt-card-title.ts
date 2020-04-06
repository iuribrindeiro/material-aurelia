import { autoinject } from 'aurelia-framework';

@autoinject
export class MtCardTitleCustomAttribute {
  constructor(private element: Element) {
    this.element.classList.add('card-title');
  }  
}
