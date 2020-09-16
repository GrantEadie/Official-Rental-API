import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import RentalService from './rental-service.js';
import { neighborhoods } from './neighborhood.js';
import { getNeighborhoods } from './selector.js';

// function getElements(response) {
//   if (response) {
//     // // $("#outputRentLow").text(response.rentRangeLow);
//     // // $("#outputRentHigh").text(response.rentRangeHigh);
//     // $("#outputListing1Address").text("Address: " + response.listings[0].address);
//     // $("#outputListing1Price").text("Price: " + response.listings[0].price);
//     // if ((response.listings[0].squareFootage).toString().length > 0) {
//     //   $("#outputLIstings1SquareFootage").show();
//     //   $("#outputListing1SquareFootage").text("Square Footage: " + response.listings[0].squareFootage);
//     // } else {
//     //   $("#outputLIstings1SquareFootage").hide();

//     // }
//     // // let string = response.listings[0].squareFootage.toString("");

//     // $("#outputListing1DaysOnMarket").text("This property has been on the market for " + response.listings[0].daysOld + " days.");
//     // $("#outputListing1Bedrooms").text("Bedrooms: " + response.listings[0].bedrooms);
//     // $("#outputListing1Bathrooms").text("Bathrooms: " + response.listings[0].bathrooms);

//     // $("#outputListing2").text(response.listings[1]);
//     // $("#outputListing3").text(response.listings[2]);
//     // $("#outputListing4").text(response.listings[3]);
//     // $("#outputListing5").text(response.listings[4]);

//     // // Display Listing TEST TEST//
//     // // lisitng array from API call will be a variable number of elements from 1-10 //



//     // // use a carousel or other bootstrap feature to allow user to look through lisitngs in neighborhood //

//     // // Test output
//     // $("#result").text(response);
//     // console.log(response);
//   }
// }

let otherClick = function () {
  $("#portland-vector").show();
  $(".neighbor-show").hide();
  $("#but").show();
  $("#back-to-map").hide();
};

$(document).ready(function () {
  $("#api-call").click(function () {
  });


  otherClick();
  $("body").fadeIn(2000);

  let newNeighborhoods = "";
  let reply_click = function () {
    newNeighborhoods = this.id;
    $(".cityInfo").hide();
    $("#neighborhood").html((((this.id).split(/(?=[A-Z])/)).join(' ')).toLowerCase() + "<hr>");
    $(".cityInfo").fadeIn(1000);
    $("hr").fadeIn(4000);
  };

  let detailClick = function () {
    $("#portland-vector").hide();
    $(".neighbor-show").show();
    $("#but").hide();
    $("#back-to-map").show();
  };

  $("#back-to-map").click(function () {
    otherClick();
  });

  $("#check-listing").click(function () {
    detailClick();
  });


  getNeighborhoods(reply_click);

  let neighborhoodInput = "";
  let displayNeighbor = "";

  $("#check-listing").click(function () {
    neighborhoodInput = newNeighborhoods;
    displayNeighbor = neighborhoodInput.charAt(0).toUpperCase() + neighborhoodInput.slice(1);
  });


  $("#f1").submit(function () {
    event.preventDefault();
    let squareFootageInput = parseInt($("#square-feet").val());
    let bedroomInput = parseInt($("#bedrooms").val());
    let bathroomInput = parseInt($("#bathrooms").val());
    let propertyTypeInput = $("#type").val();

    console.log('watup');
    let apiKey = process.env.API_KEY;
    console.log(apiKey);

    const latitudeInput = neighborhoods[neighborhoodInput].latitude;
    const longitudeInput = neighborhoods[neighborhoodInput].longitude;

    console.log(squareFootageInput, bathroomInput, latitudeInput, longitudeInput, propertyTypeInput, bedroomInput);

    $("#rentData").show();

    RentalService.getRentals(squareFootageInput, bedroomInput, latitudeInput, longitudeInput, propertyTypeInput, bathroomInput)
      .then(function (response) {
        console.log(response);
        $("#rentData h3").text(`Average rent for your property search in ${displayNeighbor} is $ ${response.rent}`);
        $("#rentData p").text(`The lowest rent is $ ${response.rentRangeLow} and the highest rent is $ ${response.rentRangeHigh} `);
        $("#rentData ul").html("<li>" + response.listings[0].address + "</li>" + "<li>" + response.listings[1].address + "</li>" + "<li>" + response.listings[2].address + "</li>" + "<li>" + response.listings[3].address + "</li>" + "<li>" + response.listings[4].address + "</li>");
      });
  });
});








// ------------ example card --------------


/* <div class="card" class="form-group" class="radio">
    <div class="card-body">
      <label for="question1"><u><strong>Would you rather:</strong></u></label>
      <div class="radio">
        <label>
          <input type="radio" name="question1" value="cats">
          a. Own 100 cats named Jeffery
        </label>
      </div>
      <div class="radio">
        <label>
          <input type="radio" name="question1" value="chins">
          b. Own 200 grey Chinchillas
        </label>
      </div>
    </div>  
  </div> */