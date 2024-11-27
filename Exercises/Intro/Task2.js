// For loop that goes over all the numbers lower than 237 and prints all prime numbers
for (let i = 2; i < 237; i++) {
  // Creation/reset of a boolean flag to know when you have a prime number. Assume all are.
  let flag = true;

  // Checking if the current number is divisable by any other numbers. If so then it is not prime.
  for (let j = 2; j < i; j++) if (i % j == 0) flag = false;

  // If it is not divisible by any other number besides 1 and itself then it will get printed.
  if (flag) console.log(i);
}
