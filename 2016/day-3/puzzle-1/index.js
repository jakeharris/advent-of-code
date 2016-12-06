const Solution = require('./src/solution'),
      triangles = require('fs').readFileSync('./2016/day-3/puzzle-1/input', 'utf-8').split('\r\n')

console.log(Solution.getNumberOfValidTriangles(triangles))