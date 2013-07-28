//Andrew K Clark
//27 July 2013
//Loops Screencast workalong

var b = 50; // sets up the index

while (b > 0) { //checks the condition
    console.log(b + " kegs on the wall.");
    b--;//increments or decrements the index.
}

//do-while loops

var c = 10;

do{ //This block will still be run even if the while protion that follows is not true
    console.log(c + " kegs on the wall.");
    c--;
}
while (c > 0); 