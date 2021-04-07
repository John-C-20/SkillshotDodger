export default class Timer {
    constructor(){
        this.seconds = 0 
    }

    tick() {
        this.seconds++ 
    }

    getTime() {
        let seconds = this.seconds 
        let minutes = Math.floor(this.seconds / 60) 
        let hours = Math.floor(minutes / 60) 
        minutes = minutes % 60 
        seconds = seconds % 60 

        if (seconds < 10) {
            seconds = `0${seconds}`
        }

        if (minutes < 10) {
            minutes = `0${minutes}`
        }

        if (hours < 10) {
            hours = `0${hours}`
        }

        return `${hours}:${minutes}:${seconds}`
    }
}