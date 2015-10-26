$(document).ready(function () {
    $('#button').click(main);
    $(document).keypress(function (e) {
        if (e.which == 13) {
            main();
        }
    });
});

function getDeterminant(q, w, e, a, s, d, z, x, c){
    return (q * s * c) + (z * w * d) + (e * a * x) - (z * s * e) - (a * w * c) - (q * x * d);
}
function main(){
    var $Q = $('#Q').val();
    var $W = $('#W').val();
    var $E = $('#E').val();
    var $A = $('#A').val();
    var $S = $('#S').val();
    var $D = $('#D').val();
    var $Z = $('#Z').val();
    var $X = $('#X').val();
    var $C = $('#C').val();
    var $result = getDeterminant($Q, $W, $E, $A, $S, $D, $Z, $X, $C);
    console.log($result);
    $('#result').text($result);
}