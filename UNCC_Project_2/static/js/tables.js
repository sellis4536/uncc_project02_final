////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////


// short_data_selected_columns_csv_file_path = "../../Data/complete_contribution_data_columns_short.csv"
// short_data_selected_columns_csv_file_path = "localhost:5000/../../Data/complete_contribution_data_columns_short.csv"
// short_data_selected_columns_csv_file_path = "complete_contribution_data_columns_short.csv"

// The code segments below this line generate the default table.
// This table contains the complete data, and is shown when the page is first opened.

// This is the function that generates the full table that shows when the page is loaded.
// var make_table = function(data, columns) {
//   var table = d3.select("table")
//   var tbody = d3.select("tbody")

//   var rows = tbody.selectAll("tr")
//     .data(data)
//     .enter()
//     .append("tr")

//   var cells = rows.selectAll("td")
//     .data(function(row) {
//       // console.log(row[column])
//       return columns.map(function (column) {
//         // console.log(typeof row[column])
//         console.log(typeof column)
//         return { column: column, value: row[column] }
//       })
//     })
//     .enter()
//     .append("td")
//     .text(function (d) {return d.value} )

//   return table;
// }

// This is the function that generates the filtered table after the uses specifies certain criteria.
// var make_filtered_table = function(data, columns) {
//   console.log("In the filtered function")
//   var table = d3.select("table")
//   var tbody = d3.select("tbody")

//   var rows = tbody.selectAll("tr")
//     .data(data)
//     .enter()
//     .append("tr")

//   var cells = rows.selectAll("td")
//     .data(function(row) {
//       return columns.map(function (column) {
//         return { column: column, value: row[column] }
//       })
//     })
//     .enter()
//     .append("td")
//     .text(function (d) {return d.value} )

//   return table;
// }

// This reads the csv file, and selects the columns therefrom,
// thereafter it runs the function that makes the table from the columns.
// d3.csv(short_data_selected_columns_csv_file_path, function (data) {
//   var columns = ["candidate_x","TRANSACTION_AMT", "TRANSACTION_DT", "state", "city", "zip_code", "employer", "occupation"]

//   make_table(data, columns)
// })

////////////////////////////////////////////////////////////////////////////////
////////////////////
// In the follow section we create the button which will filter the table based on a user-given value.
////////////////////////////////////////////////////////////////////////////////

// Select the criteria list drop-down
// var criteria_list = d3.select("#criteria_list");

// // Select the filter button
// var filter_button = d3.select("#filter_button");

// filter_button.on("click", function (data, columns) {
//   d3.event.preventDefault();

//   var criteria_list_value = criteria_list.property("value");
//   var criteria_input = d3.select("#filter_table_criteria")
//   var criteria_value = criteria_input.property("value");

//   console.log(`The column you are giving criteria for is: ${criteria_list_value}`)
//   console.log(`The criteria is: ${criteria_value}`)

  ///////////////////////////////

  // var table = d3.select("table")
  // var tbody = d3.select("tbody")

  // var rows = tbody.selectAll("tr")
  //   .data(data)
  //   .enter()
  //   .append("tr")

  // var cells = rows.selectAll("td")
  //   .data(function(row) {
  //     return columns.map(function (column) {
  //       return { column: column, value: row[column] }
  //     })
  //   })
  //   .enter()
  //   .append("td")
  //   console.log("Hello")
  //   .text(function (d) {return d.value} )

  // return table;

//   d3.csv(short_data_selected_columns_csv_file_path, function (data) {
//     var columns = ["candidate_x","TRANSACTION_AMT", "TRANSACTION_DT", "state", "city", "zip_code", "employer", "occupation"]
  
//     make_filtered_table(data, columns)
//   })
// })

// var make_filtered_table = function (data, columns) {

//   var table = d3.select("table")
//   var tbody = d3.select("tbody")

//   var rows = tbody.selectAll("tr")
//     .data(data)
//     .enter()
//     .append("tr")

//   var cells = rows.selectAll("td")
//     .data(function(row) {
//       return columns.map(function (column) {
//         return { column: column, value: row[column] }
//       })
//     })
//     .enter()
//     .append("td")
//     .text(function (d) {return d.value} )

//   return table;
//   }

// filter_button.on("click", function(data, columns) {
//   d3.event.preventDefault();

//   console.log("You just clicked the filter table button");

//   var criteria_list_selection = criteria_list.property("value");
//   console.log(`Your filter criteria is for the column: ${criteria_list_selection}`);

//   var filter_button_input = d3.select("#filter_table_criteria");
//   var filter_button_input_value = filter_button_input.property("value");
//   console.log(`The filter criteria is: ${filter_button_input_value}`);

//   d3.csv(short_data_selected_columns_csv_file_path, function (data) {
//     var columns = ["candidate_x","TRANSACTION_AMT", "TRANSACTION_DT", "state", "city", "zip_code", "employer", "occupation"]
  
//     make_table(data, columns)
//   })

// })

////////////////////////////////////////////////////////////////////////////////
////////////////////
// In the follow section we create the feature that will allow the user to select which columns to display
////////////////////////////////////////////////////////////////////////////////

// var checkbox_candidate = d3.select("#checkbox_candidate");
// var checkbox_contribution_amount = d3.select("#checkbox_contribution_amount");
// var checkbox_contribution_date = d3.select("#checkbox_candidate");
// var checkbox_state = d3.select("#checkbox_candidate");
// var checkbox_city = d3.select("#checkbox_candidate");
// var checkbox_zip = d3.select("#checkbox_candidate");
// var checkbox_employer = d3.select("#checkbox_candidate");
// var checkbox_candidate_occupation = d3.select("#checkbox_candidate");

// var columns_filter = [];
// console.log(columns_filter)

// checkbox_candidate.on("change", function() {

//   d3.event.preventDefault();

//   if (checkbox_candidate.property("checked")) {
//     // checkbox_candidate.property("checked", false)
//     console.log("You are showing the column candidate");
//     // columns_filter.push("candidate_x")
//     // console.log(columns_filter)
//   }

//    else  {
//     // checkbox_candidate.property("checked", true)
//     console.log("You are not showing the column candidate");
//   }

//   // else
//   //   console.log("=(")
// })

// checkbox_contribution_amount.on("change", function () {
//   d3.event.preventDefault();
  
//   if (checkbox_contribution_amount.property("checked", true)) {
//     checkbox_contribution_amount.property("checked", false)
//     console.log("You are not showing the column contribution amount.")
//   }

//   else if (checkbox_contribution_amount.property("checked", false)) {
//     checkbox_contribution_amount.property("checked", true)
//     console.log("You are showing the column contribution amount.")
//   }
// })

// d3.csv(short_data_selected_columns_csv_file_path, function (data) {
//   var columns = ["candidate_x","TRANSACTION_AMT", "TRANSACTION_DT", "state", "city", "zip_code", "employer", "occupation"]

//   make_table(data, columns)
// })