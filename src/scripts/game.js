import Enemy from './enemy';
import Player from './player'
import Attack from "./attack";
import Timer from './timer';

document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("game-canvas");
    canvas.width = 500;
    canvas.height = 500;
    canvas.addEventListener('mousedown', movePlayer)
    setInterval(updateTime, 1000)
    setInterval(play, 1000/100);

    // e.clientX - canvas.offsetLeft // gives x coordinate of canvas
    // e.clientY - canvas.offsetTop // gives y coordinate of canvas

    let player = new Player()
    let timer = new Timer()
    let mouseX = 250
    let mouseY = 250
    let gameOver = false 

    let enemy1 = new Enemy()
    let enemy2 = new Enemy()
    let enemy3 = new Enemy()
    let enemy4 = new Enemy()
    let enemy5 = new Enemy()
    
    let enemies = [enemy1, enemy2, enemy3, enemy4, enemy5]

    let counter = 0
    let attacks = []

    function updateTime(){
        if (!gameOver) {
            timer.tick()
            document.getElementById("timer").innerHTML = timer.getTime()
        }
    }

    function movePlayer(e) {
        mouseX = e.clientX - canvas.offsetLeft
        mouseY = e.clientY - canvas.offsetTop
        let deltaX = Math.abs(mouseX - player.x)
        let deltaY = Math.abs(mouseY - player.y)
        let hypo = Math.sqrt(deltaX*deltaX + deltaY*deltaY)
        player.xVelocity = deltaX / hypo
        player.yVelocity = deltaY / hypo
    }

    function play() {
        if (!gameOver) {
            if (counter === 500) counter = 0;
        
            const ctx = canvas.getContext("2d");
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        
            if (player.x < mouseX) {
                player.x+= player.xVelocity
            } 
            if (player.x > mouseX) {
                player.x-= player.xVelocity 
            } 
            if (player.y < mouseY) {
                player.y+= player.yVelocity 
            } 
            if (player.y > mouseY) {
                player.y-= player.yVelocity 
            } 
            
    
            // draw player
            ctx.beginPath();
            ctx.arc(player.x, player.y, 20, 0, 2 * Math.PI, true);
            ctx.strokeStyle = "green";
            ctx.lineWidth = 5;
            ctx.stroke();
            ctx.fillStyle = "blue";
            ctx.fill();
    
    
            // draw each enemy
            enemies.forEach(enemy => {
                ctx.beginPath();
                ctx.arc(enemy.x, enemy.y, 20, 0, 2 * Math.PI, true);
                ctx.strokeStyle = "red";
                ctx.lineWidth = 5;
                ctx.stroke();
                ctx.fillStyle = "red";
                ctx.fill();
    
                if (enemy.interval === counter) {
                    attacks.push(new Attack(enemy.x, enemy.y, player.x, player.y, enemy.speed)) 
                }
            })
    
            attacks.forEach(attack => {
                attack.move() 
                ctx.beginPath();
                ctx.arc(attack.x, attack.y, 10, 0, 2*Math.PI, true);
                ctx.strokeStyle = "orange";
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.fillStyle = "yellow";
                ctx.fill();
    
                let deltaX = Math.abs(attack.x - player.x)
                let deltaY = Math.abs(attack.y - player.y)
                if (deltaX <= 20 && deltaY <= 20) gameOver = true;
            })
    
            counter += 1
        } 

        else {
            document.getElementById("gameOver").innerHTML = "Game Over! <br /> Refresh the page to try again." 
        }

    }

});




