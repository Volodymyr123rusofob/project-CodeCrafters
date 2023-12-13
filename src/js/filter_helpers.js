export class FilterStorage {
  constructor(storageFilter) {
    this.storageFilter = storageFilter;
    // this.initStorageForFilter();
  }

  initStorageForFilter() {
    if (this.getFilterProducts()) {
      console.log('this.storageFilter=', this.storageFilter);
      return;
    }
    this.writeToLocalStorage([]);
    console.log('this.storageFilter-[]');
  }

  getFilterProducts() {
    return JSON.parse(localStorage.getItem(this.storageFilter));
  }

  removeFilterProducts() {
    this.writeToLocalStorage([]);
  }

  writeToLocalStorage(filterArray) {
    localStorage.setItem(this.storageFilter, JSON.stringify(filterArray));
  }
}
