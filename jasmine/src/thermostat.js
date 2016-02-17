DEFAULTTEMP = 20
function Thermostat() {
	this.temp = DEFAULTTEMP
}

Thermostat.prototype.increase = function(number) {
	this.temp += number;
}
Thermostat.prototype.decrease = function(number) {
	console.log("Before error in src file:" + this.temp);
	if (this.temp - number < 10) { throw "Below minimum temperature!"; };
	console.log("After error in src file:" + this.temp);
	this.temp -= number;
}
