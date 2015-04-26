'use strict';

var React = require('react/addons');

require('styles/IssuesList.less');

var IssuesList = React.createClass({
    /**
     * @TODO wrap each issue into separate component such as row and row item
     * @returns {XML}
     */
    render: function () {
        var issues = [];
        for (var key in this.props.issues) {
            var issue = this.props.issues[key];
            issues.push(
                <div className="col-sm-12 col-md-12">
                    <div className="thumbnail">
                        <img data-src="holder.js/100%x200" alt="100%x200"
                             src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxkZWZzLz48cmVjdCB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjkxLjc5Njg3NSIgeT0iMTAwIiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjExcHQ7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+MjQyeDIwMDwvdGV4dD48L2c+PC9zdmc+"
                             data-holder-rendered="true"/>

                        <div className="caption">
                            <h3 id="thumbnail-label">{issue.title}<a className="anchorjs-link"
                                                                     href="#thumbnail-label"><span
                                className="anchorjs-icon"></span></a></h3>
                            <p>{issue.body}</p>
                            <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>

                        </div>

                    </div>
                </div>
            );
        }

        return (

            <div className="panel panel-default">
                <div className="panel-heading"> Запросы от:{this.props.userName} в репозитории:{this.props.repositoryName} </div>
                <div className="panel-body">
                    {issues}
                </div>
            </div>
        );
    }
});

module.exports = IssuesList;

