class Solution {
    constructor () {
        // everything is shifted down to 0 index 
        // to make better sense when doing modulo
        // arithmetic
        this.position = 4

        this.code = []

        this.WIDTH = 3
        this.HEIGHT = 3
        this.Directions = { UP: 'U', RIGHT: 'R', DOWN: 'D', LEFT: 'L' }
    }

    getCodeFromDirections (directions) {
        console.log('directions: ' + directions)
        for(let direction of directions.split('\n')) {
            console.log(direction)
            for(let step of direction) {
                this.move(step)
            }
            this.code.push(this.position + 1)
        }

        return this.code.join('')
    }
    move (step) {
        switch(step) {
            case this.Directions.UP:
                if(this.position < this.WIDTH) break
                else this.position -= this.WIDTH
                break
            case this.Directions.RIGHT:
                if(this.position % this.WIDTH === this.WIDTH - 1) break
                else this.position += 1
                break
            case this.Directions.DOWN:
                if(this.position > (this.HEIGHT - 1) * this.WIDTH) break
                else this.position += this.WIDTH
                break
            case this.Directions.LEFT:
                if(this.position % this.WIDTH === 0) break
                else this.position -= 1
                break
            default:
                break
        }
    }
}

module.exports = Solution