import { bindable, bindingMode, containerless, computedFrom } from 'aurelia-framework';

@containerless
export class MtPagination {
  @bindable
  public customClass: string;

  public get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  @bindable
  public totalItems: number = 0;

  @bindable
  public totalPagesToShow: number = 10;

  @bindable
  public itemsPerPage: number = 10;

  @bindable
  public enableNextPrevious: boolean = true;

  @bindable
  public disabled: boolean;

  @bindable({defaultBindingMode: bindingMode.fromView})
  public currentPage: number = 1;

  @bindable({defaultBindingMode: bindingMode.fromView})
  public currentPageBatch: number = 1;

  @computedFrom('totalPages', 'itemsPerPage', 'currentPageBatch')
  public get pages(): number[] {
    let pages = [];
    if (this.totalPages == 1) {
      if (this.currentPage != 1)
        this.currentPage = 1;
      return [1];
    }

    for (let index = 1; index <= this.totalPagesToShow && this.calculatePageNumber(index) <= this.totalPages; index++) {
      pages.push(this.calculatePageNumber(index));
    }

    return pages;
  }

  private calculatePageNumber(index: number): number {
    return (this.currentPageBatch * this.totalPagesToShow) - (this.totalPagesToShow - 1) + index - 1;
  }

  public changePage(page: number): void {
    if (!this.disabled)
      this.currentPage = page;
  }

  public currentPageChanged(newValue, oldValue) {
    let rest = newValue % this.totalPagesToShow;

    if (rest == 1 || rest == 0 || (newValue == this.totalPages)) {
      let newCurrentPageBatchValue = Math.ceil(newValue / this.totalPagesToShow);

      this.currentPageBatch = newCurrentPageBatchValue;
    }
  }

  public nextPage(): void {
    if (!this.isLastPage)
      this.changePage(this.currentPage + 1);
  }

  public previousPage(): void {
    if (!this.isFirstPage)
      this.changePage(this.currentPage - 1);
  }

  public firstPage(): void {
    if (!this.isFirstPage)
      this.changePage(1)
  }

  public lastPage(): void {
    if (!this.isLastPage)
      this.changePage(this.totalPages);
  }

  public get isFirstPage(): boolean {
    return this.currentPage == 1;
  }

  public get isLastPage(): boolean {
    return this.currentPage == this.totalPages;
  }
}
