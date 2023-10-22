// Demander à l'utilisateur de saisir des entiers
let entiers = [];
let entier = parseInt(prompt("Entrez un entier:"));

while (entier !== 0) {
  // Ajouter l'entier à la liste
  entiers.push(entier);

  // Demander à l'utilisateur de saisir un autre entier
  entier = parseInt(prompt("Entrez un autre entier (ou 0 pour arrêter):"));
}

// Calculer la somme des entiers
let somme = 0;
for (let i = 0; i < entiers.length; i++) {
  somme += entiers[i];
}

// Calculer la moyenne des entiers
let moyenne = somme / entiers.length;

// Afficher les résultats
alert("La somme des entiers est " + somme + " et leur moyenne est " + moyenne + ".");
