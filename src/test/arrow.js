var obj = {
  member1: 'yum',
  member2: 'npm',
  method: () => {
    console.log(this)
    console.log(obj)
    // console.log(window)
    //  console.log(global)
    // console.log(member1)
    return this.member2 + obj.member1
  },
  paramFunc: (irohasu) => {
    return irohasu
  },
  notArrowFunc: function () {
    console.log(this)
    return this.member1
  }
}

console.log(obj.method())
console.log(obj.paramFunc('イロハス'))
console.log(obj.notArrowFunc())

function FuncObject () {
  this.age = 0
  this.method = () => {
    console.log(this.age)
    return this.age
  }
}

FuncObject.prototype.scoa = function () {
  return this.age + 10
}

var funcObjectInstans1 = new FuncObject()
var funcObjectInstans2 = new FuncObject()

console.log('start')

console.log(funcObjectInstans1.method())
console.log(funcObjectInstans2.method())

FuncObject.prototype.method2 = function () {
  return this.age + 10
}

console.log(funcObjectInstans1.method2())
console.log(funcObjectInstans2.method2())

funcObjectInstans1.scoa = function () {
  return 'math:100'
}

console.log(funcObjectInstans1.scoa())
console.log(funcObjectInstans2.scoa())

console.log('end')
// funcObjectInstans.age = 45
// console.log(funcObjectInstans.method())

function Person () {
  this.age = 0
  setInterval(() => {
    this.age++
    console.log(this.age)
  }, 1000)
}

// var person = new Person()

// console.log(Obj.paramFunc('いろはす'))

//
// Obj.prototype.method2 = function () {
//   return this.member1
// }
//
// var instanceObj = new Obj('naem')
//
// console.log(instanceObj.method())
// console.log(instanceObj.method2())
//
// var Obj2 = function () {}
//
// Obj2.prototype.Obj2 = 'dfadf'
//
// var instance1 = new Obj2()
// var instance2 = new Obj2()
// instance1.Obj2 = 'change!'
//
// console.log(instance1.Obj2)
// console.log(instance2.Obj2)
//
// console.log(Obj2.Obj2)
// console.log(new Obj2().Obj2)
