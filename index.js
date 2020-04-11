const circleToPolygon = require('circle-to-polygon')

const coordinates = [-46.65437579154968, -23.57067421649414] //[lon, lat] -
const radius = 10000 // in meters
const numberOfEdges = 32 //optional that defaults to 32

const polygon = circleToPolygon(coordinates, radius, numberOfEdges)

console.log(JSON.stringify(polygon))
