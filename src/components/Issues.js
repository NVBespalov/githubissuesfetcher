
var React = require('react/addons');
var IssuesActions = require('actions/IssuesActionCreators');
var IssuesStore = require('stores/IssuesStore');
require('styles/Issues.less');
var IssuesList = require('./IssuesList');
var Issues = React.createClass({

    componentDidMount: function() {
        IssuesStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        IssuesStore.removeChangeListener(this._onChange);
    },

    render: function () {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <form className="form-inline" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Имя пользователя</label>
                            <input type="text" className="form-control" placeholder="NVBespalov" ref="userNameInput" value="jaredly"/>
                        </div>
                        <div className="form-group">
                            <label>Имя репозитория</label>
                            <input type="text" className="form-control" placeholder="Имя репозитория" ref="repositoryName" value="github-issues-viewer"/>
                        </div>
                        <button type="submit" className="btn btn-default" >Поиск</button>
                    </form>
                </div>
                <IssuesList />
            </div>

        );
    },
    /**
     * Form submit handler
     * @param event
     */
    onSubmit: function(event) {
        IssuesActions.search(
            {
                userName:this.refs.userNameInput.getDOMNode().value,
                repositoryName:this.refs.repositoryName.getDOMNode().value
            }
        );
    },
    /**
     * On store changed handler
     * @private
     */
    _onChange: function() {
        debugger
        this.setState(IssuesStore.getAll());
    }
});

module.exports = Issues;

