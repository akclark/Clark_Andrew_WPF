// Andrew K Clark - 05/16/2013 - Expressions Industry (Electrical, I am currently an electrician)

//kilowatt - hour conversion per number of days for given watt/hours/days per month, this can be useful for finding out how much a bulb or other device is adding to your electric bill.

alert("This will calculate the number of kWh (kiloWatt-hours) a device will use across a given number of days."); //This bit describes what we are trying to accomplish

var deviceType = prompt("What type of device are we talking about here?"); //Asking for the type of device that is being wondered about

var wattsPerHour = prompt("Please enter the number of watts your device uses:");  //This is where I explain the computation and first variable, and ask for the user to input the variable.
var hoursPerDay = prompt("Please enter the average number of hours per day the device is used:"); //This is the second variable setup and input by the user.
var daysDeviceUsed = prompt("Please enter the number of days you use this device:"); //This is the third variable setup and user input.

var totalWattHours = wattsPerHour * hoursPerDay; //Total watts per hour calculation and variable setup
var totalKWH = totalWattHours /1000;  //Total kiloWatt-hours used calculation and variable setup
var kwhPerDays = totalKWH * daysDeviceUsed; //final calculation for kiloWatt hours across the number of days the device is used.

console.log("Your " + wattsPerHour + " watt " + deviceType + " uses " + totalWattHours * daysDeviceUsed + " watts for " + daysDeviceUsed + " days, which is " + kwhPerDays + " kiloWatt-hours."); //The requireed console.log declaration

alert("Your " + wattsPerHour + " watt " + deviceType + " uses " + totalWattHours * daysDeviceUsed + " watts for " + daysDeviceUsed + " days, which is " + kwhPerDays + " kiloWatt-hours."); // I also decided to add an alert since the user won't necessarily be able to see the console.