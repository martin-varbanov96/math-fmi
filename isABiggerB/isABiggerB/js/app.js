$(function () {
    var $a;
    var $b;

    $('#butt').click(function () {        
        $a = $('#a').val();
        $b = $('#b').val();
        
       var $big = getBigger($b, $a);
       var $small = getSmaller($b, $a);
        
        
        $('#bigger').text("The bigger number is= " + $big);
        $('#smaller').text("The smaller numberis= " + $small);         
    });       
});


//a simple function for getting a bigger element
function getBigger(a, b) {
    return a ^ (a ^ b) & -(a < b);
}

//a simple function for getting a smaller element
function getSmaller(b, a) {
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
}




