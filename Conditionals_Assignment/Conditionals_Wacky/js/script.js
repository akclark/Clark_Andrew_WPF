//Andrew K Clark
//Wacky Conditionals
//25 July 2013

//A calculator if you ever wanted to know approximately how many parakeets you weigh with the assumption that the average weight of a parakeet is 4.05651 ounces.

var yourWeightLbs = prompt("How many pounds do you weigh?");

if (yourWeightLbs == "") {
	yourWeightLbs = prompt("Please enter the number of pounds that you weigh.");
}

var weightInt = isNaN(yourWeightLbs);

if (weightInt == true) {
	yourWeightLbs = prompt("Please only enter a number here.");
}

var yourWeightOunces = prompt("Please enter the number of ounces that you weigh.")

if (yourWeightOunces == "") {
	yourWeightOunces = prompt("Please enter the number of ounces that you weigh.");
}

var ouncesInt = isNaN(yourWeightOunces);

if (ouncesInt == true) {
	yourWeightOunces = prompt("Please only enter a number here.");
}

var yourWeightTotal = parseFloat(yourWeightLbs) * 16 + parseFloat(yourWeightOunces);

var parakeets = yourWeightTotal / 4.05651;

