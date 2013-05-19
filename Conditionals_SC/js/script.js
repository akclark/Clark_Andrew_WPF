// Conditional Logic - Else If
var kidHeight = 46;
var minHeight = 48; //if the kid is over 48 inches tall
var parentHeight = 45; //the height of the kid with parent


if(kidHeight > minHeight){
	//code performed if condition is true
	console.log("You can ride the coaster!!");
	}else if(kidHeight > parentHeight){
		//you can ride with a parent present
		console.log("You can ride, but only with a parent present!");
	}else{
		//code performed if condition is false
		console.log("Sorry kid, you've got some growing to do first!");
	}
/*if(kidHeight <= minHeight){
	console.log("Sorry kid, you've got some growing to do first!")
}*/