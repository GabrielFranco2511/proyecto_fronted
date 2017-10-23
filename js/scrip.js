	document.getElementById('search').addEventListener('click', (e) => {
	e.preventDefault();
	captura();	
});


	function captura() {
	let searchTerm = document.getElementById('searchTerm').val;
	var url =  "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
	const xhr = new XMLHttpRequest();
	xhr.open('get', url, true);
		xhr.onload = () => {
			let json = JSON.parse(xhr.responseText);	
			console.log(json); 
		};

	}
