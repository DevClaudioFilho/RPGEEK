function showHeader() {
  var x = document.getElementById("list_links");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}