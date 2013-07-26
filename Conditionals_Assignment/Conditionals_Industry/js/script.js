//Andrew K Clark
//Industry Conditionals Assignment
//25 July 2013

//Pixels to inches conversion assuming 300 ppi

var pixelHeight = prompt("How many pixels tall is your image?"); //requesting the input of the first var
if(pixelHeight == "") {// checking for blank input
    pixelHeight = prompt("Please enter the number of pixels tall your image is.")// if it is blank, re-requesting proper input
}//end statement
var pixelWidth = prompt("How many pixels wide is your image?"); //requesting the second input
if(pixelWidth == "") {//checking to see if user input is blank
    pixelWidth = prompt("Please enter the number of pixels wide your image is.")//if it is blank, requesting appropraite input
}// end statement

var inchHeight = pixelHeight / 300;
var inchWidth = pixelWidth / 300;