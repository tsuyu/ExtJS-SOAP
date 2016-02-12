<!DOCTYPE html> 
<html> 
	<head> 
	<title>Cross XML Sample</title> 	
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
	<script src="xml2json.js"></script>
	<script src="jquery.xdomainajax.js"></script>
	<script type="text/javascript" >
$(document).ready(function (){

  
  
$.ajax({
    url: 'http://192.168.1.75:9783/services/licenseapplication_DataService/select_all_licenseapplication_operation',
    dataType: "xml",
    type: 'GET',
    success: function(res) {
                //var myXML = res.responseText;
                // This is the part xml2Json comes in.
                //var JSONConvertedXML = $.xml2json(myXML);
               
                alert("hi");
               // for(var i = 0; i < JSONConvertedXML.licenseapplicationCollection.licenseapplication.length; i++){
               //     alert(JSONConvertedXML.licenseapplicationCollection.licenseapplication[i].id);
                      
               // }
    }
});
});
	</script>
</head> 

<body>

</body>
</html>