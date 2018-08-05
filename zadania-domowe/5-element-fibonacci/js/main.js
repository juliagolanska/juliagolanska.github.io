function wyrazFibonacci(n) {
    let wyrazN = n;
    let wyraz1 = 0;
    let wyraz2 = 1;
    let wyrazKolejny = 0;

    if (wyrazN == 1) {
        console.log(wyraz1);
        return wyraz1;

    } else if (wyrazN == 2) {
        console.log(wyraz2);
        return wyraz2;
    } else {
        for (let i = 1; i < wyrazN; i++) {
            wyrazKolejny = wyraz1 + wyraz2;
            wyraz1 = wyraz2;
            wyraz2 = wyrazKolejny;
        }
        console.log(wyrazKolejny);
        return wyrazKolejny;
    }
}

wyrazFibonacci(7);