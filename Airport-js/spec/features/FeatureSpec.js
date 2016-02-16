// As an air traffic controller 
// So I can get passengers to a destination 
// I want to instruct a plane to land at an airport and confirm that it has landed 

'use strict';

describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport(); 
  });

  describe('As an air traffic controller:', function(){
    it('I want to land a plane', function(){
      plane.land(airport);
      expect(airport.planes()).toContain(plane);     
    }); 
  });
});

