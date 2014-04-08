var AWS = require("aws-sdk");

var BUCKET_PARAM_NAME = "bucket";
var KEY_PARAM_NAME = "key";



AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){
	var bucket = request.query[BUCKET_PARAM_NAME];
	var key = request.query[KEY_PARAM_NAME];
	callback(null, request.query);
	
}

exports.action = task