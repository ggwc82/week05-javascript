DEFAULTTEMP = 20
function Thermostat() {
	this.temp = DEFAULTTEMP
}

Thermostat.prototype.increase = function(number) {
	this.temp += number;
}
Thermostat.prototype.decrease = function(number) {
	this.temp -= number;
}
