// Andrew K Clark - Functions Personal - 29 May 2013

//Tip Calculator

var serverName = prompt("What is your server's name?");
if(serverName == ""){ //checking to see if something has been entered
	serverName = prompt("Please enter your server's name."); //Another prompt if the user has not entered a value
} //end statement

var billAmount = prompt("What is the total amount of your bill?");
if(billAmount == ""){ //checking to see if something has been entered, don't know how to check if it's a number yet
	billAmount = prompt("Please enter the total amount of your bill."); //Another prompt if the user has not entered a value
} //end statement
var billNum = numCheck(billAmount);
if(billNum === true){
	billAmount = prompt("Please enter only numbers here.");
}

var tipPercent = prompt("What percentage of your bill would you like to leave for a tip? \n(Usually between 15% and 20%)");
if(tipPercent == ""){ //checking to see if something has been entered, don't know how to check if it's a number yet
	tipPercent = prompt("Please enter the percentage you would like to leave for a tip."); //Another prompt if the user has not entered a value
} //end statement
var tipNum = numCheck(tipPercent);
if(tipNum === true){
	tipPercent = prompt("Please enter only numbers here.");
}

var billSplit = prompt("How many people are splitting this bill? \nIf you are paying the whole thing, please enter 1.");
var splitNum = numCheck(billSplit);
if(splitNum === true){
	billSplit = prompt("Please enter only numbers here.");
}

var totalWithSplit = billTotalCalc(billAmount, tipPercent, billSplit);
var tipAmount = (tipPercent / 100) * billAmount; 
var tipEach = tipAmount / billSplit;

if(billSplit == 1){
	console.log("The amount of tip you should leave " + serverName + " is $" + tipAmount + " for a total of $" + totalWithSplit + ".");
}else{
	console.log("The amount of tip each person should leave for " + serverName + " is $" + tipEach + "for a total of $" + totalWithSplit + " each.");
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
		