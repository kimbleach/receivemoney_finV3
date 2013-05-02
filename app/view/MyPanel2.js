/*
 * File: app/view/MyPanel2.js
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

Ext.define('MyApp.view.MyPanel2', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mypanel2',

    requires: [
        'MyApp.view.mygridpanel2'
    ],

    height: 250,
    title: 'My Panel',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'mygridpanel2'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'tbtext',
                            text: 'ค้นหา  :  '
                        },
                        {
                            xtype: 'textfield',
                            id: 'txtSearch',
                            itemId: 'txtSearch',
                            width: 221,
                            fieldLabel: '',
                            emptyText: 'ค้นหาจากชื่อธนาคาร'
                        },
                        {
                            xtype: 'button',
                            height: 25,
                            id: 'btnSearch',
                            itemId: 'btnSearch',
                            width: 59,
                            text: 'ค้นหา'
                        },
                        {
                            xtype: 'button',
                            height: 25,
                            id: 'btnReset',
                            itemId: 'btnReset',
                            width: 59,
                            text: 'คืนค่า'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});