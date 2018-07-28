'use strict';
/*pilnuje zeby zmienne, ktorych uzywamy byly zadeklarowane*/

console.log('Akademia 108');

//napisz funkcje, ktora zwraca liczbe podniesiona do potegi 3. Funckja przyjmuje jeden paramter i zwraca go w postaci podniesionej 

function potega3 (liczba) {
    
    let wynik = 1;
    for (let i = 0; i < 3; i++) {
//           wynik = wynik * liczba;
        wynik *=liczba;
    }
    
    return wynik;
}

let wynikPotegowania = potega3(2);

console.log(wynikPotegowania);
/*console.log() tylko dla nas do podglądu potem komentujemy*/
console.log(potega3(3));





/*Potega podnoszaca liczbe do potegi - dwa parametry: liczba i potega*/

function potegaX(liczba,potega) {
    let wynikPotegi = 1;
    for (let i = 0; i < potega; i++) {
        wynikPotegi *= liczba;
    }
    return wynikPotegi;
}

let wynikPotegiX = potegaX(3,2);
console.log(wynikPotegiX)