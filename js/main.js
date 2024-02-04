
// var yesBtn = document.querySelector(".yes-btn");
// var noBtn = document.querySelector(".no-btn");
// var changeImage = document.querySelector(".main img");

// var qoutes = [
//   "Are You Sure?",
//   "Really Sure?",
//   "pookie please",
//   "Just think about it",
//   "if you say no, i will be very sad",
//   "i'will be very very sad ",
//   " i will be very very very sad",
//   "i'will be very very very very sad",
//   " OK fine, i will stop asking",
//   "Just kidding, PLEASE SAY YES",
//   "i'will be very very very very very sad",
//   "You're breaking my heart :( ",
// ];

// yesBtn.addEventListener("click", function () {
//   noBtn.style.display = "none";
//   yesBtn.style.display = "none";
//   document.getElementById("nameconverted").innerHTML = "Me Too!!";
//   changeImage.setAttribute("src", "images/bear-kiss-bear-kisses.gif");
// });

// var paddingIncrement = 10;

// noBtn.addEventListener("click", function () {
//   yesBtn.style.padding = paddingIncrement + "px";
//   paddingIncrement += 10;

//   var randomIndex = Math.floor(Math.random() * qoutes.length);

//   var randomElement = qoutes[randomIndex];

//   document.getElementById("no-BTN").innerHTML = randomElement;

// });



var yesBtn = document.querySelector(".yes-btn");
var noBtn = document.querySelector(".no-btn");
var changeImage = document.querySelector(".main img");

var qoutes = [
  "Are You Sure?",
  "Really Sure?",
  "pookie please",
  "Just think about it",
  "if you say no, i will be very sad",
  "i'will be very very sad ",
  " i will be very very very sad",
  "i'will be very very very very sad",
  " OK fine, i will stop asking",
  "Just kidding, PLEASE SAY YES",
  "i'will be very very very very very sad",
  "You're breaking my heart :( ",
];

yesBtn.addEventListener("click", function () {
  noBtn.style.display = "none";
  yesBtn.style.display = "none";
  document.getElementById("nameconverted").innerHTML = "Me Too!!";
  changeImage.setAttribute("src", "images/bear-kiss-bear-kisses.gif");
});

var paddingIncrement = 10;

noBtn.addEventListener("click", function () {
  yesBtn.style.padding = paddingIncrement + "px";
  paddingIncrement += 10;
    // increase the font size of noBtn
    var CurrentFontSize = window.getComputedStyle(yesBtn).fontSize;
    var NewFontSize = parseFloat(CurrentFontSize) + 5;
    yesBtn.style.fontSize = NewFontSize + "px";

  // Decrease the font size of noBtn
  var currentFontSize = window.getComputedStyle(noBtn).fontSize;
  var newFontSize = parseFloat(currentFontSize) - 0.2;
  noBtn.style.fontSize = newFontSize + "px";

  var randomIndex = Math.floor(Math.random() * qoutes.length);
  var randomElement = qoutes[randomIndex];

  document.getElementById("no-BTN").innerHTML = randomElement;
});




