'use strict';

describe('React store data storage helper', function () {
    var sut;
    var fixtures;

    beforeEach(function () {
        fixtures = require('./issuesFixtures');
        sut = require('stores/DataStorage');
        sut.clear()
    });
    it('should be defined', function () {
        expect(sut).toBeDefined();
    });
    it('should clear itself since clear called', function() {
        expect(typeof sut.getAll()).toEqual('object');
    });
    it('should create one item from raw data', function() {
        sut.createOne(fixtures[0]);
        expect(typeof sut.getAll()).toEqual('object');
    });
    it('should return item object on prompt', function() {
        sut.createOne(fixtures[0]);
        expect(typeof sut.getByID(fixtures[0].id)).toEqual('object');
    });
    it('should create many items ', function() {
        sut.createMany(fixtures);
        expect(typeof sut.getByID(fixtures[0].id)).toEqual('object');
    });
    it('should destroy item', function() {
        sut.createOne(fixtures[0]);
        sut.destroy(fixtures[0].id);
        expect(sut.getByID(fixtures[0].id)).toBeUndefined();
    });
});
