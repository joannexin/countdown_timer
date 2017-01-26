// get countDownDate in miliseconds:
var countDownDate = new Date("Jan 28, 2018 12:24:00").getTime();

var countDownTimer = setInterval(function() {
  // Get diff between now an the count down date
  var diff = countDownDate - new Date().getTime();

  // calculations for days, hours, minutes and seconds
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Output the result in its own elements
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is over, write some text
  if (diff < 0) {
    clearInterval(countDownTimer);
    document.getElementById("box").innerHTML = "EXPIRED";
  }
}, 1000);

// Here is ES6 sytanx
// get countDownDate in miliseconds:
// const countDownDate = new Date("Jan 28, 2018 12:24:00").getTime();
//
// const countDownTimer = setInterval(() => {
//   // Get diff between now an the count down date
//   const diff = countDownDate - new Date().getTime();
//
//   // calculations for days, hours, minutes and seconds
//   const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((diff % (1000 * 60)) / 1000);
//
//   // Output the result in its own elements
//   document.getElementById("days").innerHTML = days;
//   document.getElementById("hours").innerHTML = hours;
//   document.getElementById("minutes").innerHTML = minutes;
//   document.getElementById("seconds").innerHTML = seconds;
//
//   // If the count down is over, write some text
//   if (diff < 0) {
//     clearInterval(countDownTimer);
//     document.getElementById("box").innerHTML = "EXPIRED";
//   }
// }, 1000);
