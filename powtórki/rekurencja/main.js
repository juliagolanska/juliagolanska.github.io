//napisz funkcje ktora oblicza silnie n. funckja przyjmuje prametr n i zwraca wynik silnia n(n!)
function silnia(n) {
    
    let wynik = 1;
    
    if (n < 0) {
        return "Silnia od ujemnej liczby nie istnieje";
    } else if (n < 2) {
        return wynik;
    }
    
    /*obsluga silni przez rekurencje*/
//    wynik = n * silnia(n-1);
//    
//    return wynik;
    
    /*obsluga silni przez pętle 1*/
//    for (let i = 1; i <= n; ++i) {
//        wynik = wynik * i;
//    }
    
    /*obsluga silni przez pętle 2*/
     for (n; n>0; --n) {
        wynik = wynik * n;
    }
    
    
    return wynik;
}


console.log(silnia(4));