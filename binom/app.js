var sum = 0;
var globalResult = 0;

main();

function main(){
    console.log(calcBinom(2, 3, 6, 6, 0));
}
 
function calcBinom(a, b, nconst, n, k){    
    if (n < 0) {
        return;
    }
    getComb(nconst, k, 1)
    sum += Math.pow(a, n) * Math.pow(b, k) * globalResult;
    calcBinom(a, b, nconst, n - 1, k + 1);
    return sum;
}

function getComb(n, k, resultComb){
    if (k == 0) {
        globalResult = resultComb;
    }
    if (k > 0) {       
        resultComb *= n / k;
        getComb(n - 1, k - 1, resultComb);
        return resultComb;
    }
    return resultComb;
}
