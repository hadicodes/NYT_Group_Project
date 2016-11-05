<<<<<<< HEAD
 
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "0294899d32474037bd7a7e530f01340f"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

=======
$.ajax({
		url: query URL,
		method: 'GET'
	})
	.done(function(resp) {
		var results = resp.data;

		for (var i = 0; i < results.length; i++) {
			results[i]
		}
	})
>>>>>>> 92508fd7a3e97fcb55f70926fd5aa7a5c8391192
