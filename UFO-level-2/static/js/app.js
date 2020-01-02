// create handles for data file, the html table, and the button
var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

// *** function to load data to the html table *** 
// clear any existing table rows
// iterate through data set, append a table row for each entry 
// and then append table data for every value 

function loadTable(data) {
    tbody.html("");

    data.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// load the data to the table when the page loads
loadTable(tableData);

// *** function to respond to selection criteria ***

// Install event handler on the Date button
// clear any existing table rows
// log the capture of the table data and the entered date
// filter the table by the entered date, return and log results
// iterate through returned results, appending result rows to table

button.on("click", function() {
    var dateTime = d3.select("#datetime").property("value");
    console.log(dateTime);

    var filteredData = tableData.filter(ufo => ufo.datetime === dateTime);
    console.log(filteredData);
    loadTable(filteredData);
});
