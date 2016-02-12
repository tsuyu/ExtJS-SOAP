Ext.define('SampleApp.view.ListView', {
	extend:'Ext.grid.Panel',
	title: 'License Application List',
	alias: 'widget.listView',
	store: 'People',
	columns: [
		{
			text: 'Id',
			flex: 1,
			dataIndex: 'id'
		},
		{
			text: 'Application Type',
			flex: 1,
			dataIndex: 'applicationType'
		},
		{
			text: 'Applicant Name',
			flex: 1,
			dataIndex: 'applicantName'
		},
		{
			text: 'NRIC',
			flex: 1,
			dataIndex: 'nric'
		}
	],
	tools: [{
		type: 'plus'
	}]
});