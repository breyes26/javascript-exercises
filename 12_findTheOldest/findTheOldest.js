const findTheOldest = function(people) {
    res = people.reduce((prev,curr)=>{
       let prevBirth = prev.yearOfBirth;
       let prevDeath = ("yearOfDeath" in prev)?prev.yearOfDeath:new Date().getFullYear();
       let currBirth = curr.yearOfBirth;
       let currDeath = ("yearOfDeath" in curr)?curr.yearOfDeath:new Date().getFullYear();
       let prevAge = prevDeath - prevBirth;
       let currAge =  currDeath - currBirth;
       return prev = (prevAge > currAge)?prev:curr;
    });
    return res;
};

// Do not edit below this line
module.exports = findTheOldest;
