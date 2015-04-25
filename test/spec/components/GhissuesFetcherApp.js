'use strict';

describe('GhissuesFetcherApp', function () {
  var React = require('react/addons');
  var GhissuesFetcherApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    GhissuesFetcherApp = require('components/GhissuesFetcherApp.js');
    component = React.createElement(GhissuesFetcherApp);
  });

  it('should create a new instance of GhissuesFetcherApp', function () {
    expect(component).toBeDefined();
  });
});
