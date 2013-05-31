// Andrew K Clark - Functions Personal - 29 May 2013

//Tip Calculator

var serverName = prompt("What is your server's name?");
var billAmount = prompt("What is the total amount of your bill?");
var billNum = numCheck(billAmount);
if(billNum === true){
	billAmount = prompt("Please enter only numbers here.");
}

var tipPercent = prompt("What percentage of your bill would you like to leave for a tip? \n(Usually between 15% and 20%)");
var tipNum = numCheck(tipPercent);
if(tipNum === true){
	tipPercent = prompt("Please enter only numbers here.");
}

var billSplit = prompt("How many people are splitting this bill? \nIf you are paying the whole thing, please enter 1.");
var splitNum = numCheck(billSplit);
if(splitNum === true){
	billSplit = prompt("Please enter only numbers here.");
}

if(billSplit == 1){
	console.log("The amount of tip you should leave " + serverName + " is $" +  + " for a total of $" +  + ".");
}else{
	console.log("The amount of tip each person should leave for " + serverName + " is $" +  + "for a total of $" +  + " each.");
}





//Function Section

function billTotalCalc(billAmount, tipPercent, billSplit){
	var total = (tipPercent / 100 + 1) * billAmount / billSplit;
	return total
}

function numCheck(string){
	var num = isNaN(string);
	return num;
}
		