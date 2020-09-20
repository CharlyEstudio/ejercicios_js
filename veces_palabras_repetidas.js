const repeated = str => {
  const lowered = str.toLowerCase()
  const splitted = lowered.split(' ')
  const reduced = splitted.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++
    } else {
      acc[el] = 1
    }

    return acc
  }, {})

  return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el)
}

const res = repeated('SIGNOT es un software de Gestión Notarial registrado ante el Instituto Mexicano de la Propiedad Industrial')
console.log(res)
