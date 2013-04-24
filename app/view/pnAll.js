/*
 * File: app/view/pnAll.js
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

Ext.define('MyApp.view.pnAll', {
    extend: 'Ext.container.Viewport',

    requires: [
        'MyApp.view.pnSearch',
        'MyApp.view.MyPanel2',
        'MyApp.view.MyToolbar'
    ],

    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'mypanel',
                    flex: 1,
                    region: 'north'
                },
                {
                    xtype: 'mypanel2',
                    flex: 3,
                    region: 'center'
                },
                {
                    xtype: 'mytoolbar2',
                    region: 'south'
                }
            ]
        });

        me.callParent(arguments);
    }

});