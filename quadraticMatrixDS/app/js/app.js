$(document).ready(function () {
    $('#submit').click(main);
    $(document).keypress(function (e) {
        if (e.which == 13) {
            main();
        }
    });        
});

//generate a DS of the matrix   
function getQuadratticDS(a11, a12, a21, a22){
    return a11 * a22 - a12 * a21;
}
function main() {    
    var $topLeft = $("#a11").val();
    var $topRight = $("#a12").val();
    var $botLeft = $("#a21").val();
    var $botRight = $("#a22").val();
    
    var $result = getQuadratticDS($topLeft, $topRight, $botLeft, $botRight);
    
    $("#result").text($result);
}