// Andrew K Clark	- Condtionals_Wacky - 23 May 2013

// This will calculate the number of kittens (average of course) that your pet great horned owl weighs
var owlLbs = prompt("How many lbs does your pet great horned owl weigh?"); //the first variable input request

if(owlLbs == ""){ //checking for blank input
	owlLbs = prompt("Please enter the number of lbs your owl weighs."); //asking again for input if blank
} //end statement
	/*parseFloat(owlLbs);*/

var owlOz = prompt("How many ounces does your pet great horned owl weigh?"); //asking for input of second variable
// blank line :)
if(owlOz == ""){ //blank input check
	owlOz = prompt("Please enter the number of ounces your owl weighs.");//asking again, if blank is entered
}//end statement
	/*parseFloat(owlOz);
*/

var owlWeight = parseFloat(owlLbs) * 16 + parseFloat(owlOz); //math for converting total number to ounces

var kittens = owlWeight / 13; //finding number of kittens (average 4 week old kitten weighs 13 oz)

console.log("Your pet owl weighs " + kittens + " kittens."); //added required output message to console