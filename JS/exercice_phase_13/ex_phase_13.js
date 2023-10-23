let tableau = [];
let input = window.prompt("Entrez une valeur numérique :");
while (input != 0) {
    tableau.push(Number(input));
    input = window.prompt("Entrez une valeur numérique :");
}
let somme = 0;
for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i];
}
let moyenne = somme / tableau.length;
console.log("Nombre de valeurs saisies : " + tableau.length);
console.log("Somme des valeurs : " + somme);
console.log("Moyenne des valeurs : " + moyenne);
