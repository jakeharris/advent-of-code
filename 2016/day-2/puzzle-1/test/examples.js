const assert = require('assert'),

      Solution = require('../src/solution')

describe('Solution', () => {
    it('returns 1985 when given ULL RRDDD LURDL UUUUD', () => {
        assert.equal(new Solution().getCodeFromDirections('ULL\nRRDDD\nLURDL\nUUUUD'), 1985)
    })
})