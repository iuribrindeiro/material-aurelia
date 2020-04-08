import { TableState, PageSize, ValueChanged, OrderingColumn, Order } from 'material-aurelia';
import { UserModel } from "../../../models/user-model";

export class ExtendedTables {
  public tableState: TableState;

  private skip(arr: any[], s: number): any[] {
    return arr.filter((x,i)=>{
      if(i>(s-1))
        return true
    });
  }

  private take(arr: any[], t: number): any[] {
    return arr.filter((x,i)=>{
      if(i<=(t-1))
        return true;
    });
  }

  private filterByText(arr: any[]): any[] {
    return arr.filter((u: UserModel) => {
      if (this.tableState && this.tableState.searchText)
        return u.name.toLocaleLowerCase().includes(this.tableState.searchText.toLocaleLowerCase());

      return true;
    })
  }

  public get totalItems(): number {
    return this.filterByText(this._users).length;
  }

  public pageSizes: PageSize[] = [new PageSize(2, 5), new PageSize(4)];

  private _users: UserModel[] = [
    new UserModel({ name: "Auri", email: "iuribrindeiro@gmail.com", subscribe: false, age: 22 }),
    new UserModel({ name: "Blop", email: "teste@gmail.com", subscribe: true, age: 18 }),
    new UserModel({ name: "Cooping", email: "looping@gmail.com", subscribe: false, age: 30 }),
    new UserModel({ name: "Luidi", email: "teste@gmail.com", subscribe: false, age: 17 }),
  ];

  public get users(): UserModel[] {
    let users = this.filterByText(this._users);
    if (this.tableState && this.tableState.pageSize)
      return this.take(this.skip(users, (this.tableState.currentPage - 1) * this.tableState.pageSize.size), this.tableState.pageSize.size);

    return users;
  }

  public async orderChanded(event: CustomEvent<ValueChanged<OrderingColumn>>) {
    console.log(`ordering by ${event.detail.newValue.key} ${Order[event.detail.newValue.order].toString()}`);
  }

  public async searchTextChanged(event: CustomEvent<ValueChanged<string>>) {
    console.log(`search text of table changed from ${event.detail.oldValue} to ${event.detail.newValue}`);
  }

  public async pageSizeChanged(event: CustomEvent<ValueChanged<PageSize>>) {
    console.log(`page size of table changed from ${event.detail.oldValue.size} to ${event.detail.newValue.size}`);
  }

  public async tableStateChanged(event: CustomEvent<ValueChanged<TableState>>) {
    console.log('table state changed');
    this.tableState = event.detail.newValue;
  }
}
