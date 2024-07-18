import GameModel from './models/game.js';
import GameView from './gameView.js';
import GameController from './gameController.js';

const game = new GameModel();
new GameController(game);
new GameView(game);
