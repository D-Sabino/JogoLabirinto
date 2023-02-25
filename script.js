var mazeWidth = 10;
var mazeHeight = 10;
var startPosX = 0;
var startPosY = 0;
var endPosX = mazeWidth - 1;
var endPosY = mazeHeight - 1;
var currentPosX = startPosX;
var currentPosY = startPosY;

var player = document.getElementById("player");
var end = document.getElementById("end");
var walls = document.getElementsByClassName("wall");

function movePlayer(event) {
  switch (event.keyCode) {
    case 37: // Left arrow key
      if (currentPosX > 0 && maze[currentPosY][currentPosX - 1] !== "W") {
        currentPosX--;
        updatePlayerPosition();
      }
      break;
    case 38: // Up arrow key
      if (currentPosY > 0 && maze[currentPosY - 1][currentPosX] !== "W") {
        currentPosY--;
        updatePlayerPosition();
      }
      break;
    case 39: // Right arrow key
      if (currentPosX < mazeWidth - 1 && maze[currentPosY][currentPosX + 1] !== "W") {
        currentPosX++;
        updatePlayerPosition();
      }
      break;
    case 40: // Down arrow key
      if (currentPosY < mazeHeight - 1 && maze[currentPosY + 1][currentPosX] !== "W") {
        currentPosY++;
        updatePlayerPosition();
      }
      break;
  }
  
  checkCollisions();
}


function checkCollisions() {
  // Verifica se o jogador chegou ao fim do labirinto
  if (player.offsetLeft == end.offsetLeft && player.offsetTop == end.offsetTop) {
    alert("Parabéns, você venceu!");
  }

  // Verifica se o jogador colidiu com uma parede
  for (var i = 0; i < walls.length; i++) {
    if (player.offsetLeft == walls[i].offsetLeft && player.offsetTop == walls[i].offsetTop) {
      alert("Você bateu em uma parede! Tente novamente.");
      resetGame();
    }
  }
}

function movePlayer(event) {
  switch (event.keyCode) {
  case 37: // Left arrow key
  if (
  currentPosX > 0 &&
  maze[currentPosY][currentPosX - 1] !== "W"
  ) {
  currentPosX--;
  updatePlayerPosition();
  }
  break;
  case 38: // Up arrow key
  if (
  currentPosY > 0 &&
  maze[currentPosY - 1][currentPosX] !== "W"
  ) {
  currentPosY--;
  updatePlayerPosition();
  }
  break;
  case 39: // Right arrow key
  if (
  currentPosX < mazeWidth - 1 &&
  maze[currentPosY][currentPosX + 1] !== "W"
  ) {
  currentPosX++;
  updatePlayerPosition();
  }
  break;
  case 40: // Down arrow key
  if (
  currentPosY < mazeHeight - 1 &&
  maze[currentPosY + 1][currentPosX] !== "W"
  ) {
  currentPosY++;
  updatePlayerPosition();
  }
  break;
  }
  }
  
  function updatePlayerPosition() {
  var player = document.getElementById("player");
  player.style.left = currentPosX * tileSize + "px";
  player.style.top = currentPosY * tileSize + "px";
  
  if (currentPosX === endPosX && currentPosY === endPosY) {
  alert("Congratulations, you won!");
  initializeGame();
  }
  }
  
  function initializeGame() {
  maze = generateMaze(mazeWidth, mazeHeight);
  currentPosX = startPosX;
  currentPosY = startPosY;
  renderMaze();
  updatePlayerPosition();
  }
  
  // Initialize the game
  initializeGame();