import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import RentalService from './rental-service.js';
import { neighborhoods } from './neighborhood.js';
import { getNeighborhoods } from './selector.js';

// function getElements(response) {
//   if (response) {
//     All outputs for our program
// } else { 
//   output error message from api
// } $("#errorMessageOutput").html(`There was an error processing your request. ${response.message}`);


// Outputs information of each address
function showInfo(input) {
  console.log(input.address + " " + input.price + " " + input.zipcode);
  $("#show-address").hide();
  $("#address-display").html("<p>showing info for " + input.address + "</p>");
  $("#property-price").html(input.price);
  $("#zipcode").html(input.zipcode);
  $("#days-on-market").html(input.daysOld);
  $("#output-bedrooms").html(input.bedrooms);
  $("#output-bathrooms").html(input.bathrooms);
  $("#correlation").html(input.correlation);
  $("#square-footage").html(input.squareFootage);
  $("#show-address").fadeIn(1000);
}

// Attaches listener for each address
function attachPropertyListeners(response) {
  $("ul#property-listings").on("click", "li", function () {
    showInfo(response.listings[this.id]);
  });
}

// function to click back to map
let backToMap = function () {
  $("#portland-vector").show();
  $(".neighbor-show").hide();
  $("#back-to-map").hide();
};

// Document ready function
$(document).ready(function () {
  let newNeighborhoods = "";
  $("body").fadeIn(2000);
  
  // Click on a neighborhood in the portland map to output new neighborhood info and hide previous clicked info from the SVG 
  let reply_click = function () {
    newNeighborhoods = this.id;
    $(".highlight").css("fill", "black");
    $("#" + this.id + "").css("fill", "lightblue");
    $(".cityInfo").hide();
    $("#neighborhood").html((((this.id).split(/(?=[A-Z])/)).join(' ')).toLowerCase() + "<hr>");
    $(".cityInfo").fadeIn(1000);
    $("hr").fadeIn(4000);
  };

  // This function hides the map and reveals the form for more inputs. It is called on line 75
  let detailClick = function () {
    $("#portland-vector").hide();
    $(".neighbor-show").show();
    $("#back-to-map").show();
  };

  // When clicking back to map button, this function will hide the form
  $("#back-to-map").click(function () {
    $("#rentData").hide();
    backToMap();
  });

  // When clicking the check listings button, it calls the detailClick function that hides the map and reveals the form for more inputs
  $("#check-listing").click(function () {
    detailClick();
  });

  // Calls this function to get neighborhood info from the SVG
  getNeighborhoods(reply_click);
  let neighborhoodInput = "";
  let displayNeighbor = "";

  // Transforms the neighborhood input to display an output in sentence case format
  $("#check-listing").click(function () {
    neighborhoodInput = newNeighborhoods;
    displayNeighbor = neighborhoodInput.charAt(0).toUpperCase() + neighborhoodInput.slice(1);
  });

  // Submit the form function to get the api
  $("#f1").submit(function () {
    event.preventDefault();
    let squareFootageInput = parseInt($("#square-feet").val());
    let bedroomInput = parseInt($("#bedrooms").val());
    let bathroomInput = parseInt($("#bathrooms").val());
    let propertyTypeInput = $("#type").val();
    const latitudeInput = neighborhoods[neighborhoodInput].latitude;
    const longitudeInput = neighborhoods[neighborhoodInput].longitude;
    $("#rentData").show();

    // Taking all the inputs and sending to the get api function in rental-service.js
    RentalService.getRentals(squareFootageInput, bedroomInput, latitudeInput, longitudeInput, propertyTypeInput, bathroomInput)
      .then(function (response) {
        console.log(response);
        $("#rentData h3").text(`Average rent for your property search in ${displayNeighbor} is $${response.rent}`);
        $("#rentData p#low-high").text(`The lowest rent is $${response.rentRangeLow} and the highest rent is $${response.rentRangeHigh} `);
        $("#rentData ul").html("<li id='0'>" + response.listings[0].address + "</li>" + "<li id='1'>" + response.listings[1].address + "</li>" + "<li id='2'>" + response.listings[2].address + "</li>" + "<li id='3'>" + response.listings[3].address + "</li>" + "<li id='4'>" + response.listings[4].address + "</li>");
        attachPropertyListeners(response);
      });
  });
});






