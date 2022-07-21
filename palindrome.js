// function checkPalindrome(string) {
//   const len = string.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (string[i] !== string[len - 1 - i]) {
//       return "It is not a palindrome";
//     }
//   }
//   return "It is a palindrome";
// }
// console.log(checkPalindrome("mam"));
function palindrome(str) {
  const string = str.toLowerCase().match(/[a-z0-9]/g);
  return string.join("") === string.reverse().join("");
}

console.log(palindrome("eye"));
