'use strict';

let sekcjaJeden = document.getElementById("parFirst");

let btnKlikjnijMnie = document.createElement("button");

let txtKliknijMnie = document.createTextNode("Kliknij mnie");

let classKliknijMnie = document.createAttribute("class");

classKliknijMnie.value = "przycisk";

btnKlikjnijMnie.setAttribute("id", "main=button");

btnKlikjnijMnie.appendChild(txtKliknijMnie);

btnKlikjnijMnie.setAttributeNode(classKliknijMnie);

sekcjaJeden.insertBefore(btnKlikjnijMnie, sekcjaJeden.childNodes[5]);



console.log(btnKlikjnijMnie);
//console.log(sekcjaJeden.children);

//console.log(sekcjaJeden.childNodes);