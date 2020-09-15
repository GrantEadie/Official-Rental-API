export default class RentalService {
  static getRentals(squareFootage, bathrooms, latitude, longitude, propertyType, bedrooms){
    const apiKey = `${process.env.API_KEY}`;
    return fetch(`https://realty-mole-property-api.p.rapidapi.com/rentalPrice?compCount=10${squareFootage}&bathrooms=${bathrooms}&latitude=${latitude}&longitude=${longitude}&propertyType=${propertyType}&bedrooms=${bedrooms}`, {
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

