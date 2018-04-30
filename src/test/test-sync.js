const fs = require('fs')
function loadJson1 () {
  fs.readFileSync('../../build.js', 'utf-8', (err, data) => {
    console.log(err)
  })
  var a = {
    oa: 45,
    re: 'fe',
    rrr: {
      fff: 98,
      qw: 4,
      eer: {
        ui: 44
      }
    },
    ty: 455
  }
  return a
}

function loadJson2 () {
  fs.readFileSync('../../build.js', 'utf-8', (err, data) => {
    console.log(err)
  })
  var b = {
    de: 12
  }
  return b
}

function loadJson3 () {
  var a = {
    oad: 45,
    ref: 'fe',
    rrfr: {
      fff: 98,
      qw: 4,
      eer: {
        ui: 44
      }
    },
    ty: 455
  }
  return a
}

function margejson () {
  var json1 = loadJson1()
  var json2 = loadJson2()
  var json3 = loadJson3()
  return [json1, json2, json3]
}

console.time('timer')
var result = margejson()
console.log(Object.assign(result[0], result[1], result[2]))
console.timeEnd('timer')
