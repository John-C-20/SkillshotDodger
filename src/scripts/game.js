document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("game-canvas");
    canvas.width = 1000;
    canvas.height = 1000;
    canvas.addEventListener('mousedown', movePlayer)
    setInterval(play, 1000/100);

    // e.clientX - canvas.offsetLeft // gives x coordinate of canvas
    // e.clientY - canvas.offsetTop // gives y coordinate of canvas

    playerX = playerY = 500
    mouseX = mouseY = 500

    function movePlayer(e) {
        mouseX = e.clientX - canvas.offsetLeft
        mouseY = e.clientY - canvas.offsetTop
    }

    function play() {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    
        if (playerX < mouseX) {
            playerX++ 
        } 
        if (playerX > mouseX) {
            playerX-- 
        } 
        if (playerY < mouseY) {
            playerY++ 
        } 
        if (playerY > mouseY) {
            playerY-- 
        } 
        
        ctx.beginPath();
        ctx.arc(playerX, playerY, 20, 0, 2 * Math.PI, true);
        // x, y, size, ? , circumference, ?
        ctx.strokeStyle = "green";
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.fillStyle = "blue";
        ctx.fill();
    }

});




