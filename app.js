function toggleMenu() {
  if (document.getElementById("mobile-dropdown").className == "mobile-menu-content") {
    document.getElementById("mobile-dropdown").className = "hide"
  } else if (document.getElementById("mobile-dropdown").className == "hide") {
    document.getElementById("mobile-dropdown").className = "mobile-menu-content"
  } else {
    document.getElementById("mobile-dropdown").className == "mobile-menu-content"
  }
}

function displayAlert() {
  alert("Features in construction - coming soon!");
}