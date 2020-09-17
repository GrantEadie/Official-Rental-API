# _Hygge real estate_

#### _Team Week Project, September 17,2020_

#### By _Jeff Dinsmore, Forrest Reiland, Grant Eadie, Adam Mansell_

## Description

_This web application is designed to allow a user to quickly find rental information about any neighborhood in Portland, OR. When a user naviagates to the web page an interactive map of Portland is displayed. A user can click the neighborhood of their choice. The latitude and longitude coordinates of the neighborhood center are then passed into an API containing real estate information (we used Realty Mole). After a neighborhood is specified a form is shown to the user. Here more specific rental parameters are passed into the search. A user can enter square footage, bedrooms and bathrooms as well as the type of property. These search criteria are added to the location data and used to make an API call. The information is return in a JSON object and parsed to return real-time data to the user._ 

_We display the average and high/low rent values for the users serach neighborhood. Below we display the top five properties that match the search criteria. A user can click each property to see the specs for that address. These include days on the market, the square footage, the monthly rent price, and the zip code._

_To generate your unique API key visit https://rapidapi.com/realtymole/api/realty-mole-property-api/endpoints. Fill out the required information to generate your API key. Your API key should be stored within the main file directory in a file named ".env". A webpack plugin, dotenv is required to inject the api variable into the directory scripts. The API should be stored in the variable "API_KEY". Furthermore, the .env file should not be made public or shared to Github._

## Setup/Installation Requirements

* _Clone this repository._
* _Open repository in your preferred code builder program. (This was built in VS Code)_
* _Check your package.json file to ensure the proper notation under the "scripts": and "start": tags. This was built using a Windows PC. If you using a Mac, remove the "&" symbol after the "npm run build" text in "Scripts: start:" and add a ";" after "build"._
* _Add a .env file in the root directory_
* _Register for an api key from https://rapidapi.com/realtymole/api/realty-mole-property-api/endpoints_
* _Insert api key into .env file with proper notation. Example: "API_KEY=[your-api-key-number]"_
* _In the terminal, type "npm install"_
* _After npm install runs, type in the terminal "npm run build" ("npm run start" may suffice but we will keep these commands separate)_
* _After npm run build finishes, type in the terminal "npm run start" and press enter_
* _The browser should open with the webpack bundled_

## Known Bugs

_No known bugs at the this time._

## Support and contact details

_Please check the package.json and the webpack.config.js files for proper notation between Mac and Windows machines._
_Any known issues or contributions, please reach out to Jeff Dinsmore by email at hello@jeffdinsmore.com._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _jQuery_
* _JavaScript_
* _Node_
* _API_

## License

Copyright (c) 2020, **_Jeff Dinsmore, Forrest Reiland, Grant Eadie, Adam Mansell_**_

This software is licensed under the MIT license.