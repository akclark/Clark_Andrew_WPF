// Andrew K Clark	- Condtionals_Wacky - 23 May 2013

// This will calculate the number of kittens (average of course) that your pet great horned owl weighs
var owlLbs = prompt("How many lbs does your pet great horned owl weigh?"); //the first variable input request

if(owlLbs == ""){ //checking for blank input
	owlLbs = prompt("Please enter the number of lbs your owl weighs."); //asking again for input if blank
} //end statement

var owlInt1 = isNaN(owlLbs); //checking to see if the user entered a number or not

if(owlInt1 == true){ // if they did not enter a number
	owlLbs = prompt("Please enter only a number here."); //then we humbly request again that they do so
}//end statement

var owlOz = prompt("How many ounces does your pet great horned owl weigh?"); //asking for input of second variable
// blank line :)
if(owlOz == ""){ //blank input check
	owlOz = prompt("Please enter the number of ounces your owl weighs.");//asking again, if blank is entered
}//end statement

var owlInt2 = isNaN(owlOz);

if(owlInt2 == true){
	owlOz = prompt("Please only enter a number here.");
}

var owlWeight = parseFloat(owlLbs) * 16 + parseFloat(owlOz); //math for converting total number to ounces

var kittens = owlWeight / 13; //finding number of kittens (average 4 week old kitten weighs 13 oz)

console.log("Your pet owl weighs " + kittens + " kittens."); //added required output message to console