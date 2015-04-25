'use strict';

var GhissuesFetcherApp = require('./GhissuesFetcherApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={GhissuesFetcherApp}>
    <Route name="/" handler={GhissuesFetcherApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
