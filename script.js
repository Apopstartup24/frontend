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

// Close the dropdowns if the user clicks anywhere outside a dropdown button
window.onclick = function() {
  closeAllDropdowns();
}