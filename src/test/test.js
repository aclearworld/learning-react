async function loadJson1 () {
  return new Promise(resolve => {
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
    return resolve(a)
  })
}

async function loadJson2 () {
  return new Promise(resolve => {
    var a = {
      o22a: 45,
      re22: 'fe',
      rrder: {
        fff: 98,
        qw: 4,
        eer: {
          ui: 44
        }
      },
      ty: 455
    }
    return resolve(a)
  })
}

async function loadJson3 () {
  return new Promise(resolve => {
    var a = {
      doa: 45
    }
    return resolve(a)
  })
}

async function margejson () {
  var json1 = loadJson1()
  var json2 = loadJson2()
  var json3 = loadJson3()
  return Promise.all([json1, json2, json3])
}

console.time('timer')

margejson()
  .then((result) => {
    console.log(Object.assign(result[0], result[1], result[2]))
    console.timeEnd('timer')
  })
