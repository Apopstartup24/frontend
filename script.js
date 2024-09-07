function toggleDropdown(dropdownId) {
  // Stop the event from bubbling to window.onclick
  event.stopPropagation();

  // Get the current dropdown
  var dropdown = document.getElementById(dropdownId);

  // If it's already open, close it
  var isDropdownOpen = dropdown.classList.contains("show");
  
  // Close all dropdowns first
  closeAllDropdowns();

  // If the clicked dropdown wasn't open, open it now
  if (!isDropdownOpen) {
    dropdown.classList.add("show");
  }
}

function closeAllDropdowns() {
  const dropdowns = document.querySelectorAll(".dropdown-content");
  dropdowns.forEach(dropdown => dropdown.classList.remove("show"));
}

// Get the dropdown buttons and content elements
var dropdowns = document.getElementsByClassName("dropdown-content");
var buttons = document.getElementsByClassName("dropdown-button");

// Close the dropdowns if the user clicks anywhere outside a dropdown button
window.onclick = function(event) {
  // Loop through all dropdown contents to check for open state
  for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];

    // Check if the clicked target is NOT the button or the dropdown content
    var buttonClicked = Array.from(buttons).some(button => button.contains(event.target));
    var dropdownClicked = openDropdown.contains(event.target);

    // Close the dropdown if the click is outside the button and the dropdown
    if (!buttonClicked && !dropdownClicked) {
      openDropdown.classList.remove('show');  // Hide the dropdown
    }
  }
};
