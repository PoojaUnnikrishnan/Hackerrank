function birthday(s, d, m) {
  //s = array of integers on chocolate bar. d is month day of birthday and m is month.
  let counter = 0;
  const reducer = (a, b) => a + b;
  for (let i = 0; i < s.length - m + 1; i++) {
    if (s.slice(i, i + m).reduce(reducer) == d) counter++;
  }
  return counter;
}
console.log(birthday([1, 1, 1, 1, 1], 3, 2));
