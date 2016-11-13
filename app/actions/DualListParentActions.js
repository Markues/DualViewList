import alt from '../alt';

class DualListParentActions {
  constructor() {
    this.generateActions(
      'executeFetchSuccess',
      'executeFetchFail'
    );
  }

  executeFetch(payload) {
    $.ajax({
      url: '/api/fetchList',
      data: payload
    })
    .done((data) => {
      this.actions.executeFetchSuccess(data);
    })
    .fail((jqXhr) => {
      this.actions.executeFetchFail(jqXhr);
    });
  }
}

export default alt.createActions(DualListParentActions);
