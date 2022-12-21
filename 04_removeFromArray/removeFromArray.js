const removeFromArray = function(arr,...theArgs) {
    for(const arg of theArgs){
        rv = arr.indexOf(arg)
        while(rv >= 0){
            arr.splice(rv,1);
            rv = arr.indexOf(arg);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
