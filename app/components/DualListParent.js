import React from 'react';
import DualLists from './DualLists';
import DualListParentActions from '../actions/DualListParentActions';
import DualListParentStore from '../stores/DualListParentStore';

class DualListParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = DualListParentStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    DualListParentStore.listen(this.onChange);
    DualListParentActions.executeFetch(this.props.location.query); // Initial Render
  }

  componentWillUnmount() {
    DualListParentStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    let hasResults = this.state.listData.list.length === 0 ? false : true;
    let results = hasResults ? this.state.listData.list : "No Results";

    return (
      <div className='container'>
        <div className="panel panel-default">
          <div className='panel-body'>
            <DualLists results={results}/>
          </div>
        </div>
      </div>
    );
  }
}

export default DualListParent;
