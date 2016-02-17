DEFAULTTEMP = 20
function Thermostat() {
	this.temp = DEFAULTTEMP
}

Thermostat.prototype.increase = function(number) {
	this.temp += number;
}