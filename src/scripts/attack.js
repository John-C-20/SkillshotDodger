export default class Attack {
    constructor(x, y, targetX, targetY, speed) {
        this.x = x
        this.y = y
        this.startX = x
        this.startY = y
        this.targetX = targetX
        this.targetY = targetY 
        this.xVel = 0
        this.yVel = 0
        this.speed = speed
    }

    move(){
        let deltaX = Math.abs(this.targetX - this.x)
        let deltaY = Math.abs(this.targetY - this.y)
        let hypo = Math.sqrt(deltaX*deltaX + deltaY*deltaY)
        this.xVel = deltaX / hypo
        this.yVel = deltaY / hypo 

        if (this.startX < this.targetX) {
            this.x += this.xVel * this.speed
        }
        if (this.startX > this.targetX) {
            this.x -= this.xVel * this.speed
        }
        if (this.startY < this.targetY) {
            this.y += this.yVel * this.speed
        }
        if (this.startY > this.targetY) {
            this.y -= this.yVel * this.speed
        }
    }
}