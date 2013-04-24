/*
 * File: app.js
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

//@require @packageOverrides
Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    models: [
        'cultMember',
        'cultMemberBalance',
        'cultMemberLoanBalance',
        'cultMemberS5',
        'cultMemberS12',
        'cultData',
        'depositTypeModel'
    ],
    stores: [
        'cultMemberStore',
        'cultMemberBalanceStore',
        'cultMemberLoanBalanceStore',
        'cultMemberS5Store',
        'cultMemberS12Store',
        'cultData',
        'depositType'
    ],
    views: [
        'pnAll',
        'pnSearch',
        'pnGrid',
        'MyToolbar',
        'pnAddListMoneyWindows',
        'mygridpanel2',
        'MyPanel2',
        'wnDelete'
    ],
    autoCreateViewport: true,
    controllers: [
        'MyController'
    ],
    name: 'MyApp'
});
