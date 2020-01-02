// from data.js
var tableData = data;

// Select and set a handle on the datetime button
var button = d3.select("#filter-btn");

// Install event handler on the Date button

button.on("click", function() {
    var dateTime = d3.select("#datetime").property("value");
    console.log(dateTime);
});
