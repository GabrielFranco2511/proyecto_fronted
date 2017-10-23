let texto = document.getElementById('search').addEventListener('click', (e) => {
	e.preventDefault();
	traducir();	
});


	function traducir () {
	let ttraducir = document.getElementById('input').value;
	console.log(ttraducir);
	const apiURL = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20171017T214207Z.f7f752d7f503fc42.45605aa635960340375a5dc4ba2b12a2e7ca6e84&text=' + ttraducir + '&lang=es-en&format=plain&option=0&callback=traducir';
	const xhr = new XMLHttpRequest();
	xhr.open('get', apiURL, true);
	xhr.onload = () => {
	// let json = JSON.parse (xhr.responseText);
	console.log(xhr.responseText);
};
	xhr.send();
	
}