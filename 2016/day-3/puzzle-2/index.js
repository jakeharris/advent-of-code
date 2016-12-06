const Solution = require('./src/solution'),
      triangles = require('fs').readFileSync('./input', 'utf-8')

console.log(Solution.getNumberOfValidTriangles(triangles))

