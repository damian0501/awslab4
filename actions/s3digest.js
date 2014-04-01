var AWS = require("aws-sdk");

AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){

	callback(null, request.query);
	
}

exports.action = task