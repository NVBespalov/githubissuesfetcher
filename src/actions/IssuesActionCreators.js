'use strict';
var GhissuesFetcherAppDispatcher = require('../dispatcher/GhissuesFetcherAppDispatcher');
var UserActionCreators = {
    /**
     * Search users by criteria
     * @param {object} searchCriteria
     */
    search: function (searchCriteria) {
        GhissuesFetcherAppDispatcher.handleViewAction({
            actionType: 'search',
            searchCreteria: searchCriteria
        });
    }
};

module.exports = UserActionCreators;
