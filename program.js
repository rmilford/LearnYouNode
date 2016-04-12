var http = require('http');

http.get(process.argv[2], function (response) {

	var data = '';
  
	response.setEncoding("utf8");

	response.on('data', function (chunk) {
		data += chunk + '\n';
	});
	response.on('end', function() {
		console.log(data);
	});
	response.on('error', function() {
		console.log('err');
	});

	response.resume();

});
