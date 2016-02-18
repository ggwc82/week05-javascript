DEFAULTTEMP = 20
function Thermostat() {
	this.temp = DEFAULTTEMP
	this.maximum = 25
}

Thermostat.prototype.increase = function(number) {
	if (this.temp + number > this.maximum) { throw "Maximum temperature is " + this.maximum }
	this.temp += number;
}
Thermostat.prototype.decrease = function(number) {
	if (this.temp - number < 10) { throw "Below minimum temperature!"; };
	this.temp -= number;
}

Thermostat.prototype.powerSavingOn = function() {
	this.maximum = 25;
}
