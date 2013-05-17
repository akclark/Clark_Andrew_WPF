// Andrew K Clark - 05/16/2013 - Expressions Personal

var phoneBills = []
var billName = prompt("This will total and average the last 6 months worth of your landline or cell phone bills.\nOr any other bill that repeats on a monthly basis. \nWhat type of bill is this (phone, water, etc...)?"); //This line describes the function and asks the user for the type of bill being calculated
phoneBills[0] = parseFloat(prompt("Please enter the amount of the first bill:"));// Asking for the first number to be placed into the array
phoneBills[1] = parseFloat(prompt("Please enter the second bill amount:")); //Asking for second number to be placed into the array
phoneBills[2] = parseFloat(prompt("Please enter the third bill amount:")); //Asking for third number to be placed into the array
phoneBills[3] = parseFloat(prompt("Please enter the fourth bill  amount:")); //Asking for fourth number to be placed into the array
phoneBills[4] = parseFloat(prompt("Please enter the fifth bill amount:")); //Asking for fifth number to be placed into the array
phoneBills[5] = parseFloat(prompt("And please enter the sixth and final bill amount:")); //Asking for sixth number to be placed into the array

var billsTotal = phoneBills[0] + phoneBills[1] + phoneBills[2] + phoneBills[3] + phoneBills[4] + phoneBills[5]; //This line totals teh user input numbers from above
var billsAverage = billsTotal / 6; //This line calcs the average of the numbers the user input

console.log("The total of your " + billName + " bills for the last 6 months is $" + billsTotal + ", and the average amount you spend per month on this bill is $" + billsAverage + "."); //This is the output line that is required for the assignment


