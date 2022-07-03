function reverseString(s) {
  let str = s.split("");
  console.log(str);
  let string = str.reverse();
  console.log(string);
  let join = string.join("");
  console.log(join);
}
reverseString("hello");
