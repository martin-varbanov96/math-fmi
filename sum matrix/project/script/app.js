/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */
$(document).ready(function(){
    var matrixLeftInput = [];
    var matrixRightInput = [];
    $("#inputButton").click(function(){
        var input = $("#inputText").val();        
        for(var i = 0; i < input; i++){
            $("#matrixLeft").append("<tr>");
            for(var j = 0; j < input; j++){
                $("#matrixLeft").append("<input id=a" + i + "" + j + ' class="textFieldLeft">');
            }
        }
        
         for(var i = 0; i < input; i++){
            $("#matrixRight").append("<tr>");
            for(var j = 0; j < input; j++){
                $("#matrixRight").append("<input id=b" + i + "" + j + ' class="textFieldRight">');
            }
        }
    });
    $("#sumButton").click(function(){
        matrixLeftInput = getMatrixArr("a");
        matrixRightInput = getMatrixArr("b");
        var sumhable = sumMatrix(matrixLeftInput, matrixRightInput);
        console.log(sumhable);
    });
    
   // Returns a blank matrix nxn
    function getEmpyMatrix(n){
        var matrix = [];
        for(var i=0; i<n; i++) {
            matrix[i] = [];            
        }
        return matrix;
    }
    
    //return the input from current table
    function getMatrixArr(side){
        var temp;
        var inputLength = $("#inputText").val();
        var result = getEmpyMatrix(inputLength);
        for(var i = 0; i < inputLength; i++){
            for(var j = 0; j < inputLength; j++){
                temp=$("#" + side + i + j).val();
                result[i].push(temp);
            }
        }
        return result;
    }
    
    //TODO- return the sum of 2 matrix
    function sumMatrix(matrixInputLeft, matrixInputRight){
        var result = getEmpyMatrix(matrixInputLeft.length);
        for(var i = 0; i < matrixInputLeft[0].length; i++){
            for(var j = 0; j < matrixInputRight[0].length; j++){
                result[i][j] = parseInt(matrixInputLeft[i][j]) + parseInt(matrixInputRight[i][j]);
            }
        }
        return result;
    }
});





//TODO- the thing itself
//var size = 2;
//var matrixA = [];
//var matrixB = [];
//for(var i=0; i < size; i++){
//    
//}