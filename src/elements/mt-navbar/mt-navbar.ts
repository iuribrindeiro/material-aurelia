import { bindable, autoinject, containerless } from 'aurelia-framework';
import { Router } from "aurelia-router";
import { EventAggregator } from 'aurelia-event-aggregator';
import { ToggleSidebarClickedEvent } from './events';

@autoinject
@containerless
export class MtNavbar {
  
  @bindable
  public enableToggleSidebar: boolean = true;
  
  constructor(private _router: Router, private _eventAggregator: EventAggregator) {

  }

  public toggleSidebar(): void {
    this._eventAggregator.publish(ToggleSidebarClickedEvent.eventName);
  }

  public get currentRouteName(): string {
    return this._router.currentInstruction.config.name;
  }

  public get currentRouteTitle(): string {
    return this._router.currentInstruction.config.title;
  }
}
