import { autoinject, Container, TargetInstruction, BindingLanguage, View } from 'aurelia-framework';
import { BaseMaterialElement } from 'elements/base-material-element/base-material-element';

@autoinject()
export class ExtendingBindsCustomAttribute {
  private expressions: Object[] = [];
  private owningView: View;
  bindings: any;

  constructor(private element: Element, private bindingLanguage: BindingLanguage, container: Container) {
    // get the target instruction of the element this attribute is in.
    let tI = container.parent.get(TargetInstruction);
    // store reference to binding expressions
    let expressions = tI.expressions.length && tI.expressions || (tI as any).expressionsSub || [];

    // clear all binding expressions of the parent custom element
    tI.expressions = [];
    (tI as any).expressionsSub = expressions;
    this.expressions = expressions || [];
  }

  created(owningView: View) {
    this.owningView = owningView;
  }

  bind() {
    if (!this.bindings) {
      this.bindings = this.expressions.map((e: any) => {
        if (e.targetProperty) {
          e.targetProperty = (this.bindingLanguage as any).attributeMap.map(
            this.element.tagName.toLowerCase(),
            e.targetProperty
          );
        }
        
        return e.createBinding(this.element);
      });

      let bindingContext = (this.owningView.bindingContext as any);
      bindingContext.owningView.bindings.filter(b => b.target == bindingContext.element).forEach(b => b.unbind());
      this.bindings.forEach(b => {
        b.bind((this.owningView.bindingContext as BaseMaterialElement).owningView)
      });
    }
  }

  unbind() {
    this.bindings?.forEach(b => b.unbind());
    this.bindings = null;
  }
}
