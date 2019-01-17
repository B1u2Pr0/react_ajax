export default {
	fetchFirst: function(url){
		fetch('https://www.reddit.com/r/' + url + '.json').then(function (response) {
			return response.json();
		}).then(function (result) {
			return result.data.children;   
		}); 
	}
}