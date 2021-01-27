// from data.js
var tableData = data;

// YOUR CODE HERE!

// Use D3 to select the table body
var tableBody = d3.select("tbody");

// Loop through the data and append data to the table body
tableData.forEach(data => {
    console.log(data);
    var row = tableBody.append("tr");
    Object.entries(data).forEach(([key, value]) =>{
      console.log(key, value);
      row.append("td").text(value);
    })
})

//Use a date form in your HTML document and write JavaScript code that will listen for events 
//and search through the date/time column to find rows that match user input

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");

    var inputCity = d3.select("#city");

    var inputState = d3.select("#state");

    var inputCountry = d3.select("#country");

    var inputShape = d3.select("#shape");
  
    // Get the value property of the input element
    var inputValueDate = inputDate.property("value");
    console.log(inputValueDate);

    var inputValueCity = inputCity.property("value");
    console.log(inputValueCity);

    var inputValueState = inputState.property("value");
    console.log(inputValueState);

    var inputValueCountry = inputCountry.property("value");
    console.log(inputValueCountry);

    var inputValueShape = inputShape.property("value");
    console.log(inputValueShape);

    // Use the form input to filter the data by datetime, city, country, state, and shape
    var filteredData = tableData.filter(info => info.datetime === inputValueDate && 
      info.city === inputValueCity && info.state === inputValueState && 
      info.country === inputValueCountry && info.shape === inputValueShape);

    // Clear the original table
    tableBody.html("");

    //Loop through the data and append data to the table body
    filteredData.forEach(data => {
    console.log(data);
    var row = tableBody.append("tr");
    Object.entries(data).forEach(([key, value]) =>{
      console.log(key, value);
      row.append("td").text(value);
      })
    })
}

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Create the reset
// Select the reset button
var buttonReset = d3.select("#reset-btn");

// Select the form
var form = d3.select("form");

// Complete the event handler function for the form
function resetFunction() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  tableData.forEach(data => {
    console.log(data);
    var row = tableBody.append("tr");
    Object.entries(data).forEach(([key, value]) =>{
      console.log(key, value);
      row.append("td").text(value);
    })
  })
}


// Create event handlers 
buttonReset.on("click", resetFunction);
form.on("submit", resetFunction);
