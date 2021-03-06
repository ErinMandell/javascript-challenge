// create handles for data file, the html table, and the button
var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

// Install event handler on the Date button
// clear any existing table rows
// log the capture of the table data and the entered date
// filter the table by the entered date, return and log results
// iterate through returned results, appending result rows to table

button.on("click", function() {
    tbody.html("");
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
