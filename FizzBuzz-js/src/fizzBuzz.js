var Javabuzz = function(){};

Javabuzz.prototype.says = function(num) {
  
  if (this.isDivisibleBy(num, 15)){
    return 'FizzBuzz'
  };

  if (this.isDivisibleBy(num, 5)) {
    return 'Buzz'
  };

  if (this.isDivisibleBy(num, 3)) {
    return 'Fizz';
  };
  return num; 
};

Javabuzz.prototype.isDivisibleBy = function(num, divisor){
  return num % divisor === 0;
};

