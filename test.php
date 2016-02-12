<html>
<head>
	<title>Sencha Soap Tester</title>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

        <script type="text/javascript">
$(document).ready(function (){
   // $("#btn392").click(function(){
        $.ajax({
    url: 'http://172.22.42.128:9783/services/licenseapplication_DataService/select_all_licenseapplication_operation?content=application/javascript',
    dataType: 'jsonp',
    jsonp: "callback",
     headers: {
        Accept : "application/xml"
    },
    //data: { q: 'twitter' },
    success: function(data) {
        alert(data.results);
    }
});

   // });
});
</script>

</head>
<body></body>
</html>