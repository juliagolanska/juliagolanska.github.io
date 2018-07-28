'use strict';

function napisz() {
    console.log("kliknięto");
}

let buttonKlik = document.getElementById("klik");

//buttonKlik.onclick = napisz;

buttonKlik.addEventListener('click', napisz);

/*------------------------------------------*/
/*innerHTML vs outerHTML*/

let container = document.getElementById("container");
console.log(container.innerHTML);
console.log(container.outerHTML);
