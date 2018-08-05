/*Napisz funkcję ze zmiennymi lokalnymi, która policzy sumę i iloczyn elementów tablicy [1, 2, 3, 4, 5, 6]. Funkcja przyjmuje jeden parametr - ww. tablicę z liczbami. Funkcja nie zwraca nic. Funkcja wyświetla wyniki w konsoli.*/

//1.swtorzenie funkcji
//2. stworzenie zmiennej tablicy
//3.petla for na iloczyn
//4.petla for na sume
//5.zmienna wynik zwracajaca wyniki
//6.console log wynik

let x = [1, 2, 3, 4, 5, 6];

function liczenie() {
    let suma = 0;
    let iloczyn = 1;
    
    for (let i =0; i < x.length; i++) {
        suma += x[i];
        iloczyn *= x[i];
    }
    
    let wynik = suma + " " + iloczyn;
    console.log(wynik);
};

liczenie(x);