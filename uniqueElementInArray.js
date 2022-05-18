function findSingle(a) {
  // Do XOR of all elements and return
  let response = a[0];
  for (let i = 1; i < a.length; i++) response = response ^ a[i];

  return response;
}

let a = [3, 5, 4, 7, 5, 2, 3, 4, 2];
let n = a.length;
console.log(findSingle(a, n));
