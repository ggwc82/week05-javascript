describe("Thermostat", function(){
  it("exists", function(){
      var thermostat = new Thermostat();
    expect(thermostat).toBeDefined();
  });

  it("has a default temperature", function(){
  	var thermostat = new Thermostat();
  	expect(thermostat.temp).toEqual(20);
  });
});
