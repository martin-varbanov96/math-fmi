var a = 5;
var b = 10;


//a simple function for getting a bigger element
function getBigger(a, b){
    return a ^ (a ^ b) & -(a < b);
}

//a simple function for getting a smaller element
function getSmaller(a, b){
    return ( a < b ) ? a : b;
}

