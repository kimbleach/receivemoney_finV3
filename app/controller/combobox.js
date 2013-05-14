/*
 * File: app/controller/combobox.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
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

Ext.define('MyApp.controller.combobox', {
    extend: 'Ext.app.Controller',

    onComboboxSelect: function(combo, records, eOpts) {
        var branchId = combo.valueModels[0].data.id,
            urlBank = 'data/readRecordBank.php?idBranch='+branchId;

        var store = 'bankStore';
        Ext.data.StoreManager.lookup(store);
        Ext.data.StoreManager.lookup(store).getProxy().url = urlBank;
        Ext.data.StoreManager.lookup(store).load({
            scope: this,
            callback: function(records, operation, success) {
                if (success) {
                    Ext.getCmp('bookBank').setValue('');
                    Ext.getCmp('accountNo').setValue('');
                } else {
                    console.log('error');
                }
            }
        });
    },

    onComboboxSelect1: function(combo, records, eOpts) {
        //console.log(combo.valueModels[0].data.id);
        var branchId = combo.valueModels[0].data.id,
            urlAccount = 'data/readRecordBank_account.php?idAccount='+branchId;

        var store = 'accountStore';
        Ext.data.StoreManager.lookup(store);
        Ext.data.StoreManager.lookup(store).getProxy().url = urlAccount;
        Ext.data.StoreManager.lookup(store).load({
            scope: this,
            callback: function(records, operation, success) {
                if (success) {
                    Ext.getCmp('accountNo').setValue(records[0].raw.account_number);
                    Ext.getCmp('type').setValue(records[0].raw.type);
                } else {
                    console.log('error');
                }
            }
        });


    },

    init: function(application) {
        this.control({
            "#name": {
                select: this.onComboboxSelect
            },
            "#bookBank": {
                select: this.onComboboxSelect1
            }
        });
    }

});
