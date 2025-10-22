var cls = document.getElementsByClassName("cls");
var cls1 = document.getElementsByClassName("cls1");
var cls2 = document.getElementsByClassName("cls2");
var charset1 = document.getElementById("charset1");
var charset2 = document.getElementById("charset2");
var charset3 = document.getElementById("charset3");

function At1() {
  for (var i = 0; i < cls.length; i++) {
    cls[i].style.display = "block";
    cls1[i].style.display = "none";
    cls2[i].style.display = "none";
  }
}
function At2() {
  for (var v = 0; v < cls.length; v++) {
    cls[v].style.display = "none";
    cls1[v].style.display = "block";
    cls2[v].style.display = "none";
  }
}
function At3() {
  for (var m = 0; m < cls.length; m++) {
    cls[m].style.display = "none";
    cls1[m].style.display = "none";
    cls2[m].style.display = "block";
  }
}
