// create handles for data file, the html table, and the button
var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");

// *** function to load data to the html table *** 
// clear any existing table rows
// iterate through data set, append a table row for each entry 
// and then append table data for every value 

function buildTable(data) {
    tbody.html("");

    data.forEach((dataRow) => {
        var row = tbody.append("tr");
        Object.entries(dataRow).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// load the data to the table when the page loads
buildTable(tableData);


// *** function to respond to selection criteria ***

// Install event handler on the Date button
// log the capture of the table data and the entered date
// filter the table by the entered date, return and log results


// button.on("click", function() {
//     var dateTime = d3.select("#datetime").property("value");
//     console.log(dateTime);

//     var filteredData = tableData.filter(ufo => ufo.datetime === dateTime);
//     console.log(filteredData);
//     loadTable(filteredData);
// });


var filters = {};

//handles for the element, value, and ID of filters that were changed

function updateFilters() {
    var changedElement = d3.select(this).select("input");
    var elementValue = changedElement.property("value");
    var filterID = changedElement.attr("id");
    console.log(elementValue);
    console.log(filterID);

    if (elementValue) {
        filters[filterID] = elementValue;
    }    
    else {
        delete filters[filterID];
    }
    filterTable();
}

function filterTable() {
    let filteredData = tableData;

    Object.entries(filters).forEach(([key, value]) => {
    
        filteredData = filteredData.filter(row =>row[key] === value);
    });
    buildTable(filteredData);
}



d3.selectAll(".filter").on("change", updateFilters);

