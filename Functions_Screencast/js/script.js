// Andrew K Clark - Screencast Work Along - 27 May 2013

//Returning Values

var total = calcArea(30, 20);

function calcArea(w, l){
	var area = w * l;
	return area; //function is spitting info out to the var "total" that was declared when the function was called
}
console.log(total);