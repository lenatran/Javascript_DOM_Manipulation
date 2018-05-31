// Get references to the tbody element, input field, and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredSightings to dataSet initially
var filteredSightings = dataSet;

// renderTable renders the filteredSightings to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  
  for (var i = 0; i < filteredSightings.length; i++) {
    var sightings = filteredSightings[i];
    var fields = Object.keys(sightings);
    var $row = $tbody.insertRow(i);
    
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sightings[field];
    }
  }
}

// Create function for when searchButton is clicked
function handleSearchButtonClick() {
  var filterDate = $dateInput.value.trim().toString();
  
  filteredSightings = dataSet.filter(function(sightings) {
    var sightingsDate = sightings.datetime;
    return sightingsDate === filterDate;
  });
  
  renderTable();
}

// Render the table for the first time on page load
renderTable();