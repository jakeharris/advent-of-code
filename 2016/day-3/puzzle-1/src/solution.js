

class Solution {

    static getNumberOfValidTriangles (triangles) {

        let count = 0

        for(let triangle of triangles) {
            // we know that if the smallest two sides
            // are bigger than the biggest, we're good,
            // so let's sort those to be first
            let sides = triangle.split('\t').map(Number).sort((a, b) => {
                if(a < b) return -1
                if(a > b) return 1
                if(a === b) return 0

                throw new Error('?? ??? ??? ?????')
            })

            if(sides[0] + sides[1] > sides[2]) count++
        }

        return count
    }
}

module.exports = Solution