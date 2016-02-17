describe("Thermostat", function(){
  it("has a default temperature of 20", function(){
    var thermostat = new Thermostat();
    expect(thermostat.temp).toEqual(20);
  });
  it("can have its temperature increased", function(){
    var thermostat = new Thermostat();
    thermostat.increase(1);
    expect(thermostat.temp).toEqual(21);
  });
  it("can have its temperature decreased", function(){
  	var thermostat = new Thermostat();
  	thermostat.decrease(1);
  	expect(thermostat.temp).toEqual(19);
  });
});

