$(function () {
    var $a;
    var $b;

    $('button').click(function () {
        $a = $('#a').val();
        $b = $('#b').val();
        
       var $big = getBigger($b, $a);
       var $small = getSmaller($b, $a);
        
        $('#bigger').text($big);
        $('#smaller').text($small);
    });
    
});


//a simple function for getting a bigger element
function getBigger(a, b) {
    return a ^ (a ^ b) & -(a < b);
}

//a simple function for getting a smaller element
function getSmaller(a, b) {
    return (a < b) ? a : b;
}




