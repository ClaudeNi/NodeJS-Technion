// קלוד ניג'ם
// Random number chosen
const num = 7;

// Prints 1 if the number above is divisble by only one of the following: 2, 3, 5. Otherwise prints nothing
Number(
  (num % 2 === 0 && num % 3 !== 0 && num % 5 !== 0) ||
    (num % 2 !== 0 && num % 3 === 0 && num % 5 !== 0) ||
    (num % 2 !== 0 && num % 3 !== 0 && num % 5 === 0)
) && console.log(1);

// Prints 2 if the number above is divisble by two of the following: 2, 3, 5. Otherwise prints nothing
Number(
  (num % 2 === 0 && num % 3 === 0 && num % 5 !== 0) ||
    (num % 2 === 0 && num % 3 !== 0 && num % 5 === 0) ||
    (num % 2 !== 0 && num % 3 === 0 && num % 5 === 0)
) && console.log(2);

// Prints 3 if the number above is divisble by all of the following: 2, 3, 5. Otherwise prints nothing
Number(num % 2 === 0 && num % 3 === 0 && num % 5 === 0) && console.log(3);
