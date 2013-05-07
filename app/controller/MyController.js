/*
 * File: app/controller/MyController.js
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
        var pnWindow = Ext.getCmp('pnAddListMoneyWindows');
        //console.log("Windows : ", pnWindow);

        this.loadAdd();
        numberClick = 0;

        Ext.getCmp('timeStamp').setValue(new Date());
    },

    onBtnSearch: function(button, e, eOpts) {
        //***
        var valueSearch=Ext.getCmp('txtSearch').getValue();

        var store=Ext.getStore('cultData');

        //console.log(valueSearch.attr);


        store.filterBy(function(rec, id) {

            if(rec.get('bookBank').indexOf(valueSearch)>-1) {     

                console.log('true');

                return true;
            }
            else {

                //   console.log([valueSearch]);
                return false;
            }
        });

    },

    onBtnReset: function(button, e, eOpts) {
        var valueSearch="";

        var store=Ext.getStore('cultData');

        console.log(valueSearch.attr);


        store.filterBy(function(rec, id) {
            //  if(rec.get('BankAccount') === valueSearch) {
            if(rec.get('bookBank').indexOf(valueSearch)>-1) {     
                Ext.getCmp('txtSearch').setValue('');

                console.log('true');

                return true;
            }
            else {

                //   console.log([valueSearch]);
                return false;
            }
        });

    },

    clickAddButton: function(button, e, eOpts) {
        if(Ext.getCmp('pnAddListMoney').getForm().isValid())
        {
            var bankname = Ext.getCmp('pnBankForm').getForm().getValues().bookBank,
                bankno = Ext.getCmp('pnBankForm').getForm().getValues().accountNumber,
                namebank = Ext.getCmp('pnBankForm').getForm().getValues().nameAcc,
                typebank = Ext.getCmp('pnBankForm').getForm().getValues().typeBank,
                branchbank = Ext.getCmp('pnBankForm').getForm().getValues().branch,
                datebank = Ext.getCmp('pnBankForm').getForm().getValues().date,
                timestamp = Ext.getCmp('pnBankForm').getForm().getValues().timeStamp,
                addMoney = Ext.getCmp('pnAddListMoney').getForm().getValues();

            addMoney.bookBank = bankname;
            addMoney.accountNumber = bankno;
            addMoney.nameAcc = namebank;
            addMoney.typeBank = typebank;
            addMoney.branch = branchbank;
            addMoney.date = datebank;
            addMoney.timeStamp = timestamp;

            //Ext.getCmp('bookBank').value
            //Ext.getStore('cultData').add(Ext.getCmp('pnAddListMoney').getForm().getValues());
            Ext.getStore('cultData').add(addMoney);
            Ext.getCmp('pnAddListMoney').getForm().reset();

            //this.getPnAddListMoneyWindows().destroy();


            numberClick = numberClick+1;
            //console.log(numberClick);
            Ext.getCmp('numClick').setValue(numberClick);

        }


    },

    clickSubmitEdit: function(button, e, eOpts) {
        var bankname = Ext.getCmp('pnBankForm').getForm().getValues().bookBank,
            bankno = Ext.getCmp('pnBankForm').getForm().getValues().accountNumber,
            namebank = Ext.getCmp('pnBankForm').getForm().getValues().nameAcc,
            typebank = Ext.getCmp('pnBankForm').getForm().getValues().typeBank,
            branchbank = Ext.getCmp('pnBankForm').getForm().getValues().branch,
            datebank = Ext.getCmp('pnBankForm').getForm().getValues().date,
            //timestamp = Ext.getCmp('pnBankForm').getForm().getValues().timeStamp,
            addMoney = Ext.getCmp('pnAddListMoney').getForm().getValues();
        //console.log(timestamp);

        addMoney.bookBank = bankname;
        addMoney.accountNumber = bankno;
        addMoney.nameAcc = namebank;
        addMoney.typeBank = typebank;
        addMoney.branch = branchbank;
        addMoney.date = datebank;
        //addMoney.timeStamp = timestamp;
        console.log("Deuanz")

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

        var getloadEdit = Ext.getStore('cultData').data.items[rowIndex];

        var store =  Ext.getStore('cultData');


        if (text == 'delete'){
            wnDel.show();



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

        var pnWindow = this.getPnAddListMoneyWindows();

        if(!pnWindow){
            pnWindow = Ext.create('MyApp.view.pnAddListMoneyWindows');
            Ext.getCmp('btnEdit').hidden = true;
            pnWindow.show();
        }
    },

    loadEdit: function(loadInfo, rowIndex) {

        var pnWindow = this.getPnAddListMoneyWindows();

        if(!pnWindow){
            var pnWindow = Ext.create('MyApp.view.pnAddListMoneyWindows',{
                title:"แก้ไขข้อมูลรับเงิน"
            });
        }

        Ext.getCmp('btnSave').hidden = true;
        Ext.getCmp('numClick').hidden = true;
        Ext.getCmp('timeStamp').hidden = true;
        pnWindow.show();

        //numClick

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

    console.log("RStore :: ", rstore.data.nameAcc);

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
