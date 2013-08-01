//Andrew K Clark
//01 August 2013
//Function Wacky

//This will calculate the really ridiculous number of diapers that you will use in a month, and across six months for a newborn, based on the average number used per day.  Assuming 30 days average per month.

var averagePerDay = prompt("Please enter the average number of diapers per day your newborn goes through:");//First variable request
var numberOfMonths = prompt("Please enter the number of months you wish to calculate for:");//second variable request

if(averagePerDay == "" || numberOfMonths == "") {//checking to see if either of the inputs were blanks
    var averagePerDay = prompt("Please enter the average number of diapers per day your newborn goes through:");//requesting again if blank
    var numberOfMonths = prompt("Please enter the number of months you wish to calculate for:");//requesting again if blannk
    
    totalAcrossMonths = totalMonths(averagePerDay, numberOfMonths);//invoking first function
    console.log("The total number of diapers you will use across " + numberOfMonths + " months is: " + totalAcrossMonths + ".");//required console.log output
    totalPerMonth = perMonthCalc(averagePerDay, numberOfMonths);//calling second function
    console.log("Which is " + totalPerMonth + " per month.");//second function console.log output
}else{//do this if the user actually managed to input 2 numbers
    totalAcrossMonths = totalMonths(averagePerDay, numberOfMonths);//first function call
    console.log("The total number of diapers you will use across " + numberOfMonths + " months is: " + totalAcrossMonths + ".");//required console.log output
    totalPerMonth = perMonthCalc(averagePerDay, numberOfMonths);//second function call
    console.log("Which is " + totalPerMonth + " per month.");//second function console.log output
}//end statement


//Functions

function perMonthCalc(averagePerDay, numberOfMonths) {
    totalPerMonth = ((numberOfMonths * 30) * averagePerDay) / numberOfMonths;
    return totalPerMonth;
}

function totalMonths(averagePerDay, numberOfMonths) {
    total = averagePerDay * (numberOfMonths * 30);
    return total;
}