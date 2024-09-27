const startScreen = document.getElementById("startScreen");
const startButton = document.getElementById("startButton");

const pauseButton = document.getElementById("pauseButton");
const muteButton = document.getElementById("muteButton");
const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");

const gameTitle = document.getElementById("gameTitle");

const bgMusic = document.getElementById("bgMusic");

// Get the hit sound effect element
const hitSound = document.getElementById("hitSound");

const WINNING_SCORE = 5;

canvas.width = 800;
canvas.height = 600;

// Paddle
function Paddle(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.dy = 0;
}

// Ball objektet
function Ball(x, y, radius, speed, dx, dy, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.speed = speed;
  this.dx = dx;
  this.dy = dy;
  this.color = color;
}

// Laver player og AI paddles
const player = new Paddle(20, (canvas.height - 100) / 2, 10, 100, "#00ff44"); // Neon color
const ai = new Paddle(
  canvas.width - 30,
  (canvas.height - 100) / 2,
  10,
  100,
  "#00ff44"
); // Neon color

// Lav bolden
const ball = new Ball(
  canvas.width / 2,
  canvas.height / 2,
  10,
  4,
  4,
  4,
  "#00ff44"
); // Neon color

// Player og AI scores
let playerScore = 0;
let aiScore = 0;

// Game state variabler
let paused = false;
let gameInterval;

// Lav glow effekt på paddles
function drawRect(x, y, width, height, color) {
  ctx.shadowBlur = 10; // Neon glow
  ctx.shadowColor = color;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
  ctx.shadowBlur = 0;
}

// Draw circle (ball) with glow
function drawCircle(x, y, radius, color) {
  ctx.shadowBlur = 10; // Neon glow
  ctx.shadowColor = color;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();
  ctx.shadowBlur = 0; // Remove shadow after drawing
}

// Draw the net with glow
function drawNet() {
  ctx.fillStyle = "##00ff44";
  ctx.shadowBlur = 10; // Neon glow
  ctx.shadowColor = "#00ff44";
  ctx.fillRect(canvas.width / 2 - 1, 0, 2, canvas.height);
  ctx.shadowBlur = 0; // Remove shadow after drawing
}

// Draw the scores with glow
function drawScore() {
  ctx.fillStyle = "#00ff44";
  ctx.font = "35px Orbitron, Arial";
  ctx.textAlign = "center";
  ctx.shadowBlur = 10; // Neon glow
  ctx.shadowColor = "#00ff44";
  ctx.fillText(playerScore, canvas.width / 4, 50); // Player score on the left
  ctx.fillText(aiScore, (3 * canvas.width) / 4, 50); // AI score on the right
  ctx.shadowBlur = 0; // Remove shadow after drawing
}

// Play the sound when the ball hits a paddle
function playHitSound() {
  hitSound.currentTime = 0; // Rewind to the start to prevent delay
  hitSound.play(); // Play the sound
}

// Draw everything in the game (net, paddles, ball, score)
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  drawNet(); // Draw the net
  drawRect(player.x, player.y, player.width, player.height, player.color); // Draw player paddle
  drawRect(ai.x, ai.y, ai.width, ai.height, ai.color); // Draw AI paddle
  drawCircle(ball.x, ball.y, ball.radius, ball.color); // Draw the ball
  drawScore(); // Draw the scores
}

// Move the paddles
function movePaddles() {
  player.y += player.dy;

  // Prevent paddles from going out of bounds
  if (player.y < 0) player.y = 0;
  if (player.y + player.height > canvas.height)
    player.y = canvas.height - player.height;

  // Simple AI for the opponent paddle
  ai.y += (ball.y - (ai.y + ai.height / 2)) * 0.05; // Adjust AI speed here
}

