/*
 * File: app/controller/MyController.js
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

Ext.define('MyApp.controller.MyController', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'pnAddListMoneyWindows',
            selector: 'pnAddListMoneyWindows'
        },
        {
            ref: 'wdForm',
            selector: 'wnDelete'
        },
        {
            ref: 'bankName',
            selector: '#pnBankForm #bookbanks'
        }
    ],

    clickAdd: function(button, e, eOpts) {
        //console.log('ooooooooooo');

        this.loadAdd();
    },

    onBtnSearch: function(button, e, eOpts) {

    },

    onBtnReset: function(button, e, eOpts) {

    },

    clickAddButton: function(button, e, eOpts) {


        //console.log(Ext.getCmp('pnAddListMoney').getForm().isValid());
        if(Ext.getCmp('pnAddListMoney').getForm().isValid())
        {
            var bankname = Ext.getCmp('pnBankForm').getForm().getValues().bookBank,
                bankacc = Ext.getCmp('pnBankForm').getForm().getValues().accountNumber,
                addMoney = Ext.getCmp('pnAddListMoney').getForm().getValues();
            addMoney.bookBank = bankname;
            addMoney.accountNumber = bankacc;

            console.log(addMoney);
            //Ext.getCmp('bookBank').value
            //Ext.getStore('cultData').add(Ext.getCmp('pnAddListMoney').getForm().getValues());
            Ext.getStore('cultData').add(addMoney);
            Ext.getCmp('pnAddListMoney').getForm().reset();

            console.log('pnWindow');
            //this.getPnAddListMoneyWindows().destroy();

        }

    },

    clickSubmitEdit: function(button, e, eOpts) {
        //var Ext.getCmp('pnAddListMoney').getForm().getValues()


        //console.log(rec);
        //Ext.getStore('cultData').add(Ext.getCmp('pnAddListMoney').getForm().getValues());


        //console.log("Store ^^",Ext.getStore('cultData').data);



        var bankname = Ext.getCmp('pnBankForm').getForm().getValues().bookBank,
            bankacc = Ext.getCmp('pnBankForm').getForm().getValues().accountNumber,
            addMoney = Ext.getCmp('pnAddListMoney').getForm().getValues();
        addMoney.bookBank = bankname;
        addMoney.accountNumber = bankacc;

        rec.set(addMoney);

        Ext.getCmp('mygridpanel2').getView().refresh();

        this.getPnAddListMoneyWindows().destroy();
        /*    
        console.log(addMoney);
        //Ext.getCmp('bookBank').value
        //Ext.getStore('cultData').add(Ext.getCmp('pnAddListMoney').getForm().getValues());
        Ext.getStore('cultData').add(addMoney);
        */
    },

    clickEdit: function(o2,text, view, rowIndex, colIndex, item, e,record,row,column) {


        rec = record;
        var wnDel = Ext.create('MyApp.view.wnDelete');
        indexRow = rowIndex;
        console.log(1);

        console.log(rec);

        var getloadEdit = Ext.getStore('cultData').data.items[rowIndex];

        var store =  Ext.getStore('cultData');

        //console.log('coming');
        //console.log(text);

        if (text == 'delete'){
            wnDel.show();

            console.log('coming2');
            //store.removeAt(rowIndex); 

        }
        else{

            this.loadEdit(getloadEdit,rowIndex);

        }






    },

    clickYes: function(button, e, eOpts) {
        console.log('sfhsdjkfhs');


        this.rowDelete(indexRow);

        this.getWdForm().destroy();
    },

    clickNo: function(button, e, eOpts) {
        this.getWdForm().destroy();
    },

    clickClear: function(button, e, eOpts) {
        Ext.getCmp('pnAddListMoney').getForm().reset();
    },

    loadAdd: function() {

        var pnWindow = Ext.getCmp('pnAddListMoneyWindows');

        if(!pnWindow){

            pnWindow = Ext.create('MyApp.view.pnAddListMoneyWindows');
            //    console.log(pnWindow);
            Ext.getCmp('btnEdit').hidden = true;

        }

        pnWindow.show();


    },

    loadEdit: function(loadInfo, rowIndex) {

        var pnWindow = Ext.create('MyApp.view.pnAddListMoneyWindows',{
            title:"แก้ไขข้อมูลรับเงิน"

        });

        Ext.getCmp('btnSave').hidden = true;
        pnWindow.show();



        /*
        for (prop in loadInfo.data){
        console.log(prop);
        //console.log(loadInfo.data[prop]);
        //console.log(Ext.getCmp(prop));
        //  Ext.getCmp[prop].setValue(loadInfo.data[prop]);

        Ext.getCmp(prop).setValue(loadInfo.data[prop]);
    }
    */

    var rstore=Ext.getStore('cultData').getAt(rowIndex);
    Ext.getCmp('pnAddListMoney').getForm().loadRecord(rstore);
    Ext.getCmp('pnBankForm').getForm().loadRecord(rstore);
    },

    rowDelete: function(rowinfo) {
        var store = Ext.getStore('cultData');

        store.removeAt(rowinfo);
    },

    init: function(application) {
        this.control({
            "#btnAdd": {
                click: this.clickAdd
            },
            "#btnSearch": {
                click: this.onBtnSearch
            },
            "#btnReset": {
                click: this.onBtnReset
            },
            "#btnSave": {
                click: this.clickAddButton
            },
            "#btnEdit": {
                click: this.clickSubmitEdit
            },
            "mygridpanel2 actioncolumn": {
                itemclick: this.clickEdit
            },
            "#btnYes": {
                click: this.clickYes
            },
            "#btnNo": {
                click: this.clickNo
            },
            "#btnClear": {
                click: this.clickClear
            }
        });
    }

});
