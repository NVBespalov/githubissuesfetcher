'use strict';

describe('IssuesStore', function () {
    var store;

    beforeEach(function () {
        store = require('stores/IssuesStore');
    });

    it('should be defined', function () {
        expect(store).toBeDefined();
    });
    it('should return array onGetAll', function() {
        expect(typeof store.getAll()).toEqual('object');
    });
});
