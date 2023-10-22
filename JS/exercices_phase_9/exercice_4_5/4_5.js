function multiples(x, n) {
    let arr = [];
    for (let i = 1; i <= n; ++i) {
      arr.push(x * i);
    }
    return arr;
  }
  
  let x = prompt("Entrez un nombre entier x:");
  let n = prompt("Entrez un nombre entier n:");
  let result = multiples(x, n);
  console.log(result);
  