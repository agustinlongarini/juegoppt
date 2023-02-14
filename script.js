var papel = document.getElementById("papel");
var tijera = document.getElementById("tijera");
var piedra = document.getElementById("piedra");

var papelusu = document.getElementById("papelusu");
var tijerausu = document.getElementById("tijerausu");
var piedrausu = document.getElementById("piedrausu");

var piedramac = document.getElementById("piedramac");
var tijeramac = document.getElementById("tijeramac");
var papelmac = document.getElementById("papelmac");

var signo = document.getElementById("signo");

var reinicio = document.getElementById("botonreinicio");

function elegirJugada() {
    const opciones = ["piedra", "papel", "tijera"];
    return opciones[Math.floor(Math.random() * opciones.length)];
}

function ocultarBotones(){
    piedra.style.display = "none";
    tijera.style.display = "none";
    papel.style.display = "none";
}

papel.addEventListener("click", function(){
    var juegoMaquina = elegirJugada();
    ocultarBotones();
    papelusu.style.display = "block";
    if(juegoMaquina == "piedra"){
        piedramac.style.display = "block";
        document.getElementById("resultado").innerText = "GANASTE";
    } else if(juegoMaquina == "tijera"){
        tijeramac.style.display = "block";
        document.getElementById("resultado").innerText = "PERDISTE";
    } else {
        papelmac.style.display = "block";
        document.getElementById("resultado").innerText = "EMPATE";
    }
    signo.style.display = "none";
    reinicio.style.display = "block";
});

tijera.addEventListener("click", function(){
    var juegoMaquina = elegirJugada();
    ocultarBotones();
    tijerausu.style.display = "block";
    if(juegoMaquina == "piedra"){
        piedramac.style.display = "block";
        document.getElementById("resultado").innerText = "PERDISTE";
    } else if(juegoMaquina == "papel"){
        papelmac.style.display = "block";
        document.getElementById("resultado").innerText = "GANASTE";
    } else {
        tijeramac.style.display = "block";
        document.getElementById("resultado").innerText = "EMPATE";
    }
    signo.style.display = "none";
    reinicio.style.display = "block";
});

piedra.addEventListener("click", function(){
    var juegoMaquina = elegirJugada();
    ocultarBotones();
    piedrausu.style.display = "block";
    if(juegoMaquina == "papel"){
        papelmac.style.display = "block";
        document.getElementById("resultado").innerText = "PERDISTE";
    } else if(juegoMaquina == "tijera"){
        tijeramac.style.display = "block";
        document.getElementById("resultado").innerText = "GANASTE";
    } else {
        piedramac.style.display = "block";
        document.getElementById("resultado").innerText = "EMPATE";
    }
    signo.style.display = "none";
    reinicio.style.display = "block";
});

reinicio.addEventListener("click", function(){
    piedra.style.display = "block";
    tijera.style.display = "block";
    papel.style.display = "block";
    signo.style.display = "block";
    piedramac.style.display = "none";
    tijeramac.style.display = "none";
    papelmac.style.display = "none";
    piedrausu.style.display = "none";
    tijerausu.style.display = "none";
    papelusu.style.display = "none";
    reinicio.style.display = "none";
    document.getElementById("resultado").innerHTML = "";
});


