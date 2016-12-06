const assert = require('assert'),
      reader = require('fs'),
      Solution = require('../src/solution')

describe('Solution', () => {
    it('counts 6 triangles in a 3-column, 6-row matrix, where no row is a valid triangle (and each column has a consecutive pair of valid triads)', () => {
        assert(Solution.getNumberOfValidTriangles(reader.readFileSync('./test/example-input', 'utf-8')), 6)
    })
})