const getPrimeNumbers = number => {
  const primeNumbers = []
  let j = 2

  const isPrime = num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false
      }
    }

    return num !== 1
  }

  for (0; j <= number; j++) {
    if (isPrime(j)) {
        primeNumbers.push(j)
    }
  }

  return primeNumbers.reverse().toString()
}

module.exports = {getPrimeNumbers}
