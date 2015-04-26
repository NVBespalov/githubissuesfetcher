'use strict';

var React = require('react/addons');

require('styles/IssuesList.less');

var IssuesList = React.createClass({
  render: function () {
    return (
        <div className="row">
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img data-src="holder.js/100%x200" alt="100%x200" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxkZWZzLz48cmVjdCB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjkxLjc5Njg3NSIgeT0iMTAwIiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjExcHQ7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+MjQyeDIwMDwvdGV4dD48L2c+PC9zdmc+" data-holder-rendered="true" />
                    <div className="caption">
                        <h3 id="thumbnail-label">Thumbnail label<a className="anchorjs-link" href="#thumbnail-label"><span className="anchorjs-icon"></span></a></h3>
                        <p></p>
                        <p><a href="#" className="btn btn-primary" role="button"></a> <a href="#" className="btn btn-default" role="button"></a></p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
});

module.exports = IssuesList;

