let gameState;
let player;
let ai;
let ball;
let playerScore;
let aiScore;
let roundsWonPlayer;
let roundsWonAI;
const paddleWidth = 10;
const paddleHeight = 80;
const ballRadius = 10;
const winningRounds = 2; // Number of rounds needed to win the game

function setup() {
  createCanvas(800, 400);
  
  gameState = "menu";
  
  // Create the pong paddles
  player = new Paddle(0, height / 2 - paddleHeight / 2);
  ai = new Paddle(width - paddleWidth, height / 2 - paddleHeight / 2);
  
  // Create the pong ball
  ball = new Ball(width / 2, height / 2);
  
  // Initialize scores and rounds won
  playerScore = 0;
  aiScore = 0;
  roundsWonPlayer = 0;
  roundsWonAI = 0;
}

function draw() {
  background(0);
  
  if (gameState === "menu") {
    displayMenu();
  } else if (gameState === "play") {
    // Update and display paddles
    player.update(mouseY);
    player.display();
    ai.update(ball.y);
    ai.display();
  
    // Update and display ball
    ball.update();
    ball.display();
  
    // Check for collisions
    ball.checkCollision(player);
    ball.checkCollision(ai);
    
    // Check if the ball is out of bounds
    if (ball.isOutOfBounds()) {
      if (ball.x - ball.radius <= 0) {
        // AI scores a point
        aiScore++;
      } else if (ball.x + ball.radius >= width) {
        // Player scores a point
        playerScore++;
      }
      ball.reset();
    }
    
    // Display the score
    displayScore();
    
    // Check if a player has won the round
    if (playerScore >= winningRounds) {
      roundsWonPlayer++;
      if (roundsWonPlayer >= winningRounds) {
        // Player wins the game
        gameState = "gameover";
      } else {
        // Start a new round
        resetRound();
      }
    } else if (aiScore >= winningRounds) {
      roundsWonAI++;
      if (roundsWonAI >= winningRounds) {
        // AI wins the game
        gameState = "gameover";
      } else {
        // Start a new round
        resetRound();
      }
    }
  } else if (gameState === "gameover") {
    displayGameOver();
  }
}

function displayMenu() {
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Pong Game", width / 2, height / 2 - 50);
  textSize(20);
  text("Click to start", width / 2, height / 2);
}

function displayGameOver() {
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  if (roundsWonPlayer >= winningRounds) {
    text("Player Wins!", width / 2, height / 2 - 50);
  } else {
    text("AI Wins!", width / 2, height / 2 - 50);
  }
  textSize(20);
  text("Click to restart", width / 2, height / 2);
}

function displayScore() {
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(playerScore, width / 4, 50);
  text(aiScore, (3 * width) / 4, 50);
}

function mousePressed() {
  if (gameState === "menu") {
    gameState = "play";
  } else if (gameState === "gameover") {
    resetGame();
  }
}

function resetRound() {
  gameState = "play";
  player.y = height / 2 - paddleHeight / 2;
  ai.y = height / 2 - paddleHeight / 2;
  ball.reset();
  playerScore = 0;
  aiScore = 0;
}

function resetGame() {
  roundsWonPlayer = 0;
  roundsWonAI = 0;
  resetRound();
}

class Paddle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = paddleWidth;
    this.height = paddleHeight;
    this.color = 255;
    this.speed = 8;
  }
  
  update(targetY) {
    this.y = targetY - this.height / 2;
    
    // Keep paddle within the canvas bounds
    this.y = constrain(this.y, 0, height - this.height);
  }
  
  display() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = ballRadius;
    this.color = 255;
    this.speedX = 4;
    this.speedY = 4;
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    // Reflect ball if it hits the top or bottom edges
    if (this.y - this.radius <= 0 || this.y + this.radius >= height) {
      this.speedY *= -1;
    }
  }
  
  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.radius * 2);
  }
  
  checkCollision(paddle) {
    if (
      this.x + this.radius >= paddle.x &&
      this.x - this.radius <= paddle.x + paddle.width &&
      this.y + this.radius >= paddle.y &&
      this.y - this.radius <= paddle.y + paddle.height
    ) {
      this.speedX *= -1;
    }
  }
  
  isOutOfBounds() {
    return (
      this.x - this.radius <= 0 ||
      this.x + this.radius >= width
    );
  }
  
  reset() {
    this.x = width / 2;
    this.y = height / 2;
    this.speedX = 4;
    this.speedY = 4;
  }
}
