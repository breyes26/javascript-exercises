const reverseString = function(s) { 

    res = ""
    s.split("").forEach(element => {
        res = element + res
    });
    return res
};

// Do not edit below this line
module.exports = reverseString;
