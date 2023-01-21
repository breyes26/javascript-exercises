const fibonacci = function(num) {
    const go = num=>{
        if(num==0){
            return 0;
        }
        if(num==1){
            return 1;
        }
        return go(num-1) + go(num-2);
    };
    if(num<0){
         return "OOPS";
    }
    return go(num);
};

// Do not edit below this line
module.exports = fibonacci;
