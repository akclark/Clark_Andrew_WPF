//Andrew K Clark
//Wacky Conditionals
//25 July 2013

//A calculator if you ever wanted to know approximately how many parakeets you weigh with the assumption that the average weight of a parakeet is 4.05651 ounces.

var yourWeightLbs = prompt("How many pounds do you weigh?");//asking for the first variable

if (yourWeightLbs == "") {//checking for blank input
	yourWeightLbs = prompt("Please enter the number of pounds that you weigh.");//if blank, asking again for input
}//end statement

var weightInt = isNaN(yourWeightLbs);//checking to see if the user entered a number

if (weightInt == true) {//if the user did not enter a number
	yourWeightLbs = prompt("Please only enter a number here.");//then we humbly request that they do so here
}//end statement

var yourWeightOunces = prompt("Please enter the number of ounces that you weigh.")//asking for user input of second variable

if (yourWeightOunces == "") {//checking second variable for empty input
	yourWeightOunces = prompt("Please enter the number of ounces that you weigh.");//if it is empty, asking again for useable input
}//end statement

var ouncesInt = isNaN(yourWeightOunces);//checking to see if second variable is not a number

if (ouncesInt == true) {//if the user did in fact not enter a number
	yourWeightOunces = prompt("Please only enter a number here.");//then we demand that they do so here
}//end statement

var yourWeightTotal = parseFloat(yourWeightLbs) * 16 + parseFloat(yourWeightOunces);//converting the lbs to ounces and getting a total number of ounces

var parakeets = yourWeightTotal / 4.05651;//dividing ypour total weight by the average weight of a parakeet.

console.log("You weigh approximately " + parakeets + " parakeets");//the course required output to console.log