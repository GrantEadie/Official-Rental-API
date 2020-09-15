import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import RentalService from './rental-service.js';
import {UserNeighborhood, neighborhoods} from './neighborhood.js';

function getElements(response){
  if (response) {
    // $("#outputRentLow").text(response.rentRangeLow);
    // $("#outputRentHigh").text(response.rentRangeHigh);
    $("#outputListing1Address").text(response.listings[0].address);
    $("#outputListing1Price").text(response.listings[0].price);
    $("#outputListing1SquareFootage").text(response.listings[0].squareFootage);
    $("#outputListing1DaysOnMarket").text("This property has been on the market for " + response.listings[0].daysOld + " days.");
    $("#outputListing1Bedrooms").text(response.listings[0].bedrooms);
    $("#outputListing1Bathrooms").text(response.listings[0].bathrooms);
    

    $("#outputListing2").text(response.listings[1]);
    $("#outputListing3").text(response.listings[2]);
    $("#outputListing4").text(response.listings[3]);
    $("#outputListing5").text(response.listings[4]);
    console.log(response);
    
    // Display Listing //
    // lisitng array from API call will be a variable number of elements from 1-10 //
    response.listings.forEach(property) {
      
      $("#outputListing1Address").text(property.address);
      
      $("#outputListing1Price").text(property.price);
      
      $("#outputListing1SquareFootage").text(property.squareFootage);
      
      $("#outputListing1DaysOnMarket").text("This property has been on the market for " + response.listings[0].daysOld + " days.");
      
      $("#outputListing1Bedrooms").text(response.listings[0].bedrooms);
      
      $("#outputListing1Bathrooms").text(response.listings[0].bathrooms);
    }

    
    
    // use a carousel or other bootstrap feature to allow user to look through lisitngs in neighborhood //

    // Test output
    $("#result").text(response)
    console.log(response);
  }
}


$(document).ready(function () {
  $("#executeButton").click(function () {
    // test input
    let neighborhoodInput = "stJohns";

    // let neighborhoodInput = $("#neighborhood");
    // findNeighborhoodCoordinates(neighborhoodInput);
    let input = 1200;
    let squareFootageInput = "&squareFootage="+input;  
    // let input = 1200;
    // let squareFootageInput = "&squareFootage="+input;
    console.log(squareFootageInput);
    let bathroomInput = 3;
    let propertyTypeInput = "apartment";
    let bedroomInput = 4;

    // let squareFootageInput = $("#squareFootage");
    // let bathroomInput = $("#bathrooms");
    // let propertyTypeInput = $("#property");
    // let bedroomInput = $("#bedroom");
    const latitudeInput = neighborhoods[neighborhoodInput].latitude;
    const longitudeInput = neighborhoods[neighborhoodInput].longitude;

    // FORREST TEST CODE //

    const inputNeighborhood = new UserNeighborhood (neighborhoodInput);
    
    console.log(inputNeighborhood);

    console.log(neighborhoods[neighborhoodInput].latitude);
    
    let latLong = inputNeighborhood.getCoordinates();
    
    
    
    
    RentalService.getRentals(squareFootageInput, bathroomInput, latitudeInput, longitudeInput, propertyTypeInput, bedroomInput) 
      .then(function(response) {
        getElements(response);
        
      });
  });  
});
