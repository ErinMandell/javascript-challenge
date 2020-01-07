// create handles for data file and the html table
var tableData = data;
var tbody = d3.select("tbody");

// Initial load of table with full data set
buildTable(tableData);



// *** EVENT HANDLER TO RESPOND TO USER INPUT ***
// event handler looks at all input fields (they have a class of 'filter')
// when a change occurs in any of these fields, call the setFilters function

d3.selectAll(".filter").on("change", setFilters);



// *** FUNCTION TO BUILD AND LOAD HTML TABLE *** 
// clear any existing table rows
// iterate through data set, append a table row for each entry 
// and then append table data for every value 

function buildTable(data) {
    tbody.html("");

    data.forEach((dataRow) => {
        var row = tbody.append("tr");
        Object.values(dataRow).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}


// *** FUNCTION TO CHANGE THE FILTER - BASED ON USER INPUT ***
// *** this function is called when the user enters an input criteria ***
// Select the user input, isolate the input value and id, and set them as variables
// Log user input value and id to verify them
//
// Create 'filters' list
//     - if 'inputValue' is Truthy, add to userFilters object with 'filterID' as its key
//         as in: 'filterID: inputValue', or 'datetime: 1/1/2020' for example, and log it,
//       else delete the input value.  This 'filters' dictionary is a list of 
//       all of the key:value pairs of the 'id:value' currently in the input form 
// 
// Call filterTable function

let userFilters = {};

function setFilters() {
    var changedElement = d3.select(this).select("input");
    var inputValue = changedElement.property("value");
    var filterID = changedElement.attr("id");
    console.log(inputValue);
    console.log(filterID);

    if (inputValue) {
        userFilters[filterID] = inputValue;
        console.log(userFilters);
    }    
    else {
        delete userFilters[filterID];
    }
    filterTable();
}


// *** FUNCTION TO FILTER THE DATA SET ***
// Move the full data set to a new variable 'filteredData' to work with it.
// From the 'filters' object built above, with each key:value pair in that dictionary
// filter the dataset rows where the ??? key???  is equal to the 'filters' value?
//    ?? I'm not completely clear on why this line of code (#86) works ??
//    ?? It looks to me like I would read line 80 as:
//        "filter the data, select each row where the value of userFilter --- the key of that row"
//        
//        I know that it's comparing key:key and value:value, but I'm having trouble reading this symtax
//
// Call the buildTable function above to build a new table with this filtered data set

function filterTable() {
    let filteredData = tableData;
    console.log(filteredData);

    Object.entries(userFilters).forEach(([key1, value2]) => {
        filteredData = filteredData.filter((row3) => row3[key1] === value2);

        console.log(userFilters);
        console.log(filteredData);
    });

    buildTable(filteredData);
}