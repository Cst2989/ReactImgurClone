var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';

var apiKey = '15a217202c69d6b';

module.exports  = {
	get:function(url){
		return fetch(rootUrl + url,{
			headers:{
				'Authorization': 'Client-ID ' + apiKey
			}
		})
		.then(function(response){
			return response.json();
		})
	}
};

