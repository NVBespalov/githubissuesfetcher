/**
 * Created by nickbespalov on 26.04.15.
 */

var _store = {};

var DataStorage = {

    /**
     * Create many items from raw data list
     * @param itemsRawData
     */
    createMany: function (itemsRawData) {
        for (var i = 0, l = itemsRawData.length; i < l; i++) {
            this.createOne(itemsRawData[i]);
        }
    },
    /**
     * Create an item from raw data.
     * @param {object} itemRawData The content of the item
     */
    createOne: function (itemRawData) {
        _store[itemRawData.id] = itemRawData;
    },
    /**
     * Delete an item.
     * @param {string} id
     */
    destroy: function (id) {
        delete _store[id];
    },
    /**
     * Clear stored items
     */
    clear: function () {
        _store = {};
    },
    /**
     * get item by id
     * @param {string} id
     * @returns {object/undefined}
     */
    getByID: function (id) {
        return _store[id];
    },

    /**
     * Get all item in storage
     * @returns {object}
     */
    getAll: function () {
        return _store;
    }

};

module.exports = DataStorage;
