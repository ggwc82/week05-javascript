describe('FizzBuzz', function() {
	var fizzBuzz;
	beforeEach(function() {
		fizzBuzz = new FizzBuzz();
	});

	describe('multiples of 3 and 5', function(){
		it('fizzbuzzes for multiples of 3 and 5', function(){
			expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
		})
	});

	describe('multiples of 3', function() {
		it('fizzes for 3', function() {
			expect(fizzBuzz.play(3)).toEqual('Fizz');
		})
	});

	describe('returns the number if not divisible by 3 or 5', function(){
		it('returns number', function(){
			expect(fizzBuzz.play(11)).toEqual(11);
		})
	});

	describe('multiples of 5', function() {
		it('returns Buzz when divisible by 5', function(){
			expect(fizzBuzz.play(5)).toEqual('Buzz');	
		})
	});
});