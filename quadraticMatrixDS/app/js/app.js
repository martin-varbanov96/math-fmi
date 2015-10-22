$(document).ready(function () {
    $('#submit').click(function () {
        
        var $topLeft = $("#a11").val();
        var $topRight = $("#a12").val();
        var $botLeft = $("#a21").val();
        var $botRight = $("#a22").val();
        
        var $result = getQuadratticDS($topLeft, $topRight, $botLeft, $botRight);
        
        $("#result").text($result);
    });
});

//generate a fun   
function getQuadratticDS(a11, a12, a21, a22){
    return a11 * a22 - a12 * a21;
}