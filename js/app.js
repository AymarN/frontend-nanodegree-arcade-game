// Enemies our player must avoid
var Enemy = function([x,y],[Max,Min]) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    Enemy_pos = [this.x,this.y];
    this.speed = [(Math.floor(Math.random() *(Max - Min + 1) + Max)), (Math.floor(Math.random() *(Max - Min + 1) + Max))];
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.x > 0 && this.x <=410){
        this.x+= this.speed[0]*dt; 
    }
    else if (this.x >= 410){
        //this.spawn(left);
        this.x = -(Math.floor(Math.random() *(240 - 120 + 1) + 120))*dt; 
    }

    else if (this.x <= 0){
        //this.spawn(right);
        this.x = (Math.floor(Math.random() *(240 - 120 + 1) + 120))*dt; 
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    var sprite = new Image();
    var imgWidth = sprite.width;
    sprite.src = "data:image/png;base64,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";
    ctx.drawImage(sprite, this.x, this.y);
    return imgWidth;
};

/*
Enemy.prototype.spawn = function(direction) {
    Enemy_pos = [this.x,this.y];
    if (direction == right) {
        this.x = (Math.floor(Math.random() *(240 - 120 + 1) + 120))*dt;
    }
    if (direction == left) {
       this.x = -(Math.floor(Math.random() *(240 - 120 + 1) + 120))*dt; 
    }
}
*/

Enemy.prototype.checkCollisions = function() {

}

// Now write your own player class
var Player = function([x,y],[Max,Min]){
    Enemy.call(this,[x,y],[Max,Min]);
    this.pl_speed = [Max,Min];  
};

// This class requires an update(), render() and
// a handleInput() method.
Player.prototype = Object.create(Enemy.prototype);
Player.prototype.constructor = Player;
Player.prototype.update = function(dt) {

    if(this.y == -20) {
        this.y = 400;
        this.x = 200;
    }
    else if(this.x >= 425) {
        this.x = 425;
    }
    else if(this.x <= 0) {
        this.x = 0;
    }
    else if(this.y >445) {
        this.y = 445;
    }
    else {
        //pass
    }
    
};

Player.prototype.render = function() {
    var img = new Image();
    img.src = "data:image/png;base64,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";
    ctx.drawImage(img, this.x, this.y);
};

Player.prototype.handleInput = function(event) {

    switch (event)  
    {

    case "left":
        this.x-= this.pl_speed[0];
        break;
    case "right":
        this.x += this.pl_speed[0];
        break;
    case "up":
        this.y -= this.pl_speed[1];
        break;
    case "down":
        this.y += this.pl_speed[1];
        break;
    default:
        //pass
        break;
    }

}

// Now instantiate your objects.
var enemy = new Enemy([6.5,120],[100,140]);
enemy.update(3);
var enemy2 = new Enemy([10,50],[140,180]);
enemy2.update(3);
var enemy3 = new Enemy([20,200],[90,120]);
enemy3.update(5);
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
allEnemies.push(enemy,enemy2,enemy3);
// Place the player object in a variable called player
var player = new Player([200,400],[30,30]);
player.update(3);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
};
player.handleInput(allowedKeys[e.keyCode]);
});

