const assert = require('assert'),
      Solution = require('../src/solution')

describe('Solution', () => {
    it('returns 5 when given {R2, L3}', () => {
        assert.equal(new Solution().distanceFromStart('R2, L3'), 5)
    })
    it('returns 2 when given {R2, R2, R2}', () => {
        assert.equal(new Solution().distanceFromStart('R2, R2, R2'), 2)
    })
    it('returns 12 when given {R5, L5, R5, R3}', () => {
        assert.equal(new Solution().distanceFromStart('R5, L5, R5, R3'), 12)
    })
})