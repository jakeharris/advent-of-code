const assert = require('assert'),

      Solution = require('../src/solution')

describe('Solution', () => {
    it('returns 4 when given R8, R4, R4, R8', () => {
        assert.equal(new Solution().distanceFromFirstDuplicateStop('R8, R4, R4, R8'), 4)
    })
})