/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */
$(document).ready(function(){
    var matrixLeftInput = [];
    var matrixRightInput = [];
    
    $("#burger").click(function(){
        $("#menu").toggle("fast");
        $("#menu").css("visibility", "visible");
    });
    $("#inputButton").click(function(){
        var input = $("#inputText").val(); 
        $("#matrixLeft").empty();
        $("#matrixRight").empty();
        $("#matrixResult").empty();
        
        for(var i = 0; i < input; i++){
            $("#matrixLeft").append("<tr>");
            $("#matrixRight").append("<tr>");
            $("#matrixResult").append("<tr>");
            for(var j = 0; j < input; j++){
                $("#matrixLeft").append("<input id=a" + i + "" + j + ' class="textFieldLeft">');
                $("#matrixRight").append("<input id=b" + i + "" + j + ' class="textFieldRight">');
                $("#matrixResult").append("<input id=c" + i + "" + j + ' class="textFieldLeft">');
            }
        }                
    });
    $("#sumButton").click(function(){
        matrixLeftInput = getMatrixArr("a");
        matrixRightInput = getMatrixArr("b");
        var output = sumMatrix(matrixLeftInput, matrixRightInput);   
        outputMatrix(output);
    });
    
    $("#multiplyButton").click(function(){
        matrixLeftInput = getMatrixArr("a");
        matrixRightInput = getMatrixArr("b");
        var output = multiplyMatrix(matrixLeftInput, matrixRightInput);
        outputMatrix(output);        
    });
    
    //print the matrix in the HTML
    function outputMatrix(output){
        for(var i = 0; i < output.length; i++ ){
            for(var j = 0; j < output.length; j++){
                $("#c" + i + ""+ j).attr("value", output[i][j]);
            }
        }
    }
    
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
    
     //return the product of 2 matrixes
    function multiplyMatrix(matrixInputLeft, matrixInputRight){
        var result =  getEmpyMatrix(matrixInputLeft.length);
        var temp = 0;
        for(var k = 0; k < matrixInputLeft.length; k++){
            for(var i = 0; i < matrixInputLeft[0].length; i++){
                for(var j = 0; j < matrixInputRight[0].length; j++){
                    temp += parseInt(matrixInputLeft[k][j]) * parseInt(matrixInputRight[j][i]);
                    console.log(temp);
                }
                result[k][i] = temp;
                temp = 0;

                console.log(result);
            }
        }
        return result;
    }
    //return the sum of 2 matrix
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