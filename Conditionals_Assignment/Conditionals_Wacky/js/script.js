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

