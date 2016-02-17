describe("Thermostat", function(){
  it("exists", function(){
      var thermostat = new Thermostat();
    expect(thermostat).toBeDefined();
  });

  it("has a default temperature", function(){
  	var thermostat = new Thermostat();
  	expect(thermostat.temp).toEqual(20);
  });

  it("can have its temperature increased", function(){
    var thermostat = new Thermostat();
    thermostat.increase(1)
    expect(thermostat.temp).toEqual(21);
  });
});
