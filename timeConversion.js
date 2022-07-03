// function tConvert(time) {
//   // Check correct time format and split into components
//   time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
//     time,
//   ];

//   if (time.length > 1) {
//     // If time format correct
//     time = time.slice(1); // Remove full string match value
//     time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
//     time[0] = +time[0] % 12 || 12; // Adjust hours
//   }
//   return time.join(""); // return adjusted time or original string
//   console.log(time);
// }
// // console.log(time);
// tConvert("18:00:00");

// function NoOfOccurence(string, queries) {
//   let count = 0;
//   let count1 = 0;
//   let count2 = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (queries[0] === string[i]) {
//       count = count + 1;
//     }

//     if (queries[1] === string[i]) {
//       count1 = count1 + 1;
//     }
//     if (queries[2] === string[i]) {
//       count2 = count2 + 1;
//     }
//   }
//   console.log([count, count1, count2]);
// }
// NoOfOccurence(["ab", "ab", "abc"], ["ab", "abc", "bc"]);

// function NoOfOccurence(string, queries) {
//     for (let q = 0; q < queries.length; q++) {
//         for (let i = 0; i < string.length; i++) {
//             if (queries[q] === string[i]) {
//             count= count+ 1;
//             }
//     }
//   }

//   console.log(count[i]);
// }
// NoOfOccurence(["ab", "ab", "abc"], ["ab", "abc", "bc"]);

// function NoOfOccurence(string, queries) {
//   let count = 0;
//   for (let q = 0; q < queries.length; q++) {
//     for (let i = 0; i < string.length; i++) {
//       if (queries[q] === string[i]) {
//         count = count + 1;
//       }
//     }
//     console.log(count);
//   }
// }
// NoOfOccurence(["ab", "ab", "abc"], ["ab", "abc", "bc"]);

// Result=[]
// For loop for queries.length{
// Count=0
// For loop for strings.length{
// Increase count when condition satisfied.
// }
// Result.push(count)
// }
// Return result

function sparseArray(string, queries) {
  result = [];
  for (let q = 0; q < queries.length; q++) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (queries[q] === string[i]) {
        count = count + 1;
      }
    }
    result.push(count);
  }
  console.log(result);
  return result;
}
sparseArray(["ab", "ab", "abc"], ["ab", "abc", "bc"]);
