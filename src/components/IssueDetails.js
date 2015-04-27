'use strict';

var React = require('react/addons');

require('styles/IssuesDetails.less');

var IssuesDetails = React.createClass({
    render: function () {
        return (
            <div>
                <p>{this.context.router.getCurrentParams().messageId}</p>
            </div>
        );
    }
});

module.exports = IssuesDetails;

