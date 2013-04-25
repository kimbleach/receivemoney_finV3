/*
 * File: app/store/depositType.js
 *
 * This file was generated by Sencha Architect version 2.2.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.depositType', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.depositTypeModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            model: 'MyApp.model.depositTypeModel',
            storeId: 'MyJsonStore6',
            proxy: {
                type: 'ajax',
                url: 'data/depositType.json',
                reader: {
                    type: 'json',
                    root: 'depositType'
                }
            },
            listeners: {
                load: {
                    fn: me.onJsonstoreLoad,
                    scope: me
                }
            }
        }, cfg)]);
    },

    onJsonstoreLoad: function(store, records, successful, eOpts) {
        console.log("Deuanz ^^");
        var combo = Ext.getCmp('transaction');
        //combo.setValue("ฝาก");
    }

});