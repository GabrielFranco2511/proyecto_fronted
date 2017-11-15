let b = document.getElementById('btn2');
let texto = document.getElementById('search');
var expCorreo= /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
var expUsuario = /^[a-z0-9ü][a-z0-9ü_]{3,8}$/;


if (b || texto) {
  b.addEventListener('click', (f) => {
  f.preventDefault();
  desaparecer();
  aparecer(); 
  ocultar();
});

texto.addEventListener('click', (e) => {
  e.preventDefault();
  traducir(); 
});



} else {
     document.getElementById('btn').addEventListener('click', (f) => {
      var nombre = document.getElementById('usuario').value;
      var clave = document.getElementById('clave').value;
      var email = document.getElementById('mail').value;
      var texto1 = document.getElementById('textarea').value;


    
    if (nombre.length == 0) 
    {
      alert('Rellene el campo de nombre');
    

    }

    else if (!expUsuario.test(nombre))
    {
      alert('Escribe un usuario valido');
      

    }

    

    if (email.length == 0)
    {
      alert('Rellene el campo de correo')
    
    }

    else if (!expCorreo.test(email))
    {
      alert ('Escribe un correo valido');
    

    }

    if (clave.length == 0)
    {
      alert('Rellene el campo password');
    
    }

    if (texto1.length == 0)
    {
      alert('Dejanos un mensaje');
    
    }


    });
    

}
 



function desaparecer(){
        var des =document.getElementById('hero');
        if (des.style.display == "none") {
            des.style.display = "block";
        } else {
            des.style.display = "none";
        }        
    }

function aparecer(){
		var apa =document.getElementById('oculto');
		var div1 = document.getElementById('div1');
		var h = document.getElementById('h');
        if (apa.style.display == "block") {
            apa.style.display = "none";
            div1.style.display = "none";
            h.style.display = "none";
        } else {
            apa.style.display = "block";
            h.style.display = "block";

        }       
}

function ocultar(){


   var capa=document.getElementById("h");
   var capah=document.getElementById("hh");
   var capa1=document.getElementById("1");
   var capa11=document.getElementById("11");
   var capa2=document.getElementById("2");
   var capa22=document.getElementById("22");
   var capa3=document.getElementById("3");
   var capa33=document.getElementById("33");
   var capa4=document.getElementById("4");
   var capa44=document.getElementById("44");
   
   capa.style.display="none";
   capah.style.display="none";
   capa1.style.display="none";
   capa11.style.display="none";
   capa2.style.display="none";
   capa22.style.display="none";
   capa3.style.display="none";
   capa33.style.display="none";
   capa4.style.display="none";   
   capa44.style.display="none";  
   
   capa.style.visibility="hidden";
   capah.style.visibility="hidden";
   capa1.style.display="hidden";
   capa11.style.display="hidden";
   capa2.style.display="hidden";
   capa22.style.display="hidden";
   capa3.style.display="hidden";
   capa33.style.display="hidden"; 
   capa4.style.display="hidden";   
   capa44.style.display="hidden";   


}





	function traducir () {
		let ttraducir = document.getElementById('input').value;
		iorigen1 = document.getElementById('idioma1')
		iorigen = iorigen1.value;
		idestino1 =  document.getElementById('idioma2')
		idestino  =  idioma2.value;
		const apiURL = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20171017T214207Z.f7f752d7f503fc42.45605aa635960340375a5dc4ba2b12a2e7ca6e84&lang='+ iorigen + "-" + idestino + '&text=' +  ttraducir;	
		const xhr = new XMLHttpRequest();
			xhr.open('get', apiURL, true);
			xhr.onload = () => {
			let json = JSON.parse (xhr.responseText);
			let ttext = json.text
				// console.log(ttext);
				document.getElementById('mostrar').innerHTML = "<h2>" + ttext  + "</h2>";
};



	xhr.send();
	


} 













