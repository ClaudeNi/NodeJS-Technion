for (let i = 2; i < 237; i++) {
  let flag = true;
  for (let j = 2; j < i; j++) if (i % j == 0) flag = false;
  if (flag) console.log(i);
}
