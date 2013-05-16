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

//Average Shopping Bill

var grocerySpending = [75.34, 123.63, 98.51, 100.01, 95.89];
var totalSpent = grocerySpending[0] + grocerySpending[1] + grocerySpending[2] + grocerySpending[3] + grocerySpending[4];
var averageSpent = totalSpent / 5;

console.log("You have spent a total of $" + totalSpent + " on groceries over the last 5 weeks.  That is an average of $" + averageSpent + " per week.");
