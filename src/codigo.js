//Codigo en JS
//***********Librerias*/
const socket = io();

//Declaraciones
//console.log('Hola mundo');
let outputDOM = document.getElementById('out');
let btnDOM = document.getElementById('btn1');
let inputDOM = document.getElementById('in_box');
let inputDOM2 = document.getElementById('in_box2');
let Reloj = document.getElementById('reloj');
let popInfo = document.getElementById('btn2');
let ovlInfo = document.getElementById('overlay-info');
let winInfo = document.getElementById('pop_info');
let closeInfo = document.getElementById('btn3');
let msg = document.getElementById('msg-pop')
let A;
let B;
let i = 0;
//************SOCKET.io
socket.on('info', function(data1){
	msg.innerHTML = data1;
	//Primera web del curso, con HTML, JavaScript y CSS
});

//Funciones Propias
btnDOM.addEventListener('click', function(){
	 A = inputDOM.value;
	 B = inputDOM2.value;
	let resultado = operacion(A,B);
	outputDOM.innerHTML = resultado;
	socket.emit('incrementar', 1);//Parte del cliente - nombre y dato
	
});

function operacion(n1, n2) {
	// body...
	return Math.pow(n2,n1)
}
function setHora() {
	// body...
	//C++;
	//let Min=Math.floor(C/60);
	//let Seg = C % 60;
	let d = new Date();
	let Hor = d.getHours();
	let Min = d.getMinutes();
	let Seg = d.getSeconds();
	let Sal = Hor;
	if (Min<10) {
		Sal = Sal + ":0" + Min;
	}
	else{
		Sal = Sal + ":" + Min;
	}
	if (Seg < 10){
		Sal = Sal + ":0" + Seg;
	}
	else{
		Sal = Sal + ":" +Seg;
	}
	Reloj.innerHTML = Sal;
}

function camFondo(){
	if (i==0) {
		i++;
		document.body.style.background = "gray"
	}
	else{
		i=0;
		document.body.style.background = 'white';
	}
}

popInfo.addEventListener('click', function(){
	ovlInfo.classList.add('active');
	winInfo.classList.add('active');
	socket.emit('info', 1);//Parte del cliente
});

closeInfo.addEventListener('click', function(e){
	e.preventDefault();
	ovlInfo.classList.remove('active');
	winInfo.classList.remove('active');
});

//MAIN
setInterval('setHora()', 1000);


/*
Al presionar aceptar cambie el dondo del html a azul(desde Js)
centrar todos los elementos del Html(index.html)
*/