import Game from './models/game.js';

class GameController {
    constructor(game) {
        this.game = game;
        this.startButton = document.getElementById('start');
        this.stopButton = document.getElementById('pause');
        this.continueButton = document.getElementById('continue');
        this.keyDownHandler = this.keyDownHandler.bind(this);

        this.startButton.addEventListener('click', () => {
            this.game.start();
        });
        this.continueButton.addEventListener('click', () => {
            this.game.continue();
        });
        this.stopButton.addEventListener('click', () => {
            this.game.setPause();
        });

        document.addEventListener('keydown', this.keyDownHandler);
    }

    keyDownHandler(e) {
        if (e.key === 'Right' || e.key === 'ArrowRight') {
            this.game.pacMan.setNewDirection(Game.DIRECTION.RIGHT);
        } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
            this.game.pacMan.setNewDirection(Game.DIRECTION.LEFT);
        } else if (e.key === 'Up' || e.key === 'ArrowUp') {
            this.game.pacMan.setNewDirection(Game.DIRECTION.UP);
        } else if (e.key === 'Down' || e.key === 'ArrowDown') {
            this.game.pacMan.setNewDirection(Game.DIRECTION.DOWN);
        }
    }
}

export default GameController;
