let text, btn
// Accion al presionar el boton

		// document.getElementById('btn').addEventListener('click', (e) => { 
		e.preventDefault();
		var text = document.getElementById('input').value;
		text = encodeURIComponent(text);
		console.log(text);
		var url = "http://translate.google.com/translate_tts?tl=en&q=text" + text + "client=tw-ob﻿";
		document.getElementsByid("dimelo")[0].getAttribute("src", url).play();
});