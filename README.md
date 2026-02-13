# React + Vite

Weather Checker app

npm install

npm run dev

Design a web app where users can enter a city name to check the weather in that city.
This Application should contain the following pages:
1. A page having an input text field which will be used to enter a city name & one button
which will open another page having weather information.
2. A page that will show the weather information
3. Implement proper error handling for invalid city names, displaying an error message
if the city is not found.
4. Handle the API response to ensure the front-end remains unaffected and doesn't
require redeployment when the response structure changes.
a. Come up with a proper response pattern
b. Flatten the structure of response

Bonus:
1. Display a list of previously searched cities beneath the input field on the same page,
allowing users to click on them to fetch the weather again.
Free public weather API:
https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=d7b950541d7264a3b3df8
0a8b6f2cbf7

ADVANCE:

In advance, we will upgrade the above application, where there will be three pages
1. The section on the home page will have a list of cities saved by the user.
a. A form to save cities
b. It will have a button to add a city to the list, saved cities should be persistent.
c. Users should be able to select multiple cities to delete, with a checkbox &
selected cities should be highlighted with a different color.
d. When a user clicks on a city card it should open a page to show weather info
for that city

2. A page to show weather information.

# weather-app
weather app , user can write their city name according to their need..it show the city temperature ,also persist the city into the list.. 
