//Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
  //if the time is 12AM then the military time is 00:00:00
  //if its 1AM to 12 PM then the militray time is the same
  // if its 1PM and up then the military time is regular time+12hrs

  let militaryhr = "";
  let amOrPm = s.charAt(8);
  //step one check if its AM or PM
  if (amOrPm == "A" && s.substring(0, 2) == 12) {
    militaryhr = "00";
  } else if (amOrPm == "A") {
    militaryhr = s.substring(0, 2);
  } else if (amOrPm == "P" && s.substring(0, 2) == "12") {
    militaryhr = s.substring(0,2);
  } else {
    militaryhr = parseInt(s.substring(0, 2), 10) + 12;
  }
  return militaryhr + s.substring(2, 8);
}

console.log(timeConversion("01:05:39PM"));
    






//failed some tests need to review and find out why 
// function timeConversion(s) {
  //if the time is 12AM then the military time is 00:00:00
  //if its 1AM to 12 PM then the militray time is the same
  // if its 1PM and up then the military time is regular time+12hrs

//   let militaryhr = "";
//   let amOrPm = s.charAt(8);
//   //step one check if its AM or PM
//   if (amOrPm == "A") {
//     if (s.substring(0, 2 == "12")) {
//       militaryhr = "00";
//     } else {
//       militaryhr = s.substring(0, 2);
//     }
//   } else {
//     if (s.substring(0, 2 == "12")) {
//       militaryhr = s.substring(0, 2);
//     } else {
//       militaryhr = parseInt(s.substring(0, 2), 10) + 12;
//     }
//   }
//   return militaryhr + s.substring(2, 8);
// }