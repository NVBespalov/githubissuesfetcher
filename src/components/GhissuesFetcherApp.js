

var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.css');
var Issues = require('./Issues');

var GhissuesFetcherApp = React.createClass({
  render: function() {
    return (
        <Issues />
    );
  }
});

module.exports = GhissuesFetcherApp;
