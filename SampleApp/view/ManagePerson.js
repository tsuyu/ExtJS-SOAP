Ext.define('SampleApp.view.ManagePerson', {
	extend: 'Ext.window.Window',
	alias: 'widget.managePerson',
	title: 'Edit Person',
	layout: 'fit',
	width: 300,
	modal: true,
	autoShow: true,
	initComponent: function() {
		this.items = [
			{
				xtype: 'form',
				items: [
					{
						xtype: 'textfield',
						name : 'applicationType',
						fieldLabel: 'Application Type',
						allowBlank: false
					},
					{
						xtype: 'textfield',
						name : 'applicantName',
						fieldLabel: 'Applicant Name',
						allowBlank: false
					},
					{
						xtype: 'textfield',
						name : 'nric',
						fieldLabel: 'NRIC',
						allowBlank: false
					}
				],
				defaults:{
					padding: 5
				}
			}
		];
		this.buttons = [
			{
				text: 'Save',
				action: 'save'
			},
			{
				text: 'Delete',
				action: 'delete'
			},
			{
				text: 'Cancel',
				scope: this,
				handler: this.close
			}
		];
		this.callParent(arguments);
	}
});