'use strict';

var React = require('react/addons');

require('styles/Issues.less');

var Issues = React.createClass({
    render: function () {
        return (
            <div className="col-lg-12">
                <form className="form-inline">
                    <div className="form-group">
                        <label>Имя пользователя</label>
                        <input type="text" className="form-control" placeholder="NVBespalov" />
                    </div>
                    <div className="form-group">
                        <label>Имя репозитория</label>
                        <input type="email" className="form-control" placeholder="Имя репозитория" />
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Поиск</button>
                </form>
            </div>
        );
    },
    handleSubmit: function(field, e) {

    }
});

module.exports = Issues;

