const assert = require('assert'),

      Solution = require('../src/solution')

describe('Solution', () => {
    it('returns 2 given three valid triangles and one invalid triangle', () => {
        assert.equal(Solution.getNumberOfValidTriangles('5\t10\t25\n5\t6\t7\n3\t4\t5'.split('\n')), 2)
    })
})