// Eliminar los datos no operables
// Undefined, null, 0
const clean = (arr) => arr.reduce((acc, el) => {
  // Los undefined, null, 0
  // siempre regresan un false
  if (el) {
    acc.push(el)
  }
  return acc
}, [])

const res = clean([1, undefined, null, 0, 2, 3])
console.log(res)
