
function * genFibonacci () {
  let a = 0
  let b = 1
  while (1) {
    [a, b] = [b, a + b]
    yield a
  }
}

const genFibonacciFunc = genFibonacci()
for (var num of genFibonacciFunc) {
  if (num > 50) break
  console.log(num)
}
