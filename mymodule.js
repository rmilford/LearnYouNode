module.exports = function foo (dirName, fileExt, callbackFunc) {
	var fs = require('fs');
	var path = require('path');
	var returnArray = [];
//	console.log("Wheeee!");
	fs.readdir(dirName, function bar (err, list) {
		if (err)
			return callbackFunc(err);
		for(var i = 0; i < list.length; i++){
			if(path.extname(list[i]) === "." + fileExt){
				returnArray.push(list[i]);	
			}	
		}
		callbackFunc(null,returnArray);
	});
//	console.log("At the end");
}

// bar (callback) {
//        foo(function (err, data) {
//          if (err)
//            return callback(err) // early return

//          // ... no error, continue doing cool things with `data`

//          // all went well, call callback with `null` for the error argument

//          callback(null, data)
//        })
//      }


//     function callback (err, list) {
// 	for(var i = 0; i < list.length; i++){
// 	if(path.extname(list[i]) === "." + process.argv[3]){
// 		console.log(list[i]);	
// 	}	
	
// 	}
