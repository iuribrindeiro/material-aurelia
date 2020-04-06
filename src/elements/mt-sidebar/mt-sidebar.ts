import { BaseMaterialElement } from '../base-material-element/base-material-element';
import { bindable, containerless, autoinject } from 'aurelia-framework';
import * as $ from 'jquery';
import '../../base-material-dashboard/js/perfect-scrollbar.jquery.min.js';
import { EventAggregator, Subscription } from 'aurelia-event-aggregator';
import { ToggleSidebarClickedEvent } from '../mt-navbar/events';
import { Colors } from '../base-material-element/colors';

@containerless
@autoinject
export class MtSidebar extends BaseMaterialElement {
  
  @bindable
  public defaultSidebarSize: SidebarSize = SidebarSize.Expanded;

  @bindable
  public userInfo: any;

  @bindable
  public color: Colors = Colors.Rose;

  @bindable
  public backGroundColor: Colors = Colors.Black;

  @bindable
  public logoTitle: string;

  public sidebar: Element;

  public sidebarWrapper: Element;

  private _events: Subscription[] = [];

  constructor(private _eventAggregator: EventAggregator, element: Element) {
    super(element);
  }

  created() {
    if (this.defaultSidebarSize == SidebarSize.Mini)
      this.toggleSidebarFromBody();

    this._events.push(this._eventAggregator.subscribe(ToggleSidebarClickedEvent.eventName, (e: ToggleSidebarClickedEvent) => {
      this.toggleSidebarFromBody();
    }));
  }

  attached() {
    $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
  }

  detached() {
    this._events.forEach(e => e.dispose());
  }

  private toggleSidebarFromBody() {
    document.getElementsByTagName('body')[0].classList.toggle('sidebar-mini');
  }
}

export enum SidebarSize {
  Mini = "mini",
  Expanded = "expanded"
}
