'use strict';

let wszystkieZgody = document.getElementById("wszystkie-zgody");

function checkboxZmiana() {
    let zgoda1 = document.getElementById("zgoda-marketingowa-1");
    let zgoda2 = document.getElementById("zgoda-marketingowa-2");

    if (wszystkieZgody.checked) {
        zgoda1.checked = true;
        zgoda2.checked = true;
        zgoda1.setAttribute("disabled", "");
        zgoda2.setAttribute("disabled", "");
    } else {
        zgoda1.checked = false;
        zgoda2.checked = false;
        zgoda1.removeAttribute("disabled", "");
        zgoda2.removeAttribute("disabled", "");
    }
}

wszystkieZgody.addEventListener('change', checkboxZmiana)

document.getElementById("form").addEventListener('submit', function(e){
    document.getElementById("wiadomosc").innerHTML = "";
    let imie = document.getElementById("name");

    if (imie.value == "") {
         e.preventDefault();
        let li1 = document.createElement("li");
        let t1 = document.createTextNode("Wpisz imię i nazwisko");
        li1.appendChild(t1);
        document.getElementById("wiadomosc").appendChild(li1);
    }

    let email = document.getElementById("email");

    if (email.value == "") {
         e.preventDefault();
        let li2 = document.createElement("li");
        let t2 = document.createTextNode("Wpisz email");
        li2.appendChild(t2);
        document.getElementById("wiadomosc").appendChild(li2);
    }

    let zgoda = document.getElementById("zgoda-marketingowa-1");
    
    if (zgoda.checked == false) {
         e.preventDefault();
        let li3 = document.createElement("li");
        let t3 = document.createTextNode("Zaznacz zgody");
        li3.appendChild(t3);
        document.getElementById("wiadomosc").appendChild(li3);
    }
})