'use strict';

var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.css');
var Issues = require('./Issues');
var GhissuesFetcherApp = React.createClass({
  render: function() {
    return (
        <div class="row">
            <div class="col-lg-12">
                <Issues />
            </div>
        </div>
    );
  }
});

module.exports = GhissuesFetcherApp;
