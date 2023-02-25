const player = document.getElementById("player");
const end = document.getElementById("end");
const walls = document.querySelectorAll(".wall");

document.addEventListener("keydown", function(event) {
  movePlayer(event.key);
});

function movePlayer(key) {
  const leftWall = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
  const topWall = parseInt(window.getComputedStyle(player).getPropertyValue("top"));

  switch(key) {
    case "ArrowUp":
      player.style.top = (topWall - 20) + "px";
      break;
    case "ArrowDown":
      player.style.top = (topWall + 20) + "px";
      break;
    case "ArrowLeft":
      player.style.left = (leftWall - 20) + "px";
      break;
    case "ArrowRight":
      player.style.left = (leftWall + 20) + "px";
      break;
  }

  checkCollision(player);
  checkWin();
}

function checkCollision(player) {
  walls.forEach(function(wall) {
    if (isColliding(player, wall)) {
      alert("Você perdeu!");
      location.reload();
    }
  });
}

function checkWin() {
  if (isColliding(player, end)) {
    alert("Você ganhou!");
    location.reload();
  }
}

function isColliding(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    (aRect.bottom < bRect.top) ||
    (aRect.top > bRect.bottom) ||
    (aRect.right < bRect.left) ||
    (aRect.left > bRect.right)
  );
}
