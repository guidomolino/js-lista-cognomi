var invia = document.getElementById("invia");
var lista = ["Fermi", "Riccardi", "Creanza", "Fardi", "Sacca"]

invia.addEventListener("click", function () {

  var cognome = document.getElementById('cognome').value;
  lista.push(cognome);
  console.log(lista);

  for (var i = 0; i < lista.length; i++) {
    while (true) {

    }
  }
});
