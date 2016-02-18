var DEFAULTTEMP = 20

function Thermostat() {
	this.temp = DEFAULTTEMP
	this.maximum = 25
}

Thermostat.prototype.increase = function(number) {
	if (this.temp + number > this.maximum) { throw "Maximum temperature is " + this.maximum }
  console.log("increase temp")
		this.temp += number;
}
Thermostat.prototype.decrease = function(number) {
	if (this.temp - number < 10) { throw "Below minimum temperature!"; };
  console.log("decrease temp")
	this.temp -= number;
}

Thermostat.prototype.powerSavingOn = function() {
  console.log("pwerSaving on")
	this.maximum = 25;
}

Thermostat.prototype.powerSavingOff = function() {
  console.log("pwrSaving off")
	this.maximum = 32;
}

Thermostat.prototype.reset = function() {
  console.log("Called the reset method")
	this.temp = DEFAULTTEMP;
}

Thermostat.prototype.display = function() {
	if (this.temp < 18) { 
		return "green"; 
	} else if (this.temp <= 25) {
		return "yellow";
	} else {
		return "red";
	}	
}
