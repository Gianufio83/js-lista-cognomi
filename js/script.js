// alert('Ciao');
// Chiedi all’utente il cognome
var cognome = prompt('Inserisci il tuo cognome');
// inseriscilo in un array con altri cognomi
var listaCognomi = ['Rossi', 'Bianchi', 'Verdi', 'Scuri', 'Chiari'];
while (cognome.length < 0) {
  cognome = prompt('Inserisci il tuo cognome');
}
listaCognomi.push(cognome);
listaCognomi.sort();
console.log(listaCognomi);

// stampa la lista ordinata alfabeticamente (in html ul > li).
for (var i = 0; i < listaCognomi.length; i++) {
  // console.log(listaCognomi[i]);
  document.getElementById('list_surname').innerHTML +=  '<li>' + listaCognomi[i] + '</li>';
}

// Scrivi anche la posizione della lista in cui il nuovo utente si trova.
