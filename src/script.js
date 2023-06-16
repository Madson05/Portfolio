function openMenu() {
  let menuBar = document.getElementById("menu-bar");

  if (menuBar.style.width == "0px") {
    menuBar.style.display = "block";
    menuBar.style.width = "180px";
  } else {
    menuBar.style.display = "none";
    menuBar.style.width = "0px";
  }
}
