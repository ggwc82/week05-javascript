describe("Thermostat", function(){
  it("has a default temperature of 20", function(){
    var thermostat = new Thermostat();
    expect(thermostat.temp).toEqual(20);
  });

});
