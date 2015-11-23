var router = require('express').Router();
var rp = require('request-promise');
var baseUrl = 'https://api.meetup.com/2/';

router.get('/events', function(req, res) {
	var opts = {
		url : baseUrl + 'events/',
		method : 'GET',
		qs : req.query
	};
  sendRequest(opts, res);
});

function sendRequest(opts, res){
	rp(opts).then(function(response){
		res.send(response);
	}).catch(function(response){
		res.send(response.message);
	});
}
module.exports = router;