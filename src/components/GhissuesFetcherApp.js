'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.css');

var GhissuesFetcherApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">

        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = GhissuesFetcherApp;
