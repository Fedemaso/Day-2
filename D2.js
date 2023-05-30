/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let numb1 = 5
let numb2 = 10

let verify = numb2 > numb1
console.log ( numb2 > numb1)





/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numb4 = 7

if (numb4 !== 5){
  console.log("Not equal")
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numb5 = 100

if (numb5%5 === 0 ) {
  console.log("divisibile per 5")
}



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numb6 = 13
const numb7 = 5

if ((numb6 === 8) || (numb7 === 8)) {
  console.log ("uguale a 8")
} else if ( (numb6 + numb7) === 8) {
  console.log ("somma uguale a 8")
} else if ((numb6 - numb7) === 8) {
  console.log ("sottrazione uguale a 8")
}




/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const totalShoppingCart = 79;

if (totalShoppingCart > 50) {
  totalToPay = totalShoppingCart
} else {
  totalToPay = totalShoppingCart + 10;
}
console.log("Totale da addebitare all'utente:" + totalToPay);




/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const shippingCost = 10;
const totalWithDiscount = totalShoppingCart * 0.8;
let totalToPayWithDiscount

if (totalWithDiscount > 50) {
   totalToPayWithDiscount = totalWithDiscount
} else {
  totalToPayWithDiscount = totalWithDiscount + shippingCost
}
console.log("Totale con sconto da addebitare all'utente: " + totalToPayWithDiscount);



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const a = 7;
const b = 3;
const c = 10;

if (a >= b && a >= c) {
  if (b >= c) {
    console.log(a, b, c);
  } else {
    console.log(a, c, b);
  }
} else if (b >= a && b >= c) {
  if (a >= c) {
    console.log(b, a, c);
  } else {
    console.log(b, c, a);
  }
} else if (c >= a && c >= b) {
  if (a >= b) {
    console.log(c, a, b);
  } else {
    console.log(c, b, a);
  }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 78
if (typeof x === "number") {
  console.log ("x è un numero")  
}
else { 
  console.log ("x NON è un numero")  } 



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 
x % 2 
 
if (x%2 === 0) {
  console.log ("il num è pari")
} else {
  console.log ("il num è dispari")
}
// resto 0 quindi pari


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let val = 10
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else if (val >= 10) {
      console.log("Uguale a 10 o maggiore");
    }


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"
console.log ("city", me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName
console.log("lastName delete" , me)


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numberList = []
numberList.push(1)
numberList.push(2)
numberList.push(3)
numberList.push(4)
numberList.push(5)
numberList.push(6)
numberList.push(7)
numberList.push(8)
numberList.push(9)
numberList.push(10)

console.log(numberList)


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

numberList.splice (9 , 1, 100)
console.log(numberList)