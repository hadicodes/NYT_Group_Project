var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "0294899d32474037bd7a7e530f01340f"
});
$.ajax({
  url: queryURL,
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

