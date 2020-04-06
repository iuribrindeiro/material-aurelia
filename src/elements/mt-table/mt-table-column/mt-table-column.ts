import { EventAggregator, Subscription } from 'aurelia-event-aggregator';
import { containerless, bindable, autoinject, observable } from 'aurelia-framework';

@containerless
@autoinject
export class MtTableColumn {
  constructor(private _eventAggregator: EventAggregator) {}
  
  @bindable
  public key: string;

  public keyOrdered = (row: any, order: string) => {
    this._eventAggregator.publish('order-changed', new OrderChangedDetails(this.key, parseInt(order)));
    return row[this.key];
  }  
}

export enum Order {
  Asc = 1,
  Desc = -1
}

export class OrderChangedDetails {
  public key: string;
  public order: Order;

  constructor(key: string, order: number) {
    this.key = key || '';
    this.order = order || 1;
  }
}
