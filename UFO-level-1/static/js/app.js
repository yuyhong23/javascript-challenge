// from data.js
var tableData = data;

// YOUR CODE HERE!

// Use D3 to select the table body
var tableBody = d3.select("tbody");

// Loop through the data and append data to the table body
data.forEach(tableData => {
    console.log(tableData);
    var row = tableBody.append("tr");
    Object.entries(tableData).forEach(([key, value]) =>{
      console.log(key, value);
      row.append("td").text(value)
    });
});

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
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
  
    // Use the form input to filter the data by datetime
    var filterData = tableData.filter(info => info.datetime === inputValue);
    console.log(filterData);

    // // Input fields can trigger a change event when new text is entered.
    // inputValue.on("change", function() {
    //     var newCells = filterData;
    //     data.forEach(filterData => {
    //         var row = tableBody.append("tr");
    //         Object.entries(filterData).forEach(([key, value]) =>{
    //         console.log(key, value);
    //         row.append("td").text(value)
    //         });
    //     });
    // });
    const filteredData = d3.selectAll("tr").filter(info => info.datetime === inputValue);
}

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);
