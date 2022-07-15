//First method
// function timeConversion(s) {
//   var time = s.split(":");
//   var hour = time[0];
//   var minute = time[1];
//   var second = time[2].slice(0, 2);
//   var ampm = time[2].slice(2, 4);
//   if (ampm == "PM") {
//     if (hour == "12") {
//       hour = "12";
//     } else {
//       hour = parseInt(hour) + 12;
//     }
//   } else {
//     if (hour == "12") {
//       hour = "00";
//     }
//   }
//   return hour + ":" + minute + ":" + second;
// }
// console.log(timeConversion("12:02:12PM"));
//second method
function timeConversion(s) {
  let hour = s.substring(0, 2);
  let ampm = s.substring(8, 10);
  let time = s.substring(2, 8);

  if (ampm == "PM") {
    if (hour == "12") {
      hour = "12";
    } else {
      hour = parseInt(hour) + 12;
    }
  } else {
    if (hour == "12") {
      hour = "00";
    }
  }
  return hour + time;
}
console.log(timeConversion("12:02:12AM"));
