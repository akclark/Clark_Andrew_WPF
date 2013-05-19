// Conditional Logic - Ternary Operators

var age = 10;
var book;

//if the child is under 10, they get green eggs and ham, otherwise they get the time machine
if(age <= 10){
	book = "Green Eggs and Ham";
}else{
	book= "The Time Machine";
}

book = (age <= 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);

/*var gpa = 1.95;

//if the gpa is over the min 2.0 score, the student can graduate
if(gpa > 2.0){
	console.log("You can graduate!");
}else{
	console.log("GPA is too low!");
}

(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA is too low!");*/

/*if(condition){
	do if true;
}else{
	do if false;
}

//ternary version of above statement
(condition) ? do if true : do if false;*/