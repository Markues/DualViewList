import alt from '../alt';
import DualListParentActions from '../actions/DualListParentActions';

class DualListParentStore {
  constructor() {
    this.bindActions(DualListParentActions);
    this.listData = {
      list: []
    };
  }

  onExecuteFetchSuccess(data) {
    this.listData = data;
  }

  onExecuteFetchFail(jqXhr) {
    console.error(jqXhr.responseJSON.message);
    alert('List Fetch Failed!');
  }
}

export default alt.createStore(DualListParentStore);
