
// assegnazione delle variabili
var invia = document.getElementById("invia");
var lista = ["Fermi", "Riccardi", "Creanza", "Fardi", "Sacca"]

// trascrizione della lista
document.getElementById("elenco").innerHTML = lista;


// pulsante invia
invia.addEventListener("click", function () {

  // inserimento input
  var cognome = document.getElementById('cognome').value;
  lista.push(cognome);

  console.log(lista);

  // assortimento in ordine alfabetico
  lista.sort();

  console.log(lista);

  // sovrascrittura nuova lista
  document.getElementById("elenco").innerHTML = lista;

  // dichiarazione della posizione dell'utente all'interno della lista
  document.getElementById("posizione").innerHTML = "Ti trovi alla posizione numero: " + [lista.indexOf(cognome) + 1];

});
