//Andrew K Clark
//Wacky Conditionals
//25 July 2013

//A calculator if you ever wanted to know approximately how many parakeets you weigh with the assumption that the average weight of a parakeet is 0.253532 lbs.

var yourWeight = prompt("How many pounds do you weigh?");

if (yourWeight == "") {
	yourWeight = prompt("Please enter the number of pounds that you weigh.");
}

var weightInt = isNaN(yourWeight);

if (weightInt == true) {
	yourWeight = prompt("Please only enter a number here.");
}