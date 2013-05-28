// Andrew K Clark - Screencast Work Along - 27 May 2013

//Function vs Procedure

/* Procedure is more specific type of function
- They never return values*/

//This is a function
function calcArea(width, length){
	var area = width * length;
	return area;
}

//This is a procedure
function calcArea(width, length){
	var area = width * length;
	console.log(area) //no return
}