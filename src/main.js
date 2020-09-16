import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import RentalService from './rental-service.js';
import { neighborhoods } from './neighborhood.js';

function getElements(response) {
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

    // Display Listing TEST TEST//
    // lisitng array from API call will be a variable number of elements from 1-10 //

    response.listings.forEach(function (property) {
      $("rentData");

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

  $("body").fadeIn(2000);

  let reply_click = function () {
    $(".cityInfo").hide();
    $("#neighborhood").html((((this.id).split(/(?=[A-Z])/)).join(' ')).toLowerCase() + "<hr>");
    $(".cityInfo").fadeIn(1000);
    $("hr").fadeIn(4000);
  };

  let detailClick = function () {
    $("#portland-vector").hide();
    $("#neighbor-show").show();
    $("#but").hide();

    
  };

  $("#but").click(function() {
    detailClick();
  
  
  });

  document.getElementById('saintJohns').onclick = reply_click;
  document.getElementById('forestPark').onclick = reply_click;
  document.getElementById('linnton').onclick = reply_click;
  document.getElementById('sunderland').onclick = reply_click;
  document.getElementById('farSouthwest').onclick = reply_click;
  document.getElementById('northwest').onclick = reply_click;
  document.getElementById('pleasantValley').onclick = reply_click;
  document.getElementById('cully').onclick = reply_click;
  document.getElementById('bridgeton').onclick = reply_click;
  document.getElementById('hazelwood').onclick = reply_click;
  document.getElementById('maplewoodAshcreek').onclick = reply_click;
  document.getElementById('lents').onclick = reply_click;
  document.getElementById('governmentIsland').onclick = reply_click;
  document.getElementById('powellhurst').onclick = reply_click;
  document.getElementById('wilkes').onclick = reply_click;
  document.getElementById('kenton').onclick = reply_click;
  document.getElementById('parkrose').onclick = reply_click;
  document.getElementById('roseway').onclick = reply_click;
  document.getElementById('argay').onclick = reply_click;
  document.getElementById('centennial').onclick = reply_click;
  document.getElementById('overlook').onclick = reply_click;
  document.getElementById('montevilla').onclick = reply_click;
  document.getElementById('sellwoodMoreland').onclick = reply_click;
  document.getElementById('cathedralPark').onclick = reply_click;
  document.getElementById('hadenIsland').onclick = reply_click;
  document.getElementById('hillsdale').onclick = reply_click;
  document.getElementById('richmond').onclick = reply_click;
  document.getElementById('brentwoodDarlington').onclick = reply_click;
  document.getElementById('woodlawn').onclick = reply_click;
  document.getElementById('corbettTerwilligerLairHill').onclick = reply_click;
  document.getElementById('mountTabor').onclick = reply_click;
  document.getElementById('southwestHills').onclick = reply_click;
  document.getElementById('king').onclick = reply_click;
  document.getElementById('hosford').onclick = reply_click;
  document.getElementById('concordia').onclick = reply_click;
  document.getElementById('woodstock').onclick = reply_click;
  document.getElementById('bridlemile').onclick = reply_click;
  document.getElementById('hayhurst').onclick = reply_click;
  document.getElementById('center').onclick = reply_click;
  document.getElementById('eastMoreland').onclick = reply_click;
  document.getElementById('millpark').onclick = reply_click;
  document.getElementById('buckman').onclick = reply_click;
  document.getElementById('portsmith').onclick = reply_click;
  document.getElementById('alameda').onclick = reply_click;
  document.getElementById('universityPark').onclick = reply_click;
  document.getElementById('downtown').onclick = reply_click;
  document.getElementById('mountScott').onclick = reply_click;
  document.getElementById('eliot').onclick = reply_click;
  document.getElementById('arborLodge').onclick = reply_click;
  document.getElementById('irvington').onclick = reply_click;
  document.getElementById('southTabor').onclick = reply_click;
  document.getElementById('fosterPowell').onclick = reply_click;
  document.getElementById('boise').onclick = reply_click;
  document.getElementById('crestonKenilworth').onclick = reply_click;
  document.getElementById('kerns').onclick = reply_click;
  document.getElementById('brooklyn').onclick = reply_click;
  document.getElementById('reed').onclick = reply_click;
  document.getElementById('lloyd').onclick = reply_click;
  document.getElementById('pearlDistrict').onclick = reply_click;
  document.getElementById('bossIsland').onclick = reply_click;
  document.getElementById('oldTownChinatown').onclick = reply_click;


  $("#executeButton").click(function () {
    // test input
    let neighborhoodInput = "laurelhurst";
    let displayNeighbor = neighborhoodInput.charAt(0).toUpperCase() + neighborhoodInput.slice(1);
    console.log(displayNeighbor);
    // let neighborhoodInput = $("#neighborhood");
    // findNeighborhoodCoordinates(neighborhoodInput);
    let input = 1200;
    let squareFootageInput = "&squareFootage=" + input;

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
      .then(function (response) {
        getElements(response);
        $("#rentData h3").text(`The average rent for your search criteria in ${displayNeighbor} neighborhood is $ ${response.rent}`);
        $("#rentData p").text(`The lowest rent is $ ${response.rentRangeLow} and the highest rent is $ ${response.rentRangeHigh} `);
        $("#rentData ul").html("<li>" + response.listings[0].address + "</li>" + "<li>" + response.listings[1].address + "</li>");
        $("#rentData ul").html("<li>" + response.listings[1].address + "</li>");
        $("#rentData ul").html("<li>" + response.listings[2].address + "</li>");
        $("#rentData ul").html("<li>" + response.listings[3].address + "</li>");
        $("#rentData ul").html("<li>" + response.listings[4].address + "</li>");
      });
  });
});
