import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import RentalService from './rental-service.js';

function getElements(response){
  if (response) {
    
    console.log(response);
  }
}


$(document).ready(function () {
  $("#executeButton").click(function () {

    RentalService.getRentals() 
      .then(function(response) {
        getElements(response);
        console.log(response);
      });
  });  
});
