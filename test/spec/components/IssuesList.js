'use strict';

describe('IssuesList', function () {
  var React = require('react/addons');
  var IssuesList, component;

  beforeEach(function () {
    IssuesList = require('components/IssuesList.js');
    component = React.createElement(IssuesList);
  });

  it('should create a new instance of IssuesList', function () {
    expect(component).toBeDefined();
  });
});
