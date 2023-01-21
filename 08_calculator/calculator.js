const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
	return arr.reduce((total,num)=>{
    return total + num
  },0);
};

const multiply = function(arr) {
  return arr.reduce((total,num)=>{
    return total * num
  });
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
	const helper = function(num){
    if(num === 0){
      return 1;
    }
    return (num) * helper(num-1);
  }

  return helper(num);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
