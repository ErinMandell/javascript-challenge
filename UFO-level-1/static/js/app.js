// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Select and set a handle on the datetime button
var button = d3.select("#filter-btn");

// Install event handler on the Date button

button.on("click", function() {
    var dateTime = d3.select("#datetime").property("value");
    console.log(tableData);
    console.log(dateTime);

    var filteredData = tableData.filter(ufo => ufo.datetime === dateTime);
    console.log(filteredData);

    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});
