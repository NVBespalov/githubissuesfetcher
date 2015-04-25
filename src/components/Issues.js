'use strict';

var React = require('react/addons');

require('styles/Issues.less');

var Issues = React.createClass({
    render: function () {
        return (
            <form>
                <input type="text" class="form-control" placeholder="Github user name" />
            </form>
        );
    }
});

module.exports = Issues;

