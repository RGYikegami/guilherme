function setup() { 
  createCanvas(400, 400);
                  
  x = random(400);
  y = random(400);
  x = int(x);
  y = int(y);
  }
  function draw(){ 
  background('black');
  x = x + random(-10, 10);
  y = y + random(-10, 10);
  //delimitar para não sair da tela
  x = constrain(x, 0, 400);
  y = constrain(y, 0, 400);
  //circle(x, y, 10);
  let distanciaX;
  let distanciaY;
  let distancia;
  distanciaX = mouseX - x;
  distanciaY = mouseY - y;
  //teorema de pitágoras - trigometria 
  distancia= sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
  console.log(distancia);
     fill(color(100 , 50, 250));
  circle(mouseX, mouseY, distancia);
    function draw(blue){
    }
  if (distancia < 3) { 
    text("Encontrei", 200, 200); 
    noLoop();
                     } 
}