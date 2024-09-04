function handleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.explore button')) {
    var dropdownMenu = document.getElementById("dropdownMenu");
      if (dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.remove('show');
      }
    }
  }