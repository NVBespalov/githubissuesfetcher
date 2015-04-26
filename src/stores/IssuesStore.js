'use strict';

var AppDispatcher = require('../dispatcher/GhissuesFetcherAppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var Promise = require('es6-promise').Promise;
var CHANGE_EVENT = 'change';
var storage = require('./DataStorage');
var IssuesStore;
/**
 * Create XMLHttpRequest entity for a further usage
 * @returns {XMLHttpRequest}
 */
function getXmlHttp() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}

/**
 * search for remote issues via GH API
 * @throws JsonSerializationException
 * @param {object} searchCriteria
 * @return {Promise}
 * @TODO refactor extract to SINGLETON service :-)
 */
function searchRemoteIssues(searchCriteria) {
    var req = getXmlHttp();

    return new Promise(function (resolve, reject) {
        req.onreadystatechange = function () {
            if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) {
                    resolve(JSON.parse(req.responseText));
                }
                else if (req.status === 400) {
                    reject();
                }
                else {
                    reject();
                }
            }
        };
        req.open('GET', 'https://api.github.com/repos/' + searchCriteria.userName + '/' + searchCriteria.repositoryName + '/issues', true);
        req.send();
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
