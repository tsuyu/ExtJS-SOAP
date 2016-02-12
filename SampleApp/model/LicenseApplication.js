Ext.define('SampleApp.model.LicenseApplication', {
	extend: 'Ext.data.Model',
	fields: [
		{
			name: 'id',
			type: 'int'
		},
		{
			name: 'applicationType',
			type: 'string'
		},
		{
			name: 'applicantName',
			type: 'string'
		},
		{
			name: 'nric',
			type: 'string'
		}
	]
});