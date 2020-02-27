
let n = prompt("De quel nombre veux-tu calculer la factorielle ?");

const factorial = (n) => { 
  return (n != 1) ? n * factorial(n - 1) : 1;
}
console.log(`Le résultat est : ${factorial(n)}`);

