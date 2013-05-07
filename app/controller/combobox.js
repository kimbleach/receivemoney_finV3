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
        this.loadBank(combo);
    },

    onAccountNoChange: function(combo, records, eOpts) {
        Ext.getStore('info4comboStore').removeAll();
        this.loadInfoCombo(combo);
    },

    loadBank: function(bank) {
        var bankStore = Ext.create(MyApp.store.bankStore),
            bankInfoStore = Ext.create(MyApp.store.bankInfoStore);

        //Ext.getCmp('pnBankForm').getForm().getValues().bookBank


        Ext.data.StoreManager.get("info4comboStore").removeAll();

        //Ext.getCmp('accountNo').setValue("");

        bankStore.on('load', function(store, record){

            bankInfoStore.add(record[bank.valueModels[0].data.id-1]);

            for(i=0; i<=bankInfoStore.data.length; i++){

                var rec = bankInfoStore.data.items[0].raw.bankData[i];
                //console.log("Rec :: ", rec);
                Ext.data.StoreManager.get("info4comboStore").add(rec);
                //console.log("Store :: ", Ext.data.StoreManager.get("info4comboStore"));
            }

        });
    },

    loadInfoCombo: function(rec,account) {
        Ext.getCmp('name').setValue(rec.valueModels[0].data.name);
        Ext.getCmp('branch').setValue(rec.valueModels[0].data.branch);
        Ext.getCmp('type').setValue(rec.valueModels[0].data.type);
    },

    init: function(application) {
        this.control({
            "#bookBank": {
                select: this.onComboboxSelect
            },
            "#accountNo": {
                select: this.onAccountNoChange
            }
        });
    }

});
