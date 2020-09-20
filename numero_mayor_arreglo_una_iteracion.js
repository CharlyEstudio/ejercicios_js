const getBiggest = (arr) => arr.reduce((acc, el) => acc > el ? acc : el)
const numero_mayor = getBiggest([50, -1500, 1000, 0, 1, 54])
console.log(numero_mayor)
