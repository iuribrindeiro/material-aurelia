import { BaseMaterialElement } from '../../base-material-element/base-material-element';
import { RouterHelper } from './../mt-sidebar-item-link/mt-sidebar-item-link';
import { Guid } from "guid-typescript";
import { containerless, bindable, autoinject } from 'aurelia-framework';
import { Router } from "aurelia-router";
import $ from 'jquery';

@containerless
@autoinject
export class MtSidebarItemCollapse extends BaseMaterialElement {
  constructor(private _router: Router, element: Element) {
    super(element);
  }

  public expanded: boolean = false;

  attached() {
    if(this.isRouteActive)
      $(`#${this.collapseId}`).collapse('show');
  }

  public toggleCollapse() {
    $(`#${this.collapseId}`).collapse('toggle');
  }

  @bindable
  public text: string;

  @bindable
  public rootRouteName: string;

  @bindable
  public icon: string;

  public collapseId: Guid = Guid.create();

  public get isRouteActive(): boolean {
    return RouterHelper.recursiveRouteActive(this._router, this.rootRouteName);
  }
}
