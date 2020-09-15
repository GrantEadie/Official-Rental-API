export default class RentalService {
  static getRentals(squareFootage, bathrooms, latitude, longitude, propertyType, bedrooms){
    const apiKey = `${process.env.API_KEY}`;
    return fetch(`https://realty-mole-property-api.p.rapidapi.com/rentalPrice?compCount=5&squareFootage=${squareFootage}&bathrooms=${bathrooms}&latitude=${latitude}&longitude=${longitude}&propertyType=${propertyType}&bedrooms=${bedrooms}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "realty-mole-property-api.p.rapidapi.com",
        "x-rapidapi-key": apiKey
      }
    })
      .then(response => {
        if (!response.ok) {
          throw Error (response.statusText);
        }
        return response.json();
      })
      .catch(err => {
        return err;
      });
  }
}

let stJohns = {
  latitude: 45.592097,
  longitude:-122.747639
}
let portsmouth = {
  latitude : 45.589405,
  longitude: -122.719251
}

let universityPark = {
  latitude : 45.581086,
  longitude: -122.730066

}

let kentonPark = {
  latitude : 45.581927,
  longitude : -122.694039
}

let piedmont = {
  latitude : 45.567868,
  longitude : -122.666359
}

let humboldt = {
  latitude : 45.559996,
  longitude : -122.663913
}

let boise = {
  latitude : 45.549749,
  longitude : -122.672539
}

let woodlawn = {
  latitude : 45.570512,
  longitude :  -122.653013
}

let alberta = {
  latitude : 45.552319,
  longitude :  -122.654043
}

let irvington = {
  latitude : 45.543423,
  longitude : -122.653313
}


let alameda = {
  latitude : 45.546308,
  longitude : -122.634902
}

let grantPark = {
  latitude : 45.536569,
  longitude : -122.628100
  
}

let laurelhurst = {
  latitude : 45.528031,
  longitude : -122.625568
  
}

let kerns = {
  latitude : 45.525716,
  longitude :  -122.642992
  
}

let buckman = {
  latitude : 45.518169,
  longitude :  -122.648421
  
}

let belmont = {
  latitude : 45.514741,
  longitude : -122.616256
  
}

let richmond = {
  latitude : 45.503553,
  longitude : -122.625354
  
}

let roseway = {
  latitude : 45.546728,
  longitude : -122.584155
  
}

let northwest = {
  latitude : 45.533562,
  longitude : -122.701271
  
}

let nobHill = {
  latitude : 45.533562,
  longitude : -122.701271
  
}