const PLAYER = document.querySelector(".player");
const END = document.querySelector(".end");
const WALLS = document.querySelectorAll(".wall");

document.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  movePlayer(event.key);
}

function movePlayer(key) {
  const leftWall = parseInt(window.getComputedStyle(PLAYER).getPropertyValue("left"));
  const topWall = parseInt(window.getComputedStyle(PLAYER).getPropertyValue("top"));

  switch (key) {
    case "ArrowUp":
      PLAYER.style.top = `${topWall - 20}px`;
      break;
    case "ArrowDown":
      PLAYER.style.top = `${topWall + 20}px`;
      break;
    case "ArrowLeft":
      PLAYER.style.left = `${leftWall - 20}px`;
      break;
    case "ArrowRight":
      PLAYER.style.left = `${leftWall + 20}px`;
      break;
  }

  checkCollision();
  checkWin();
}

function checkCollision() {
  WALLS.forEach((wall) => {
    if (isColliding(PLAYER, wall)) {
      alert("Você perdeu!");
      location.reload();
    }
  });
}

function checkWin() {
  if (isColliding(PLAYER, END)) {
    alert("Você ganhou!");
    location.reload();
  }
}

function isColliding(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.bottom < bRect.top ||
    aRect.top > bRect.bottom ||
    aRect.right < bRect.left ||
    aRect.left > bRect.right
  );
}
