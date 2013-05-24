//Andrew K Clark - Conditionals_Industry - 23 May 2013

//This will calculate the amount that website hosting, and domain name registering will cost for a year when split between family members

var domainReg = prompt("How much per year does it cost you for domain name registration?");

if(domainReg == ""){
	prompt("Please enter the amount that your domain costs per year to maintain:");
}

var hosting = prompt("How much per MONTH does your web hosting cost?");

if(hosting == ""){
	prompt("Please enter the amount that your website hosting costs per MONTH to maintain:");
}

var memberSplit = prompt("How many people are you splitting this amount with?");

if(memberSplit == ""){
	prompt("Please enter the number of people you are splitting this cost with:");
}

var hostingYearly = hosting * 12;
var total = parseFloat(hostingYearly) + parseFloat(domainReg);
var totalYearlyPerMember = total / memberSplit;
var totalMonthlyPerMember = totalYearlyPerMember / 12

console.log("Your total amount for the year of $" + total + " when split between " + memberSplit + " people will be $" + totalYearlyPerMember + " each for the year, or $" + totalMonthlyPerMember + " each per month.");
