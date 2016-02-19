$(document).ready(function(){

  var thermostat = new Thermostat();

  $("#reset").click(function(){
    thermostat.reset();
    refresh();
  });

  function displayWeather(city) {
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed'
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
     console.log(data.main.temp); 
      $('#current-temperature').text(data.main.temp);
    })
  }

  $("#powerSavingOn").click(function(){
    thermostat.powerSavingOn();
    refresh();
  });

  $("#powerSavingOff").click(function(){
    thermostat.powerSavingOff();
    refresh();
  });

  $("#decreaseTemp").click(function(){
    thermostat.decrease(1);
    refresh();
  });

  $("#increaseTemp").click(function(){
    thermostat.increase(1);
    refresh();
  });

  var refresh = function() { $("div.display").html("<p class="+ thermostat.display() + ">" + thermostat.temp + "</p>")};

  refresh();

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  });

});