// Move the ball
function moveBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;

  // Ball collision with top and bottom walls
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.dy *= -1; // Reverse direction on Y-axis
  }

  // Ball collision with paddles
  let playerPaddle = ball.x < canvas.width / 2 ? player : ai;
  if (
    ball.x - ball.radius < playerPaddle.x + playerPaddle.width &&
    ball.x + ball.radius > playerPaddle.x &&
    ball.y + ball.radius > playerPaddle.y &&
    ball.y - ball.radius < playerPaddle.y + playerPaddle.height
  ) {
    let collidePoint = ball.y - (playerPaddle.y + playerPaddle.height / 2);
    collidePoint = collidePoint / (playerPaddle.height / 2);
    let angleRad = (collidePoint * Math.PI) / 4;
    let direction = ball.x < canvas.width / 2 ? 1 : -1;
    ball.dx = direction * ball.speed * Math.cos(angleRad);
    ball.dy = ball.speed * Math.sin(angleRad);
    ball.speed += 0.5; // Increase speed after each paddle hit

    // Play the hit sound
    playHitSound();
  }

  // Ball goes out of bounds (left or right)
  if (ball.x + ball.radius < 0) {
    aiScore++; // AI scores
    resetBall(); // Reset ball to center
  } else if (ball.x - ball.radius > canvas.width) {
    playerScore++; // Player scores
    resetBall(); // Reset ball to center
  }
}

// Reset the ball to the center
function resetBall() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.speed = 4;
  ball.dx = -ball.dx; // Reverse direction
  ball.dy = 4 * (Math.random() * 2 - 1); // Random vertical direction
}

// Function to check if someone has won the game
function checkWinner() {
  if (playerScore === WINNING_SCORE) {
    endGame("You Win!");
  } else if (aiScore === WINNING_SCORE) {
    endGame("You Lose :(");
  }
}

// Function to end the game and display the result
function endGame(message) {
  // Stop the game loop
  clearInterval(gameInterval);

  // Hide the pause button to prevent interaction
  pauseButton.style.display = "none"; // Hide the Pause button

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Display the game over message
  ctx.fillStyle = "#00ff44"; // Neon green color
  ctx.font = "50px Orbitron, Arial";
  ctx.textAlign = "center";
  ctx.fillText(message, canvas.width / 2, canvas.height / 2);

  // Create a Restart Game button
  const restartButton = document.createElement("button");
  restartButton.innerText = "Restart";
  restartButton.style.marginTop = "20px";
  document.body.appendChild(restartButton);

  // Add event listener to reload the game when restart is clicked
  restartButton.addEventListener("click", () => {
    document.location.reload(); // Reload the game
  });
}

// Game loop
function game() {
  draw(); // Draw game elements (paddles, ball, score, net)
  movePaddles(); // Move paddles
  moveBall(); // Move ball
  checkWinner(); // Check if someone has reached the winning score
}

// Start the game loop
function startGameLoop() {
  gameInterval = setInterval(game, 1000 / 60); // Run the game loop at 60 frames per second
}

// Function to start the game
function startGame() {
  // Hide the start screen
  startScreen.style.display = "none";

  // Show game title, pause button, mute button, and canvas
  gameTitle.style.display = "block"; // Show the game title
  document.getElementById("buttonContainer").style.display = "flex";

  canvas.style.display = "block";

  // Set background music volume and play music
  bgMusic.volume = 0.05; // Lower the volume
  bgMusic.play(); // Play the music

  // Start the game loop
  startGameLoop();
}

// Add event listener to start the game when start button is clicked
startButton.addEventListener("click", startGame);

// Listen for keyboard events to move the player's paddle
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") player.dy = -6;
  else if (event.key === "ArrowDown") player.dy = 6;
});

window.addEventListener("keyup", (event) => {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") player.dy = 0;
});

// Pause functionality
function togglePause() {
  paused = !paused;
  if (paused) {
    clearInterval(gameInterval);
    pauseButton.textContent = "Resume";
  } else {
    startGameLoop();
    pauseButton.textContent = "Pause";
  }
}

pauseButton.addEventListener("click", togglePause);

// Mute functionality
function toggleMute() {
  if (bgMusic.muted) {
    bgMusic.muted = false;
    muteButton.textContent = "Mute Music";
  } else {
    bgMusic.muted = true;
    muteButton.textContent = "Unmute Music";
  }
}

muteButton.addEventListener("click", toggleMute);
