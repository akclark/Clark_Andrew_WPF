//Andrew K Clark
//01 August 2013
//Function_Personal

//Tip calculator

var servNam = prompt("What is your server's name?");//asking for first user input
if (servNam == "") {//checking for blank input
    servNam = prompt("Please enter your server's name:")//asking for input if first result was blank
}//end statement

var billAmount = prompt("What was the bill total?");//asking for first calc variable
var numBill = isNaN(billAmount);//checking to see if the user entered a number
if (numBill === true) {//if they didn't
    billAmount = prompt("Please enter an actual number here:");//we ask them to do so
}//end statement

var percentTip = prompt("Please enter the percentage of your bill that you would like to leave for a tip. \nCommonly between 15% and 20%.");//asking for second calc variable
var numTip = isNaN(percentTip);//checking to see if the user entered a number
if (numTip === true) {//if they didn't
    percentTip = prompt("Please enter an actual number here:");//we ask them to do so
}//end statement

var splitNum = prompt("How any people are splitting this bill?");//asking for third calc variable
var numSplit = isNaN(splitNum);//checking to see if the user entered a number
if (numSplit === true) {//if they didn't
    splitNum = prompt("Please enter an actual number here:");//we ask them to do so
}//end statement

var splitTotal = totalCalc(billAmount, percentTip, splitNum);//invoked the function, including arguments
var totalTip = (percentTip / 100) * billAmount;//extra calc variable
var tipPerPerson = totalTip / splitNum;//calc for amount of tip per person

(splitNum == 1) ? console.log("The amount of tip you should leave for " + servNam + " is $" + totalTip + ", for a total of " + splitTotal + ".") : console.log("The tip each person should leave for " + servNam + " is $" + tipPerPerson + " for a total of $" + splitTotal + " each."); //required console.log output




//Functions

function totalCalc(billAmount, percentTip, splitNum) {//function setup
    var total = (percentTip / 100 + 1) * billAmount / splitNum;//actually doing the calculation
    return total;//returning the calc's answer back to the variable
}//end function