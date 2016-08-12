import './game.css';
import Game from './game';
import Settings from './Settings';

var game = new Game();

function gameLoop() {
	game.drawLine();
	game.render();
    setTimeout(gameLoop, Settings.fps);
}
gameLoop();