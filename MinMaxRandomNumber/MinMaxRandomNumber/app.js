for (var i = 0; i <= 10000; i++) {
    var a = getRandomInRange(0, 100);
    console.log(a);
}

function getRandomInRange(min, max){ 
    return Math.floor(Math.random()*(max-min)+min);
}