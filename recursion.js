const writeNumbers = (n) => {
  if (n > 1) {
    writeNumbers(n - 1);
  }
  
  console.log(n);
}

const writeDigits = (n) => {
  if (n % 10 != n) {
    writeDigits(Math.trunc(n / 10))
  }
  
  console.log(n % 10);
}

const getSum = (n) => {
  if (n % 10 == n) {
    return n;
  }

  return n % 10 + getSum(Math.trunc(n / 10));
}
