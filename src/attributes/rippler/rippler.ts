import { autoinject, bindable, EventManager, delegationStrategy, BindingBehavior } from 'aurelia-framework';

@autoinject
export class RipplerCustomAttribute {
  private _rippleContainer: HTMLElement;
  private _rippleDecorator: HTMLElement;

  @bindable({primaryProperty: true})
  public debounce?: number = null;

  constructor(private _element: Element, private _eventManager: EventManager) {}

  attached() {
    this.addRippleContainer();
    this._eventManager.addEventListener(this._element, "mousedown", (e: MouseEvent) => this.ripple(e), delegationStrategy.bubbling);
    this._eventManager.addEventListener(this._element, "mouseup", () => this.unripple(), delegationStrategy.bubbling);
  }

  private addRippleContainer() {
    this._rippleContainer = document.createElement('div');
    this._rippleContainer.classList.add('ripple-container');
    this._element.append(this._rippleContainer);
  }


  public ripple(event: MouseEvent) {
    if (!this._rippleDecorator) {
      this._rippleDecorator = document.createElement('div');
      this._rippleDecorator.classList.add('ripple-decorator');
      this._rippleContainer.append(this._rippleDecorator);
      this.buildStyle(event);
      this._rippleDecorator.classList.add('ripple-on');
    }
  }

  public unripple() {
    setTimeout(() => {
      this.removeRipple();
    }, this.debounce || 400);
  }

  private removeRipple() {
    if (this._rippleDecorator) {
      this._rippleDecorator.classList.add('ripple-out');
      this._rippleDecorator.remove();
      this._rippleDecorator = null;
    }
  }

  private buildStyle(event: MouseEvent) {
    let scale = Math.max((this._element as HTMLElement).offsetWidth, (this._element as HTMLElement).offsetHeight) / this._rippleDecorator.offsetWidth * 2.5;
    let left = `${event.pageX - this._rippleContainer.getBoundingClientRect().left}px`;
    let top = `${event.pageY - this._rippleContainer.getBoundingClientRect().top}px`;
    let backgroundColor = `${window.getComputedStyle((this._element.children[0] || this._element)).color}`;

    this._rippleDecorator.setAttribute('style', `left: ${left}; top: ${top}; background-color: ${backgroundColor}; transform: scale(${scale});`)
  }
}
