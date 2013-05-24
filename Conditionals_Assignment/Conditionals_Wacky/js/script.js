// Andrew K Clark	- Condtionals_Wacky - 23 May 2013

// This will calculate the number of kittens (average of course) that your pet great horned owl weighs
var owlLbs = prompt("How many lbs does your pet great horned owl weigh?");
if (owlLbs == ""){
	owlLbs = prompt("Please enter the number of lbs your owl weighs.");
}

var owlOz = prompt("How many ounces does your pet great horned owl weigh?");
if (owlOz == ""){
	owlOz = prompt("Please enter the number of ounces your owl weighs.");
}

var owlWeight = owlLbs * 16 + owlOz;

var kittens = owlWeight / 13; //average 4 week old kitten weighs 13 ounces

