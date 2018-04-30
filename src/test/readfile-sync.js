const fs = require('fs')

function readFile (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      // check err
      if (err) return reject(err)
      return resolve(data)
    })
  })
}

readFile('./oruga.txt')
  .then((text) => {
    console.log(text)
    return readFile('./oruga24.txt')
  })
  .then((text) => {
    console.log(text)
    return readFile('./oruga3.txt')
  }).then((text) => {
    console.log(text)
  })
  .catch((err) => {
    console.log(err)
  })
