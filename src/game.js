// Game.js
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Settings from './Settings';
import ScoreBoard from './scoreboard';

export default class Game {
   constructor() {
      const canvas = document.getElementById('game');
      this.width = canvas.width;
      this.height = canvas.height;
      this.context = canvas.getContext('2d');
      this.context.fillStyle = 'white';
      this.scoreBoard1= new ScoreBoard(240, 30);
      this.scoreBoard2= new ScoreBoard(40, 30);
      this.board = new Board(this.width, this.height);
      this.ball = new Ball(this.width, this.height);
      this.player1 = new Paddle(this.height, Settings.gap, Settings.p1keys);
      this.player2 = new Paddle(this.height, this.width - 4 - Settings.gap, Settings.p2keys);

   
   }
   drawLine() {
      this.context.setLineDash([10, 10]);
      this.context.beginPath();
      this.context.moveTo(this.width / 2, 0);
      this.context.lineTo(this.width / 2, this.height);
      this.context.strokeStyle = "white";
      this.context.stroke();
   }
   render() {
      this.drawLine();
      this.board.render(this.context);
      this.player1.render(this.context);
      this.player2.render(this.context);
      this.ball.render(this.context, this.player1, this.player2);
      this.scoreBoard1.render(this.context, this.player1);
      this.scoreBoard2.render(this.context, this.player2);
      
            // add here
         }
      }

