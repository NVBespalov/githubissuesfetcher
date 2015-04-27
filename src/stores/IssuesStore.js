'use strict';

var AppDispatcher = require('../dispatcher/GhissuesFetcherAppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Promise = require('es6-promise').Promise;
var CHANGE_EVENT = 'change';
var storage = require('./DataStorage');
var IssuesStore;

// @TODO Should be in singleton
var GHAPI = require('github-api');
var github = new GHAPI({
    username: 'USER_NAME',
    password: 'PASSWORD',
    auth: 'basic'
});

/**
 * search for remote issues via GH API
 * @throws JsonSerializationException
 * @param {object} searchCriteria
 * @return {Promise}
 * @TODO refactor extract to SINGLETON service :-)
 */
function searchRemoteIssues(searchCriteria) {
    var issues = github.getIssues(searchCriteria.userName, searchCriteria.repositoryName);

    return new Promise(function (resolve, reject) {
        issues.list({}, function(err, issues) {
            if (err) {
                reject();
            } else if (issues && issues.length) {
                resolve(issues);
            } else {
                reject();
            }
        });
    });

}


function searchIssuesActionHandler(searchCriteria) {
    searchRemoteIssues(searchCriteria).then(function (remoteIssuesItemsRawData) {
        storage.clear();
        storage.createMany(remoteIssuesItemsRawData);
        IssuesStore.emitChange();
    });
}
IssuesStore = assign({}, EventEmitter.prototype, {

    /**
     * Get the entire collection of TODOs.
     * @return {object}
     */
    getAll: function () {
        return storage.getAll();
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherIndex: AppDispatcher.register(function (payload) {
        var action = payload.action;

        switch (action.actionType) {
            case 'search':
                searchIssuesActionHandler(action.searchCreteria);
                break;
        }

        return true;
    })

});

module.exports = IssuesStore;
