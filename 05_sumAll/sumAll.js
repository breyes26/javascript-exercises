const sumAll = function(a,b) {
    if(typeof(a) != "number" || typeof(b) != "number"){
        return "ERROR";
    }
    if(a<0 || b<0){
        return "ERROR";
    }
    if(a>b){
        [a,b] = [b,a];
    }
    res = 0;
    for(let i = a; i <=b;i++){
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
