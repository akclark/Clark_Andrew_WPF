// Andrew K Clark	- Condtionals_Wacky - 23 May 2013

// This will calculate the number of kittens (average of course) that your pet great horned owl weighs
var owlLbs = prompt("How many lbs does your pet great horned owl weigh?"); //the first variable input request

if(owlLbs == ""){ //checking for blank input
	owlLbs = prompt("Please enter the number of lbs your owl weighs."); //asking again for input if blank
} //end statement
	/*parseFloat(owlLbs);*/

var owlOz = prompt("How many ounces does your pet great horned owl weigh?");

if(owlOz == ""){
	owlOz = prompt("Please enter the number of ounces your owl weighs.");
}
	/*parseFloat(owlOz);
*/

var owlWeight = parseFloat(owlLbs) * 16 + parseFloat(owlOz);

var kittens = owlWeight / 13; 

console.log("Your pet owl weighs " + kittens + " kittens.");