const arr = [[1, 2], [[3, 4]], [1, []]]

const flatten = arr => arr.reduce((acc, el) => acc.concat(el), [])

const res = flatten(arr)
console.log(res)
