const pacMen = []; // This array holds all the pacmen

function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

function makePac() {
  let velocity = setToRandom(10); // Speed
  let position = setToRandom(window.innerWidth - 100); // Position within window

  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = './images/PacMan1.png';
  newimg.width = 100;

  // Set the position
  newimg.style.left = position.x + 'px';
  newimg.style.top = position.y + 'px';

  // Add image to game
  game.appendChild(newimg);

  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x + 'px';
    item.newimg.style.top = item.position.y + 'px';
  });
  requestAnimationFrame(update); // smoother animation
}

function checkCollisions(item) {
  if (
    item.position.x + item.newimg.width >= window.innerWidth ||
    item.position.x <= 0
  ) {
    item.velocity.x *= -1;
  }
  if (
    item.position.y + item.newimg.height >= window.innerHeight ||
    item.position.y <= 0
  ) {
    item.velocity.y *= -1;
  }
}

function makeOne() {
  pacMen.push(makePac());
}

// For testing purposes
if (typeof module !== 'undefined') {
  module.exports = { checkCollisions, update, pacMen, makePac };
}
