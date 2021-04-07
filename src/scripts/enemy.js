export default class Enemy{
    constructor() { 
        this.x = Math.floor(Math.random() * 500)
        this.y = Math.floor(Math.random() * 500)
        this.interval = Math.floor(50 + Math.random() * 450)
        this.speed = Math.floor(2 + Math.random() * 3)
    }
}