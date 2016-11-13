import React from 'react';
import {Link} from 'react-router';

// Private class
class ListDef extends React.Component {
  render() {
    return (
      <div key={this.props.key} className='list-group-item'>
        <a href={this.props.link} className='list-group-item-heading' target="_blank">
          <h4>{this.props.title}</h4>
        </a>
        <p className='list-group-item-text'>{this.props.summary}</p>
        <a href={this.props.link} target="_blank">
          <small>{this.props.link}</small>
        </a>
      </div>
    );
  }
}

class ListExp extends React.Component {
  render() {
    return (
      <div key={this.props.key} className='list-group-item'>
        <a href={this.props.link} className='list-group-item-heading' target="_blank">
          <h4>{this.props.title}</h4>
        </a>
        <p className='list-group-item-text'>{this.props.summary}</p>
        <p className='list-group-item-text'>
          <b>Expanded Info:&nbsp;</b>{this.props.expanded}
        </p>
        <a href={this.props.link} target="_blank">
          <small>{this.props.link}</small>
        </a>
      </div>
    );
  }
}

class DualLists extends React.Component {
  render() {
    // If no List was returned
    if(this.props.results === "No Results") {
      return (
        <div className='panel panel-default'>
          <div className="jumbotron">
            <h2>
              No List was returned!
            </h2>
          </div>
        </div>
      );
    } else {
      let initialResults = this.props.results ?
        this.props.results :
        [{
          number: '1',
          title: 'loading...',
          link: '/home',
          summary: 'loading...',
          expanded: 'loading...'
        }];

      let convertDef = function(results) {
        // If more than 1 result
        if(results.constructor === Array) {
          return results.map(function(result) {
            return (
              <ListDef
                key={result.number}
                title={result.title}
                link={result.link}
                summary={result.summary}
              />
            );
          });
        } else {
          return (
            <ListDef
              key={results.number}
              title={results.title}
              link={results.link}
              summary={results.summary}
            />
          );
        }
      };

      let convertExp = function(results) {
        // If more than 1 result
        if(results.constructor === Array) {
          return results.map(function(result) {
            return (
              <ListExp
                key={result.number}
                title={result.title}
                link={result.link}
                summary={result.summary}
                expanded={result.expanded}
              />
            );
          });
        } else {
          return (
            <ListExp
              key={results.number}
              title={results.title}
              link={results.link}
              summary={results.summary}
              expanded={results.expanded}
            />
          );
        }
      };

      let dualListDef = convertDef(initialResults);
      let dualListExp = convertExp(initialResults);

      return (
        <div className='panel panel-default'>
          <div>
            <div>
              <ul className="nav nav-pills nav-justified" role="tablist">
                <li role='presentation' className='active'><Link to='#default' aria-controls='default' role='tab' data-toggle='tab'>Default List</Link></li>
                <li role='presentation'><Link to='#expanded' aria-controls='expanded' role='tab' data-toggle='tab'>Expanded List</Link></li>
              </ul>
            </div>
            <div className='tab-content'>
              <div role='tabpanel' className='tab-pane fade in active' id='default'>
                <div className='list-group'>
                  {dualListDef}
                </div>
              </div>
              <div role='tabpanel' className='tab-pane fade' id='expanded'>
                <div className='list-group'>
                  {dualListExp}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default DualLists;
