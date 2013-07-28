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

//For loopshorthand version of the while or do-while loops

for (var = 10; i > 0; i--) {
    console.log(i + "kegs on the wall.");
}

//Lynda.com video workalong

var a = 1;

while (a < 10) {
    console.log(a);
    a++;
}

//do-while
var a = 1;

do {
    console.log(a);  //This block will always run at least once
    a++;
} while (a < 10);

//for loop

for (var i = 1; i < 10; i++) {
    //do stuff
    //do stuff
    //etc...
}

// Break

for (var i = 1; i < 5000; i++) {
    //do stuff
    if (i == 101) {
        break;
    }
    //do stuff
}

// break jumps out of the loop

//continue - moves us back to the top of the loop

for ( var i = 1; i < 5000; i++;) {
    //do stuff
    //do stuff
    if (i % 5 == 0) {
        continue;
    }
    //do second set of stuff
    //do second set of stuff
}