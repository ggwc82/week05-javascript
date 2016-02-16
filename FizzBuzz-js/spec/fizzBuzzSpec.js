describe('Javavbuzz', function(){
  var javabuzz;

  beforeEach(function(){
    javabuzz = new Javabuzz();
  
  });

  describe('Knows when the number is', function(){
    it('divisible by 3', function(){
    expect(javabuzz.isDivisibleBy(3, 3)).toBe(true);

        }); 
  });

  describe('Knows when the number is NOT', function(){
    it('divisible by 3', function(){
      expect(javabuzz.isDivisibleBy(1, 3)).toBe(false);
    });
  });


  describe('Knows when the num is', function(){
    it('divisible by 5', function(){
      expect(javabuzz.isDivisibleBy(5, 5)).toBe(true);
    });
  });

  describe('Knows when the num is NOT', function(){
  it('divisible by 5', function(){
   expect(javabuzz.isDivisibleBy(4, 5)).toBe(false);
  });
  });

  describe('Knows when the num is divisible by 15', function(){
  it('divisible by 15', function(){
   expect(javabuzz.isDivisibleBy(15, 15)).toBe(true);
  });
  });
  describe('Knows when the num is NOT', function(){
    it('divisible by 15', function(){
      expect(javabuzz.isDivisibleBy(16, 15)).toBe(false);
    });
  });

  describe('when playing, says', function(){
    it('Fizz', function(){
      expect(javabuzz.says(3)).toBe('Fizz'); 
    }); 
  });
  describe('when playing, says', function(){
    it('Buzz', function(){
      expect(javabuzz.says(5)).toBe('Buzz'); 
    }); 
  });
  describe('when playing, says', function(){
    it('FizzBuzz', function(){
      expect(javabuzz.says(15)).toBe('FizzBuzz'); 
    }); 
  });
  describe('when playing, says', function(){
    it('the number', function(){
      expect(javabuzz.says(22)).toBe(22); 
    }); 
  });
  
});

