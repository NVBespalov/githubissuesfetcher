'use strict';

describe('IssuesDetails', function () {
    var React = require('react/addons');
    var IssuesDetails, component;

    beforeEach(function () {
        IssuesDetails = require('components/IssueDetails.js');
        component = React.createElement(IssuesDetails);
    });

    it('should create a new instance of IssuesDetails', function () {
        expect(component).toBeDefined();
    });
});
