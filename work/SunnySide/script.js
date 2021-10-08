function myFunction() {
  var x = document.getElementById("myHiddenCont");
  var y = 600;
  if (x.className === "hiddenCont") {
    x.className = "visCont";
  } 
  else {
    x.className = "hiddenCont";
  }
}