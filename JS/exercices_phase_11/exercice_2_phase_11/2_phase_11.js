var tableau = [];
var nombreDeValeurs = parseInt(prompt("Combien de valeurs souhaitez-vous ajouter au tableau?"));

for (var i = 0; i < nombreDeValeurs; i++) {
    var valeur = parseInt(prompt("Entrez une valeur numérique:"));
    tableau.push(valeur);
}

console.log(tableau);
