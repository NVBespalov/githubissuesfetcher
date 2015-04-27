'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;
require('styles/IssuesList.less');

var IssuesList = React.createClass({
    /**
     * @TODO wrap each issue into separate component such as row component and row item component
     * @returns {XML}
     */
    render: function () {
        var issues = [];
        for (var key in this.props.issues) {
            var issue = this.props.issues[key];
            issues.push(
                <div className="col-sm-12 col-md-12">
                    <div className="thumbnail">
                        <img alt={issue.user.name}
                             src={issue.user.avatar_url}
                             data-holder-rendered="true"/>

                        <div className="caption">
                            <h3 id="thumbnail-label">{issue.title}<a className="anchorjs-link" href="#thumbnail-label"><span
                                className="anchorjs-icon"></span></a></h3>
                            <p>{issue.body}</p>
                            <p><Link to="issue-details" className="btn btn-primary" role="button">Просмотреть</Link></p>

                        </div>

                    </div>
                </div>
            );
        }

        return (

            <div className="panel panel-default">
                <div className="panel-heading"></div>
                <div className="panel-body">
                    {issues}
                </div>
            </div>
        );
    }
});

module.exports = IssuesList;

