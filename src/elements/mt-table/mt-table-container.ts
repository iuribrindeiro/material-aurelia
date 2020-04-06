import { EventAggregator, Subscription } from 'aurelia-event-aggregator';
import { bindable, bindingMode, autoinject, BindingEngine, observable } from 'aurelia-framework';
import './mt-table-container.css';
import { OrderChangedDetails, Order } from './mt-table-column/mt-table-column';

@autoinject
export class MtTableContainer {

  @bindable({defaultBindingMode: bindingMode.fromView})
  public tableState: TableState = new TableState('');

  private _subscriptions: Subscription[] = [];

  @observable
  public currentPage: number;

  @bindable
  public searchText: string = '';

  @bindable
  public totalItems: number = 0;

  @bindable
  public searchTextLabel: string = "Procurar registros";

  @bindable({defaultBindingMode: bindingMode.fromView})
  public pageSize: PageSize;

  @bindable
  public pageSizes: PageSize[] = [new PageSize(10), new PageSize(20)];


  constructor(private _element: Element, private _eventAggregator: EventAggregator, private _bindingEngine: BindingEngine) {}

  attached() {
    this._subscriptions.push(this._eventAggregator.subscribe("order-changed", (e: OrderChangedDetails) => this.orderChanged(e))); 
    this.tableStateChanged();
  }

  detached() {
    this._subscriptions.forEach(s => s.dispose());
  }

  public currentOrderingColumnChanged(newValue: OrderingColumn, oldValue: OrderingColumn) {
    this._element.dispatchEvent(new CustomEvent<ValueChanged<OrderingColumn>>("order-changed", {
      bubbles: true,
      cancelable: true,
      detail: new ValueChanged<OrderingColumn>(newValue, oldValue)
    }));
    this.tableStateChanged();
  }

  searchTextChanged(newValue: string, oldValue: string) {
    this._element.dispatchEvent(new CustomEvent<ValueChanged<string>>("search-text-changed", {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: new ValueChanged<string>(newValue, oldValue)
    }));
    this.tableStateChanged();
  }

  pageSizeChanged(newValue: PageSize, oldValue?: PageSize) {
    this._element.dispatchEvent(new CustomEvent<ValueChanged<PageSize>>("page-size-changed", {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: new ValueChanged<PageSize>(newValue, oldValue)
    }));
    this.tableStateChanged();
  }

  currentPageChanged(newValue, oldValue) {
    this._element.dispatchEvent(new CustomEvent<ValueChanged<number>>("current-page-changed", {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: new ValueChanged<number>(newValue, oldValue)
    }));

    this.tableStateChanged();
  }

  private tableStateChanged() {
    if (this.tableState) {
      this.tableState.currentPage = this.currentPage;
      this.tableState.pageSize = this.pageSize;
      this.tableState.searchText = this.searchText;
    }

    this._element.dispatchEvent(new CustomEvent<ValueChanged<TableState>>("table-state-changed", {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: new ValueChanged<TableState>(this.tableState)
    }));
  }

  private orderChanged(event: OrderChangedDetails) {
    let oldValue: OrderingColumn = null;
    let changed = false;

    if (!this.tableState.ordering) {
      this.tableState.ordering = new OrderingColumn(event.key, event.order);
      changed = true;
    } else if (this.tableState.ordering.key != event.key || this.tableState.ordering.order != event.order) {
      oldValue = Object.assign({}, this.tableState.ordering)
      this.tableState.ordering.key = event.key;
      this.tableState.ordering.order = event.order;
      changed = true;
    }

    if (changed)
      this.currentOrderingColumnChanged(this.tableState.ordering, oldValue);
  }

}

export class OrderingColumn {
  public key: string;
  public order: Order;

  constructor(key: string, order: Order) {
    this.key = key || '';
    this.order = order || Order.Asc;
  }
}

export class TableState {
  public ordering: OrderingColumn;
  public searchText: string;
  public pageSize: PageSize;
  public currentPage: number = 1;

  constructor(searchText: string, pageSize?: PageSize, ordering?: OrderingColumn) {
    this.searchText = searchText || '';
    this.pageSize = pageSize || null;
    this.ordering = ordering || null;
  }
}

export class ValueChanged<T> {
  public newValue: T;
  public oldValue?: T;

  constructor(newValue: T, oldValue?: T) {
    this.newValue = newValue || null;
    this.oldValue = oldValue || null;
  }
}

export class PageSize {
  size: number;
  totalPagesToShow: number;
  label: string;

  constructor(size: number, totalPagesToShow?: number, label?: string) {
    this.size = parseInt(size.toString()) || 0;
    this.label = label || size.toString();
    this.totalPagesToShow = totalPagesToShow || 10;
  }
}
