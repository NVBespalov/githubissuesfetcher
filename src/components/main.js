'use strict';

var GhissuesFetcherApp = require('./GhissuesFetcherApp');
var IssueDetails = require('components/issueDetails');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
    <Route path="/" handler={GhissuesFetcherApp}>
        <Route name="issue-details" handler={IssueDetails} />
    </Route>
);

Router.run(Routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, content);
});
