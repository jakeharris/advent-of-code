
const Direction = { 'NORTH': 0, 'EAST': 1, 'SOUTH': 2, 'WEST': 3 }

class Solution {

    constructor () {
        this.facing = Direction.NORTH
        this.x = 0
        this.y = 0
        this.visitedLocations = []
    }

    distanceFromFirstDuplicateStop(directions) {

        let dupe = 0

        for(let d of directions.split(', ')) {

            this.setFacing(d)

            let distance = parseInt(d.substring(1))
            while(distance--) {
                dupe = this.slowMove()
                if(dupe !== 0) return Math.abs(dupe[0]) + Math.abs(dupe[1])
            }
        }

        return Math.abs(dupe[0]) + Math.abs(dupe[1])
    }

    distanceFromStart(directions) {
        for(let d of directions.split(', ')) 
            this.move(d)

        return Math.abs(this.x) + Math.abs(this.y)
    }

    setFacing(direction) {
        if(direction.charAt(0) === 'R') this.facing = (this.facing < Direction.WEST)? this.facing + 1 : Direction.NORTH
        else if(direction.charAt(0) === 'L') this.facing = (this.facing > Direction.NORTH)? this.facing - 1 : Direction.WEST
        else throw new Error ('We got an instruction with a bad direction. (Received: ' + direction + ')')
    }

    move(direction) {

        setFacing(direction)
        
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

    slowMove(distance) {
        switch(this.facing) {
            case Direction.NORTH:
                this.y += 1
                break
            case Direction.EAST:
                this.x += 1
                break
            case Direction.SOUTH:
                this.y -= 1
                break
            case Direction.WEST:
                this.x -= 1
                break
        }

        let currentLocation = [this.x, this.y]

        for(let l of this.visitedLocations) 
            if(l[0] === currentLocation[0] && l[1] === currentLocation[1]) return currentLocation

        this.visitedLocations.push(currentLocation)
        return 0 
    }

}

module.exports = Solution 