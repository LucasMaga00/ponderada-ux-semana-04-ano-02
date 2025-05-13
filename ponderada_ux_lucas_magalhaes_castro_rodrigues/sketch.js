// Quadrado Vivo - Uma animação interativa com transformações geométricas
// Autor: Lucas Magalhães Castro Rodrigues

let angle = 0;          // Ângulo de rotação
let scaleFactor = 1;    // Fator de escala

function setup() {
  createCanvas(600, 400);  // Define o tamanho do canvas
  rectMode(CENTER);        // Desenha os retângulos a partir do centro
}

function draw() {
  background(30);  // Cor de fundo

  // Salva o estado atual do desenho
  push();  

  // === TRANSFORMAÇÕES ===
  translate(mouseX, mouseY);   // Move a origem para a posição do mouse
  rotate(angle);               // Aplica rotação
  scale(scaleFactor);          // Aplica escala

  // === DESENHO ===
  fill(255, 100, 100);         // Cor de preenchimento
  stroke(255);                 // Cor da borda
  rect(0, 0, 100, 100);        // Quadrado central

  // Restaura o estado do desenho para evitar acúmulo de transformações
  pop();
}

// === INTERAÇÕES COM O TECLADO ===
function keyPressed() {
  if (key === 'r' || key === 'R') {
    angle += PI / 8;  // Rotaciona 22.5 graus
  } else if (key === 's' || key === 'S') {
    scaleFactor += 0.1;  // Aumenta a escala
  } else if (key === 'd' || key === 'D') {
    scaleFactor = max(0.1, scaleFactor - 0.1);  // Diminui a escala, mínimo 0.1
  }
}
