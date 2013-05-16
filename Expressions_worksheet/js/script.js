// Andrew K Clark - 05/16/2013 - Expression Worksheet

//Example Problem
var width = 8;
var height = 26;
var area = width * height;

console.log("The area of the rectangle is " + area);

//Dog Years Calculator

var sparkyAge = 12;
var sparkyDogYears = sparkyAge * 7;
console.log("Sparky is " + sparkyAge + " human years old, which is " + sparkyDogYears + " in dog years.");

//Slice of Pie Part I

var slicesPerPie = 10;
var numberOfGuests = 14;
var piesOrdered = 4;

var slicesPerGuest = piesOrdered * slicesPerPie / numberOfGuests;
 
console.log("Each person ate " + slicesPerGuest + " slices of pizza at the party.");

//Slice of Pie Part II

var sparkySlices = (piesOrdered * slicesPerPie % numberOfGuests);

console.log("Sparky got " + sparkySlices + " slices of pizza.");