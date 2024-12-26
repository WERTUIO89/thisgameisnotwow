const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  
  requestAnimationFrame(gameLoop);
}

gameLoop();

class Player {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speed = 5;
  }

  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  move(direction) {
    switch(direction) {
      case 'up': this.y -= this.speed; break;
      case 'down': this.y += this.speed; break;
      case 'left': this.x -= this.speed; break;
      case 'right': this.x += this.speed; break;
    }
  }
}

const player = new Player(50, 50, 50, 50, 'blue');

document.addEventListener('keydown', (event) => {
  switch(event.key) {
    case 'ArrowUp': player.move('up'); break;
    case 'ArrowDown': player.move('down'); break;
    case 'ArrowLeft': player.move('left'); break;
    case 'ArrowRight': player.move('right'); break;
  }
});
