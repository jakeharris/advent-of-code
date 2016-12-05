
const Direction = { 'NORTH': 0, 'EAST': 1, 'SOUTH': 2, 'WEST': 3 }

class Solution {

    constructor () {
        this.facing = Direction.NORTH
        this.x = 0
        this.y = 0
    }

    distanceFromStart(directions) {
        for(const d in directions)
            move(d)

        return Math.abs(this.x) + Math.abs(this.y)
    }

    move(direction) {
        if(direction.charAt(0) === 'R') this.facing = (this.facing < Direction.WEST)? this.facing + 1 : Direction.NORTH
        else if(direction.charAt(0) === 'L') this.facing = (this.facing > Direction.NORTH)? this.facing - 1 : Direction.WEST
        else throw new Error ('We got an instruction with a bad direction. (Received: ' + direction + ')')

        let distance = parseInt(direction.substring(1))
        
        switch(this.facing) {
            case Direction.NORTH:
                this.y += distance
                break
            case Direction.EAST:
                this.x += distance
                break
            case Direction.SOUTH:
                this.y -= distance
                break
            case Direction.WEST:
                this.x -= distance
                break
        }
    }

}

module.exports = Solution 