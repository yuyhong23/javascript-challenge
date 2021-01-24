// from data.js
var tableData = data;

// YOUR CODE HERE!
// tableData.forEach(info =>{
//     Object.entries(info).forEach(([key, value]) =>{
//         if (key === "datetime"){
//             var row = d3.select("tbody").append("tr");
//             row.append("td").text(value);
//         }else if (key === "city"){
//             var row = d3.select("tbody").append("tr");
//             row.append("td").text(value);
//         }else if (key === "state"){
//             var row = d3.select("tbody").append("tr");
//             row.append("td").text(value);
//         }else if (key === "country"){
//             var row = d3.select("tbody").append("tr");
//             row.append("td").text(value);
//         }else if (key === "shape"){
//             var row = d3.select("tbody").append("tr");
//             row.append("td").text(value);
//         }else if (key === "durationMinutes"){
//             var row = d3.select("tbody").append("tr");
//             row.append("td").text(value);
//         }else{
//             var row = d3.select("tbody").append("tr");
//             row.append("td").text(value);
//         }
//     })
// })

// Use D3 to select the table body
var tableBody = d3.select("tbody");

// Loop through the data and append data to the table body
// tableData.forEach(([datetime, city]) =>{
//     var row = tableBody.append("tr");
//     row.append("td").text(datetime);
//     row.append("td").text(city);
// });

// ([datetime, city, state, country,
//     shape, durationMinutes, comments])

// tableData.forEach(([k, v]) =>{
//     var row = tableBody.append("tr");
//     row.append("td").text(datetime);
//     row.append("td").text(city);
// });

data.forEach(function(tableData) {
    console.log(tableData);
    var row = tableBody.append("tr");
    Object.entries(tableData).forEach(function([key, value]) {
      console.log(key, value);
      row.append("td").text(value)
    });
  });