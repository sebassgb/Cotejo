// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAS7jZPxJGfMUz_HWPyOWHabLwLNcY8nqE",
    authDomain: "cotejo-4e99d.firebaseapp.com",
    databaseURL: "https://cotejo-4e99d.firebaseio.com",
    storageBucket: "cotejo-4e99d.appspot.com",
    messagingSenderId: "921281214360"
  };


firebase.initializeApp(config);  // objeto para aceder a la bd
var database = firebase.database(); // objeto para hacer uso de la bd



// funcion que crea el evento con los datos basicos
function crearEventoBasico(creador,eventoo) {
	var Deporte=eventoo.deporte;
	var fecha=eventoo.dia+" "+eventoo.mes+" "+eventoo.year;
	var hora=eventoo.hora +" "+eventoo.minuto;
	// personas suscritas es un array con las personas inscritas en el evento
	// clave primaria es : deporte+creador+fecha+hora.
	
	// 1) ingreso el evento creado a la lista de eventos del usuario 
	var eventoscreados="eventosCreados";	
	var pkMisEventos=Deporte+"/"+creador+" "+fecha+" "+hora;
	var referencia="usuarios/"+creador+"/"+eventoscreados+"/"+Deporte;
	console.log(referencia);

	var eventocreado={
		pkevento:pkMisEventos
	}

	database.ref(referencia).update(eventocreado);

	// 2) ingreso a la bd de eventos el evento
	// creo la clave primaria	
	var pkEvento=Deporte+"/"+creador+" "+fecha+" "+hora+"/"+"informacion";
	database.ref("Eventos/"+pkEvento).update(eventoo);

}

