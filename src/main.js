import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import RentalService from './rental-service.js';

function getElements(response){
  if (response) {
    $("#outputRentLow").text(response.rentRangeLow);
    $("#outputRentHigh").text(response.rentRangeHigh);
    
    console.log(response);
  }
}


$(document).ready(function () {
  $("#executeButton").click(function () {
    let neighborhoodInput = $("#neighborhood");
    findNeighborhoodCoordinates(neighborhoodInput);
    let squareFootageInput = $("#squareFootage");
    let bathroomInput = $("#bathrooms");
    let propertyTypeInput = $("#property");
    let bedroomInput = $("#bedroom");
    const latitudeInput = Object.values(neighborhoodCoordinates.neighborhood[0]);
    const longitudeInput = Object.values(neighborhoodCoordinates.neighborhood[1]);
    RentalService.getRentals(squareFootageInput, bathroomInput, latitudeInput, longitudeInput, propertyTypeInput, bedroomInput) 
      .then(function(response) {
        getElements(response);
        
      });
  });  
});
