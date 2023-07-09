# Pong Game
This repository contains a simple implementation of the classic Pong game using p5.js. The game allows a player to play against an AI opponent in a game of Pong. Since the "pong game challenge" is one most programmers will endeavor on at some point in their career, I have devised this piece of code script as inspiration or a blueprint for how to get started making your own pong game. I invite you to try extending the game with additional features, and please leverage the fact that you are working in a 'visual/interactive art' framework. See if you are able to use some of that. Have fun! :-)

<img width="817" alt="image" src="https://github.com/QC20/p5.js-PongGame/assets/36644388/e5a7c68a-1fcd-4cb4-b6cd-ad751a5279e3">

## Game Instructions
- Move the player paddle up and down using the mouse cursor.
- The objective is to hit the ball past the AI paddle and score points.
- Each time the ball goes past the AI paddle, you earn a point.
- If the ball goes past your paddle, the AI earns a point.
- The first player to reach the specified number of points wins the round.
- The game consists of multiple rounds, and the first player to win the specified number of rounds wins the game.
- After each round, the scores are reset, and a new round begins.
- Click on the game screen to restart the game once it's over.

## Code Overview
The code consists of the following main components:

- `setup()` function: Initializes the game by creating the game canvas, paddles, ball, and initializing the scores and rounds won.

- `draw()` function: Is called continuously and handles the game logic and rendering. It updates the paddles, ball, checks for collisions, checks for out-of-bounds ball, updates the scores, and checks for game over conditions.

- `displayMenu()` function: Displays the game menu screen.

- `displayGameOver()` function: Displays the game over screen with the winner's name.

- `displayScore()` function: Displays the current scores of the player and AI.

- `mousePressed()` function: Handles the mouse click event to start the game or restart it.

- `resetRound()` function: Resets the game state to start a new round.

- `resetGame()` function: Resets the game state to start a new game.

- `Paddle` class: Represents a paddle in the game. It has methods to update and display the paddle.

- `Ball` class: Represents the ball in the game. It has methods to update and display the ball, check for collisions with paddles, check if the ball is out of bounds, and reset the ball.

## Dependencies
This game uses the following dependency:

- [p5.js](https://p5js.org/): A JavaScript library for creative coding.

## License
This project is licensed under the [MIT License](LICENSE).

Feel free to use and modify the code to create your own versions of the game.

## Acknowledgements
This game was created based on the [Pong Tutorial](https://p5js.org/examples/interaction-pong.html) from the p5.js website.

The original tutorial was modified and extended to add additional features such as multiple rounds, game over screen, and AI opponent.
