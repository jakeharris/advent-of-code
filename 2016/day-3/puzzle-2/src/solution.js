
class Solution {
    
    static getNumberOfValidTriangles (input) {

        let count = 0

        for(let triangle of this.getTriangles(input)) {

            // we know that if the smallest two sides
            // are bigger than the biggest, we're good,
            // so let's sort those to be first
            let sides = triangle.sort((a, b) => {
                if(a < b) return -1
                if(a > b) return 1
                if(a === b) return 0

                throw new Error('?? ??? ??? ?????')
            })

            if(typeof sides[2] !== 'undefined' && sides[0] + sides[1] > sides[2]) count++
        }

        return count
    }

    static getTriangles(input) {

        let triangles = []

        // break it apart, then transpose it, then flatten it
        let sides = input.split('\r\n').map((row) => {
            return row.trim().split(/\s+/).map(Number)
        })
        sides = this.transpose(sides).reduce(this.byFlattening)

        console.log(sides.length)

        while(sides.length > 0)
            triangles.push(sides.splice(0, 3))

        console.log(triangles.length)

        return triangles   
    }


    // thanks to @hobs on stackoverflow (http://stackoverflow.com/a/13241545/2774085)
    static transpose(a) {
        return Object.keys(a[0]).map(
            function (c) { 
                return a.map(function (r) { return r[c]; }); 
            }
        );
    }

    static byFlattening(prev, curr) {
        return prev.concat(curr)
    }
}

module.exports = Solution

