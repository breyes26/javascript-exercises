const repeatString = function(str,reps) {
    rs = ""
    if(reps<0){
        return "ERROR";
    }
    for(let i =0;i<reps;i++){
        rs += str;
    }
    return rs;
};

// Do not edit below this line
module.exports = repeatString;
