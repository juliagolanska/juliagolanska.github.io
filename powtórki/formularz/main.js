'use strict';

document.getElementById("form").addEventListener('submit', function (e){
    e.preventDefault();
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let result = name + " " + surname;
    console.log(result)
})


let data = document.createElement("Dane");

let clasData = document.createAttribute("data");
data.setAttribute("id", "data");

document.body.appendChild(data);

