let num1 = parseInt(prompt("Entrez le premier nombre entier: "));
let num2 = parseInt(prompt("Entrez le second nombre entier: "));
let operator = prompt("Entrez l'opérateur (+, -, *, /): ");

if (isNaN(num1) || isNaN(num2)) {
  alert("Veuillez entrer des nombres entiers valides.");
} else if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
  alert("Opérateur invalide. Veuillez entrer un opérateur valide (+, -, *, /).");
} else if (operator === "/" && num1 ===0 || num2 === 0) {
  alert("Division par zéro impossible.");
} else {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }
  alert(`Le résultat de ${num1} ${operator} ${num2} est ${result}.`);
}
