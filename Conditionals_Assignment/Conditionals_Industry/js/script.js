//Andrew K Clark - Conditionals_Industry - 23 May 2013

//This will calculate the amount that website hosting, and domain name registering will cost for a year when split between family members

var domainReg = prompt("How much per year does it cost you for domain name registration?");//first variable request

if(domainReg == ""){//checking if blank
	prompt("Please enter the amount that your domain costs per year to maintain:"); //repeating request if blank was entered
} //end statement

var hosting = prompt("How much per MONTH does your web hosting cost?"); //second variable request

if(hosting == ""){ //checking if second is blank
	prompt("Please enter the amount that your website hosting costs per MONTH to maintain:"); //repeating request if second is blank
} //end statement

var memberSplit = prompt("How many people are you splitting this amount with?"); //third variable request

if(memberSplit == ""){ //checking if third is blank
	prompt("Please enter the number of people you are splitting this cost with:"); //requesting again if third is blank
} //end statement

var hostingYearly = hosting * 12; //getting a total for hosting for the year
var total = parseFloat(hostingYearly) + parseFloat(domainReg);//getting a total for both hosting and domain
var totalYearlyPerMember = total / memberSplit; //dividing total by number of people the amount is being split with
var totalMonthlyPerMember = totalYearlyPerMember / 12; //finding the total amount per month per member

console.log("Your total amount for the year of $" + total + " when split between " + memberSplit + " people will be $" + totalYearlyPerMember + " each for the year, or $" + totalMonthlyPerMember + " each per month."); //required output to console
