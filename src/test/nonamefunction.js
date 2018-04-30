const s = 'Keep On Asking, and It Will Be Giving  You.'
const r = s.replace(/[a-z]+/g, (m) => {
  return m.toUpperCase()
})

console.log(r)
const arr = [100, 45, 778, 1, 0, 12]
arr.sort((a, b) => { return a - b })
console.log(arr)
