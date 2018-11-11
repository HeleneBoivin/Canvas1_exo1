var c = document.getElementById('mon_canvas');
var ctx = c.getContext("2d");

ctx.beginPath();      // Début du chemin
ctx.moveTo(100,300);  // point de départ
ctx.lineTo(250,300);  //Tracé
ctx.lineTo(250,150);
ctx.lineTo(100,150);
ctx.fillStyle = "#A6D7E6";
ctx.fill();            // Application du remplissage

// Maison
ctx.beginPath();      // Début d'un autre chemin
ctx.moveTo(100,150);
ctx.lineTo(175,50);
ctx.lineTo(250,150);
ctx.fillStyle = "#D18638";
ctx.fill();

// Porte
ctx.beginPath();      // Début d'un autre chemin
ctx.moveTo(165,300);
ctx.lineTo(165,260);
ctx.lineTo(190,260);
ctx.lineTo(190,300);
ctx.fillStyle = "purple";
ctx.fill();

// Fenếtre
ctx.beginPath();      // Début d'un autre chemin
ctx.moveTo(125,200);
ctx.lineTo(145,200);
ctx.lineTo(145,180);
ctx.lineTo(125,180);
ctx.fillStyle = "white";
ctx.fill();            // Application du remplissage

// Fenếtre
ctx.beginPath();      // Début d'un autre chemin
ctx.moveTo(225,200);
ctx.lineTo(205,200);
ctx.lineTo(205,180);
ctx.lineTo(225,180);
ctx.fillStyle = "white";
ctx.fill();            // Application du remplissage
