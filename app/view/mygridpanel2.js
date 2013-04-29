/*
 * File: app/view/mygridpanel2.js
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

Ext.define('MyApp.view.mygridpanel2', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygridpanel2',

    id: 'mygridpanel2',
    store: 'cultData',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            features: [
                {
                    ftype: 'grouping',
                    groupHeaderTpl: Ext.create('Ext.XTemplate', 
                        '{groupValue:this.renderDueDate}',
                        {
                            renderDueDate: function(date) {
                                var today = Ext.Date.clearTime(new Date()),
                                    todayTime = today.getTime(),
                                    dueDateTime;

                                if(!date) {
                                    return '(No Date)';
                                }
                                dueDateTime = Ext.Date.clearTime(date).getTime();
                                console.log('funtion group ');
                                console.log(dueDateTime);

                                if(dueDateTime === todayTime) {
                                    return '<span style="color:blue;">Today</span>';
                                }
                                if(dueDateTime > todayTime) {
                                    if(dueDateTime === Ext.Date.add(today, Ext.Date.DAY, 1).getTime()) {
                                        return '<span style="color:green;">Tomorrow</span>';
                                    }
                                    if(dueDateTime < Ext.Date.add(today, Ext.Date.DAY, 7).getTime()) {
                                        return '<span style="color:green;">'+Ext.Date.format(date, 'l')+'</span>';

                                    }
                                    var date2=date.getFullYear() === today.getFullYear() ? Ext.Date.format(date, 'D m/d') : Ext.Date.format(date, 'D m/d/Y');
                                    return '<span style="color:green;">'+date2+'</span>'
                                } else {


                                    if(dueDateTime === Ext.Date.add(today, Ext.Date.DAY, -1).getTime()) {

                                        return '<span style="color:red;">Yesterday</span>';

                                    }
                                    if(dueDateTime > Ext.Date.add(today, Ext.Date.DAY, -7).getTime()) {
                                        return '<span style="color:red;">Last '+ Ext.Date.format(date, 'l')+'</span>';
                                    }
                                    var date2=date.getFullYear() === today.getFullYear() ? Ext.Date.format(date, 'D m/d') : Ext.Date.format(date, 'D m/d/Y');
                                    return '<span style="color:red;">'+date2+'</span>'
                                }
                            }
                        }
                    )
                }
            ],
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'timestamp',
                    text: 'วันที่กรอกข้อมูล'
                },
                {
                    xtype: 'datecolumn',
                    width: 90,
                    dataIndex: 'date',
                    text: 'วันที่'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'id',
                    text: 'รายการที่'
                },
                {
                    xtype: 'gridcolumn',
                    width: 166,
                    dataIndex: 'bookBank',
                    text: 'ชื่อธนาคาร'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'nameAcc',
                    text: 'ชื่อบัญชี'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'branch',
                    text: 'สาขาธนาคาร'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'typeBank',
                    text: 'ประเภทบัญชี'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'accountNumber',
                    text: 'เลขที่บัญชี'
                },
                {
                    xtype: 'gridcolumn',
                    width: 146,
                    dataIndex: 'tellerId',
                    text: 'หมายเลขผู้ทำรายการ'
                },
                {
                    xtype: 'gridcolumn',
                    width: 118,
                    dataIndex: 'transaction',
                    text: 'ประเภทรายการ'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'deposit',
                    text: 'ยอดเงิน'
                },
                {
                    xtype: 'actioncolumn',
                    sortable: true,
                    altText: '',
                    items: [
                        {
                            handler: function(view, rowIndex, colIndex, item, e, record, row) {



                                var rec = view.getRecords(view.getNodes())[rowIndex];

                                this.fireEvent('itemclick', this, 'addd',  view, rowIndex, colIndex, item, e,record,row);
                            },
                            icon: 'http://b.dryicons.com/images/icon_sets/luna_blue_icons/png/128x128/edit.png',
                            tooltip: 'edit'
                        },
                        {
                            handler: function(view, rowIndex, colIndex, item, e, record, row) {


                                this.fireEvent('itemclick', this, 'delete', view, rowIndex, colIndex, item, e,record,row);

                            },
                            icon: 'http://a.dryicons.com/images/icon_sets/luna_blue_icons/png/128x128/delete.png',
                            tooltip: 'detete'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});