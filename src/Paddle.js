   
export default class Paddle {
 constructor(boardHeight, x, controls, score) {
  this.width = 5;
  this.height = 60;
  this.x = x;
  this.y = (boardHeight / 2) - (this.height / 2);
  this.speed = 5;
  this.maxHeight = boardHeight;
  this.score = 0;
  
  document.addEventListener('keydown', event => {
   switch (event.keyCode) {
    case controls.up:
    this.y = Math.max (
     0,
     this.y - this.speed);
    break;
    case controls.down:
    this.y = Math.min (
     this.maxHeight - this.height,
     this.y + this.speed
     );
    break;
    case controls.pause:

  }
});

  
}
scoreMethod() {
 this.score += 1;
 console.log(this.score);
}

render(ctx) { 
 ctx.fillStyle = 'pink';
 ctx.fillRect(
  this.x, this.y,
  this.width, this.height
  );

}
}
