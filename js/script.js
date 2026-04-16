var canvas_tres = document.getElementById("lienzo-tres");
var canvas_cuatro = document.getElementById("lienzo-cuatro");
var canvas_cinco = document.getElementById("lienzo-cinco");
var canvas_seis = document.getElementById("lienzo-seis");

// ---------------------------------------------------
const canvas = document.getElementById("lienzo-dos");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "media/icons/rip_icon.png";

img.onload = function() {
    ctx.drawImage(img, 0, 0, 150, 150);
}
// ---------------------------------------------------


if (canvas_tres.getContext){
    console.log("Si se soporta el contexto 3");

    var ctx_3 = canvas_tres.getContext("2d");

    ctx_3.fillStyle = "rgb(200,0,0)";
    ctx_3.fillRect(10,10,55,55); // fillRect(posX, posY, width, height)
    
    ctx_3.fillStyle = "rgba(0,0,200,0.5)";
    ctx_3.fillRect(30,30,55,50);

    ctx_3.fillStyle = "rgba(0,200,0,0.5)";
    ctx_3.fillRect(50,50,55,50);
}
else{
    console.log("NO se soporta el contexto 3");
}

if (canvas_cuatro.getContext){
    console.log("Si se soporta el contexto 4");

    var ctx_4 = canvas_cuatro.getContext("2d");

    ctx_4.beginPath(); // Nuevo trazado
    ctx_4.moveTo(5,5); // Coloca el puntero en la posición dada
    ctx_4.lineTo(125,125); // Traza la linea imaginaria hasta la posición dada
    ctx_4.strokeStyle = "#FFFF"; // Asigna un color
    ctx_4.stroke(); // Dibuja el trazado que inicialmente era imaginario
}

if (canvas_cinco.getContext){
    console.log("Si se soporta el contexto 5");
}

if (canvas_seis.getContext){
    console.log("Si se soporta el contexto 6");
}