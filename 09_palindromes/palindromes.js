const palindromes = function (s) {
    
    const isAlpha = (str)=>{
        let regEx = /^[a-z]$/;
        if(str.match(regEx)){
            return true;
        }
        return false;
    };
    
    const sLower = s.toLowerCase().split("");
    let l = 0;
    let r = sLower.length -1;
    while(l<r){
        while(!isAlpha(sLower[l]) && l<r){
            l+=1
        }
        while(!isAlpha(sLower[r]) && l<r){
            r-=1
        }
        if(sLower[l] != sLower[r]){
            return false;
        }
        l+=1;
        r-=1;
    }

    return true;
    
};

// Do not edit below this line
module.exports = palindromes;
