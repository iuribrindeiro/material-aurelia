import { autoinject, customElement, containerless } from 'aurelia-framework';
import { MtSidebarItemLink } from "../../mt-sidebar-item-link/mt-sidebar-item-link";
import { Router } from 'aurelia-router';

@containerless()
@autoinject
@customElement("mt-sidebar-item-collapse-link")
export class MtSidebarItemCollapseLink extends MtSidebarItemLink {
  constructor(router: Router, element: Element) {
    super(router, element)
  }
}
