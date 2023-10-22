let i = 1;

while (true) {
  let input = prompt("Saisissez le prénom N°"+i+" ou cliquez sur Annuler pour arrêter la saisie.");
  if (input === null) {
    break;
  }
  console.log("Vous avez saisi: "+ input);
  i++;
}

let p = i-1;

console.log("Vous avez saisi "+ p +" prénom(s).");