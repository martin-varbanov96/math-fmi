$(function () {
    var $a;
    var $b;

    $('#butt').click(function () {        
        $a = $('#a').val();
        $b = $('#b').val();
        
       var $big = getBigger($a, $b);
       var $small = getSmaller($a, $b);
        
        console.log("a= " + $a + " b= " + $b + " the big one should be: " + $big + " the small one is= " + $small);
        
        
        $('#bigger').text("The bigger number is= " + $big);
        $('#smaller').text("The smaller numberis= " + $small);         
    });       
});


//a simple function for getting a bigger element
function getBigger(a, b) {
    return a ^ (a ^ b) & -(a < b);
}

//a simple function for getting a smaller element
function getSmaller(a, b) {
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
}




