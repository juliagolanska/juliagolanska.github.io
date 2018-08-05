'use strict';

function pobierz (x) {
  document.getElementById("rzad0").value += x ;

}

function oblicz () {
  var ekran = document.getElementById("rzad0").value;
  document.getElementById("rzad0").value = eval(ekran);
}

function czysc() {
document.getElementById("rzad0").value = "";
}

