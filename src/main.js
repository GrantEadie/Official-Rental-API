import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import RentalService from './rental-service.js';
import {neighborhoods} from './neighborhood.js';

function getElements(response){
  if (response) {
    // $("#outputRentLow").text(response.rentRangeLow);
    // $("#outputRentHigh").text(response.rentRangeHigh);
    $("#outputListing1Address").text("Address: " + response.listings[0].address);
    $("#outputListing1Price").text("Price: " + response.listings[0].price);
    $("#outputListing1SquareFootage").text("Square Footage: " + response.listings[0].squareFootage);
    $("#outputListing1DaysOnMarket").text("This property has been on the market for " + response.listings[0].daysOld + " days.");
    $("#outputListing1Bedrooms").text("Bedrooms: " + response.listings[0].bedrooms);
    $("#outputListing1Bathrooms").text("Bathrooms: " + response.listings[0].bathrooms);
    

    $("#outputListing2").text(response.listings[1]);
    $("#outputListing3").text(response.listings[2]);
    $("#outputListing4").text(response.listings[3]);
    $("#outputListing5").text(response.listings[4]);
    console.log(response.listings);
    
    // Display Listing TEST TEST//
    // lisitng array from API call will be a variable number of elements from 1-10 //
    
    
    // function writeListing(property) {
    //   let html = '';
    //   html += `<div class="carousel-item active" >`;
    //   html += `<div class='card search-card col-6'><div class='card-header'>${property[0].address}</div>`;
    //   html += `<div class='card-body'> Monthly Rent: ${property[0].price}</div>`;
    //   html += `<p>${property[0].bedrooms}</p>`;
    //   html += `</div></div>`;
    //   for(let i = 1; i <= response.listings.length; i++) {
    //     html += `<div class="carousel-item " >`;
    //     html += `<div class='card search-card col-6'><div class='card-header'>${property[i].address}</div>`;
    //     html += `<div class='card-body'> Monthly Rent: ${property[i].price} </div>`;
    //     html += `<p>${property[i].bedrooms}</p>`;
    //     html += `</div></div>`;
    //   }
    //   //console.log(html);
    //   $('.carousel-inner').html(html);
      
    // } 
    
    
    
    
    
    response.listings.forEach(function(property) {
      console.log(property);

      console.log(property.address);
      //$("#outputListing1Address").text(property.address);
      
      //$("#outputListing1Price").text(property.price);
      
      //$("#outputListing1SquareFootage").text(property.squareFootage);
      
      //$("#outputListing1DaysOnMarket").text("This property has been on the market for " + response.listings[0].daysOld + " days.");
      
      //$("#outputListing1Bedrooms").text(response.listings[0].bedrooms);
      
      //$("#outputListing1Bathrooms").text(response.listings[0].bathrooms);
    });

    
    
    // use a carousel or other bootstrap feature to allow user to look through lisitngs in neighborhood //

    // Test output
    $("#result").text(response);
    console.log(response);
  }
}


$(document).ready(function () {
  $("#executeButton").click(function () {
    // test input
    let neighborhoodInput = "boise";

    // let neighborhoodInput = $("#neighborhood");
    // findNeighborhoodCoordinates(neighborhoodInput);
    let input = 1200;
    let squareFootageInput = "&squareFootage="+input;  
  
    // let squareFootageInput = $("#squareFootage");
    let bathroomInput = 3;
    let propertyTypeInput = "apartment";
    let bedroomInput = 4;

    // writeListings(reponse.listings);
    
    // let squareFootageInput = $("#squareFootage");
    // let bathroomInput = $("#bathrooms");
    // let propertyTypeInput = $("#property");
    // let bedroomInput = $("#bedroom");
    
    const latitudeInput = neighborhoods[neighborhoodInput].latitude;
    const longitudeInput = neighborhoods[neighborhoodInput].longitude;

    // FORREST TEST CODE //

    
    console.log(neighborhoods[neighborhoodInput].latitude);
    
    
    
    
    RentalService.getRentals(squareFootageInput, bathroomInput, latitudeInput, longitudeInput, propertyTypeInput, bedroomInput) 
      .then(function(response) {
        getElements(response);
        
      });
  });  
});
