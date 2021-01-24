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