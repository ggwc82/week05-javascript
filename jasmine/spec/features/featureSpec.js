describe("Thermostat", function(){

  var thermostat;

  beforeEach(function() {
  thermostat = new Thermostat;
});
  it("has a default temperature of 20", function(){
    expect(thermostat.temp).toEqual(20);
  });
  it("can have its temperature increased", function(){
    thermostat.increase(1);
    expect(thermostat.temp).toEqual(21);
  });
  it("can have its temperature decreased", function(){
  	thermostat.decrease(1);
  	expect(thermostat.temp).toEqual(19);
  });
  it("has a minimum temperature of 10", function(){
    spyOn(thermostat, 'temp').and.returnValue(10)
    expect(function(){thermostat.decrease(1)}).toThrowError("Below minimum temperature!")
  });
});
