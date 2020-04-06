import { BaseMaterialElement } from '../../base-material-element/base-material-element';
import { bindable, containerless, autoinject } from 'aurelia-framework';
import { Router, NavigationInstruction } from 'aurelia-router';

@containerless()
@autoinject
export class MtSidebarItemLink extends BaseMaterialElement {

  constructor(private _router: Router, element: Element) {
    super(element);
  }

  @bindable
  public icon: string;

  @bindable
  public routeName: string = 'home';

  @bindable
  public routeLink: string;

  @bindable
  public text: string;

  public get isRouteActive(): boolean {
    return RouterHelper.recursiveRouteActive(this._router, this.routeName);
  }
}

export class RouterHelper {
  public static recursiveRouteActive(router: Router, routeName: string, currentInstruction?: NavigationInstruction): boolean {
    if (!currentInstruction)
      currentInstruction = router.currentInstruction;

    return currentInstruction != null && 
      (currentInstruction.config.name == routeName || 
      currentInstruction.viewPortInstructions.default.childNavigationInstruction && this.recursiveRouteActive(router, routeName, currentInstruction.viewPortInstructions.default.childNavigationInstruction));
  }
}
