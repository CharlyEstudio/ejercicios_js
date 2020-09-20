const isPalindorme = str => {
  str = str.replace(/\s/g, '') // Elimina espacios
  const lowered = str.toLowerCase()
  const splitted = lowered.split('')
  const reversed = splitted.reverse()
  const joined = reversed.join('')
  return lowered == joined
}

const resp = isPalindorme('Esto no es palindromo')
const palindromo = isPalindorme('Do geese see God')
console.log(resp)
console.log(palindromo)
