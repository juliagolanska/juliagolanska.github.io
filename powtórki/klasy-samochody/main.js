'use strict';

/*Napisz klase opisujaca samochody. Pola klasy:
-vin
-marka
-model
-paliwo - rodzaj
-silnik - pojemnosc
-wlasciciel - imie + nazwisko
- rok produkcji
-uszkodzony <true/false>
- Wymienic mu silnik - rodzaj paliwa, pojemnosc 
-sprzedac auto - imie + nazwisko wlasciciela
*/


//Klasy nazywamy duza litera
class Auto {
    constructor(vin, marka, model, rodzajPaliwa, pojemnoscSilnika, właściciel = "producent", rokProdukcji, uszkodzony = false) {
        this.vin = vin;
        this.marka = marka;
        this.model = model;
        this.rodzajPaliwa = rodzajPaliwa;
        this.pojemnoscSilnika = pojemnoscSilnika;
        this.właściciel = właściciel;
        this.rokProdukcji = rokProdukcji;
        this.uszkodzony = uszkodzony; 
    }
    
    zepsuj() {
        this.uszkodzony = true;
    }
    
    napraw() {
        this.uszkodzony = false;
    }
    
    wymienicMuSilnik(nowyrodzajPaliwa, nowapojemnoscSilnika) {
        this.rodzajPaliwa = nowyrodzajPaliwa;
        this.pojemnoscSilnika = nowapojemnoscSilnika;
    }
    
    sprzedaj(nowyWlasciciel) {
        this.właściciel = nowyWlasciciel;
    }
};

let autojulki = new Auto("123456789", "audi", "r8", "benzyna", 5.2, "Julia",2017, false)


autojulki.sprzedaj("Julia");

autojulki.zepsuj(true);

autojulki.napraw();

autojulki.wymienicMuSilnik("diesel", 2000);

autojulki.sprzedaj("Sabinka");

console.log(autojulki);

let autoKubyKe = new Auto("0987654321", "nissan", "gtr", "beznyna", 3800, "producent", 2018, false);
autoKubyKe.sprzedaj("Kuba");
console.log(autoKubyKe);

let garaz = [];
garaz[0] = autojulki;
garaz[1] = autoKubyKe
console.log(garaz);