
Ext.define('SampleApp.store.People', {
	extend:'Ext.data.Store',
	model:'SampleApp.model.LicenseApplication',
	autoLoad: true,
        /*proxy: {
        // load using HTTP
        type: 'xml',
        //url: 'http://192.168.1.75:9783/services/licenseapplication_DataService/select_all_licenseapplication_operation',
         url: 'test.xml',
        // the return will be XML, so lets set up a reader
        reader: {
            type: 'xml',
            // records will have an "Item" tag
            record: 'licenseapplication',
            idProperty: 'ID',
            totalRecords: '@total'
        }
    }*/
        proxy: {
        type: 'jsonp',
        callbackKey: 'callback1',
        api: {
           // create: 'ds/contact/createContact.php',
            read: 'http://172.22.42.128:9783/services/licenseapplication_DataService/select_all_licenseapplication_operation??response=application/javascript'
           // update: 'ds/contact/editContact.php',
           // destroy: 'ds/contact/deleteContact.php'
        },
        reader: {
            type: 'json',
            root: 'licenseapplication',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'licenseapplication'
        }
    }
/*
  //  proxy:{
  //  type : 'jsonp',
  //
   //  api: {
           // create: 'ds/contact/createContact.php',
          //  read: 'http://192.168.1.75:9783/services/licenseapplication_DataService/select_all_licenseapplication_operation'
           // update: 'ds/contact/editContact.php',
           // destroy: 'ds/contact/deleteContact.php'
    //    },
 // callbackKey: 'callback',

     //       url: 'http://192.168.1.75:9783/services/licenseapplication_DataService/select_all_licenseapplication_operation',
      //url: 'test.xml',

      //  reader: 'xml'
	/*proxy: {
		type: 'soap',
		url: 'http://localhost:9783/services/licenseapplication_DataService/',
		api: {
			create: 'insert_licenseapplication_operation',
			read: 'select_with_key_licenseapplication_operation',
			update: 'update_licenseapplication_operation',
			destroy: 'delete_licenseapplication_operation'
		},
		soapAction: {
			create: 'http://localhost:9783/services/licenseapplication_DataService/insert_licenseapplication_operation',
			read: 'http://localhost:9783/services/licenseapplication_DataService/select_with_key_licenseapplication_operation',
			update: 'http://localhost:9783/services/licenseapplication_DataService/update_licenseapplication_operation',
			destroy: 'http://localhost:9783/services/licenseapplication_DataServicedelete_licenseapplication_operation'
		},
		operationParam: 'operation',
		extraParams: {
			//'Author': 'Sheldon'
		},
		//targetNamespace: 'http://localhost:9783/services/licenseapplication_DataService/',
		 reader: {
                type: 'json',
                record: 'licenseapplication',
                //idProperty: 'ASIN',
                namespace: 'licenseapplication'
            }
     *
     *}
     */
	
});