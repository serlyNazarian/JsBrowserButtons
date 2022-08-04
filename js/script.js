function CloseFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function MinimizeFunction() {
  document.getElementById("myDIV").style.maxWidth = "600px";
}
