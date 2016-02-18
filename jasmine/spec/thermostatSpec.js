describe("Thermostat", function(){

  var thermostat
  beforeEach(function(){
    thermostat = new Thermostat
  })
  it("exists", function(){
    expect(thermostat).toBeDefined();
  });

  it("has a default temperature", function(){
  	expect(thermostat.temp).toEqual(20);
  });

  it("can have its temperature increased", function(){
    thermostat.increase(1)
    expect(thermostat.temp).toEqual(21);
  });
  it("can have its temperature decreased", function(){
  	thermostat.decrease(1);
  	expect(thermostat.temp).toEqual(19);
  });
  it("has a minimum temperature of 10", function(){
    for (var i = 1; i < 11; i++) {
    	thermostat.decrease(1);
    } 
    expect(function(){thermostat.decrease(1)}).toThrow("Below minimum temperature!")
  });
  it("Power saving mode ON sets new maximum temperature of 25", function(){
  	thermostat.powerSavingOn();
  	expect(function(){thermostat.increase(6)}).toThrow("Maximum temperature is 25");
  });
  it("Power saving mode OFF sets maximum temperature of 32", function(){
  	thermostat.powerSavingOff();
  	expect(function(){thermostat.increase(13)}).toThrow("Maximum temperature is 32");
  })
});
