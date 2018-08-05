//Napisz funkcję ze zmiennymi lokalnymi, która liczy sumę kwadratów elementów tablicy [0,1,2,3,4,5]. Funkcja przyjmuje jeden parametr - w/w tablicę z liczbami. Funkcja zwraca sumę kwadratow. Wyświetl wynik działania funkcji w konsoli.
//
//Podpowiedź przed wysłaniem zadania do sprawdzenia:
//- użyj w zadaniu pętli, którą uważasz za słuszną i klasy Math.

let x = [0,1,2,3,4,5];

function sumaKwadratow() {
    let kwadrat = 0;
    let suma = 0;
    for(let i=0; i<x.length; i++){
        kwadrat = Math.pow(x[i],2);
        suma += kwadrat;
    }  
     console.log(suma);
     return suma;
};

sumaKwadratow(x);