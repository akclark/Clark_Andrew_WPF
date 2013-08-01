//Andrew K Clark
//01 August 2013
//Function Wacky

//This will calculate the really ridiculous number of diapers that you will use in a month, and across six months for a newborn, based on the average number used per day.  Assuming 30 days average per month.

var averagePerDay = prompt("Please enter the average number of diapers per day your newborn goes through:");
var numberOfMonths = prompt("Please enter the number of months you wish to calculate for:");

if (averagePerDay == "" || numberOfMonths == "") {
    var averagePerDay = prompt("Please enter the average number of diapers per day your newborn goes through:");
    var numberOfMonths = prompt("Please enter the number of months you wish to calculate for:");
}else{
    totalAcrossMonths = totalMonths(averagePerDay, numberOfMonths);
}


















//Functions

function perMonthCalc(averagePerDay, numberOfMonths) {
    totalPerMonth = ((numberOfMonths * 30) * averagePerDay) / numberOfMonths;
    return totalPerMonth;
}

function totalMonths(averagePerDay, numberOfMonths) {
    total = averagePerDay * (numberOfMonths * 30);
    return total;
}