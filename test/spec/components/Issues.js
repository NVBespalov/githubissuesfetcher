'use strict';

describe('Issues', function () {
  var React = require('react/addons');
  var Issues, component;

  beforeEach(function () {
    Issues = require('components/Issues.js');
    component = React.createElement(Issues);
  });

  it('should create a new instance of Issues', function () {
    expect(component).toBeDefined();
  });
});
