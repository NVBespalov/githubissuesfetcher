
var React = require('react/addons');
var IssuesActions = require('../actions/IssuesActionCreators');
var IssuesStore = require('../stores/IssuesStore');
require('styles/Issues.less');
var IssuesList = require('./IssuesList');
var Issues = React.createClass({

    getInitialState: function() {
        return {
            allIssues: IssuesStore.getAll()
        };
    },

    componentDidMount: function() {
        IssuesStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        IssuesStore.removeChangeListener(this._onChange);
    },

    render: function () {
        debugger
        if(this.state.allIssues) {}

        return (

            <div className="row">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Поиск запросов
                    </div>
                    <div className="panel-body">
                        <div className="col-lg-12">
                            <form className="form-inline">
                                <div className="form-group">
                                    <label>Имя пользователя</label>
                                    <input type="text" className="form-control" placeholder="NVBespalov" ref="userNameInput" value="jaredly"/>
                                </div>
                                <div className="form-group">
                                    <label>Имя репозитория</label>
                                    <input type="text" className="form-control" placeholder="Имя репозитория" ref="repositoryNameInput" value="github-issues-viewer"/>
                                </div>
                                <button to="/" className="btn btn-default" onClick={this.onSubmit}>Поиск</button>
                            </form>
                        </div>
                    </div>
                </div>

                <IssuesList issues={this.state.allIssues} />
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
                repositoryName:this.refs.repositoryNameInput.getDOMNode().value
            }
        );
        event.preventDefault();
    },
    /**
     * On store changed handler
     * @private
     */
    _onChange: function() {
        this.setState(this.getInitialState());
    }
});

module.exports = Issues;

