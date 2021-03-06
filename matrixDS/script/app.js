/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */

main();

function main() {
    var matrix = [
        [-6, -5, 0, 0, 0, 0],
        [-1, -6, -5, 0, 0, 0],
        [0, -1, -6, -5, 0, 0],
        [0, 0, -1, -6, -5, 0],
        [0, 0, 0, -1, -6, -5],
        [0, 0, 0, 0, -1, -6]
    ];
    var a = getDS(matrix);
    console.log(a);

}
function get3x3DS(inputMatrix) {
    return (inputMatrix[0][0] * inputMatrix[1][1] * inputMatrix[2][2]) + (inputMatrix[0][1] * inputMatrix[1][2] * inputMatrix[2][0]) + (inputMatrix[0][2] * inputMatrix[1][0] * inputMatrix[2][1]) - (inputMatrix[0][2] * inputMatrix[1][1] * inputMatrix[2][0]) - (inputMatrix[0][0] * inputMatrix[1][2] * inputMatrix[2][1]) - (inputMatrix[0][1] * inputMatrix[1][0] * inputMatrix[2][2]);
}

function get2x2DS(inputMatrix) {
    return (inputMatrix[0][0] * inputMatrix[1][1]) - (inputMatrix[0][1] * inputMatrix[1][0]);
}

function is3x3(inputMatrix) {
    if (inputMatrix.length == 3) {
        return true;
    }
    return false;
}
function isMatrixSquare(inputMatrix) {
    for (var i = 0; i < inputMatrix.length; i++) {
        if (inputMatrix.length != inputMatrix[i].length) {
            return false;
        }
    }
    return true;
}
function getDS(inputMatrix) {
    if (isMatrixSquare(inputMatrix) == false) {
        return NaN;
    }
    if (is3x3(inputMatrix) == true) {
        return get3x3DS(inputMatrix);
    }
    var outputMatrix = getEmptyMatrix([], inputMatrix.length - 1);
    var index = -1;
    var jIndex = 0;
    var kIndex = 0;
    var temp = 0;
    for (var i = 0; i < inputMatrix.length; i++) {
        index *= -1;
        for (var j = 1; j < inputMatrix.length; j++) {
            for (var k = 0; k < inputMatrix.length; k++) {
                if (i != k) {
                    outputMatrix[jIndex][kIndex] = inputMatrix[j][k];
                    kIndex++;
                }
            }
            kIndex = 0;
            jIndex++;
        }
        jIndex = 0;
        console.log(outputMatrix); // TEMP!!!
        console.log("Getting deeper");//TEMP!!
        temp += inputMatrix[0][i] * index * getDS(outputMatrix);
    }
    return temp;

}

//Returns an empty Matrix nxn
function getEmptyMatrix(inputMatrix, n) {
    for (var i = 0; i < n; i++) {
        inputMatrix[i] = new Array(n);
    }
    return inputMatrix;
}
