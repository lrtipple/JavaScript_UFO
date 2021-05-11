// improt data frmo data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data){
    // clear out existing data
    tbody.html("");

    // loop thru each object in data
    // & append a row and cells for each value in the row
    data.array.forEach(dataRow => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop thru each field in the dataRow and add
        // each value as a teble cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });

}