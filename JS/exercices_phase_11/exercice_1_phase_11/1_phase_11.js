let taille = prompt("Entrez la taille du tableau:");
let tableau = new Array(taille);

for (let i = 0; i < taille; i++) {
  tableau[i] = prompt("Entrez la valeur de l'élément " + (i + 1) + ":");
}

console.log(tableau);