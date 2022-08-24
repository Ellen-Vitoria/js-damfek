//Functional programming example
function getNumber(inputID) {
  const value = document.getElementById(inputID).value;
  return parseInt(value);
}
//funcao recursiva - pilha de chamada(gasta mais memória)
function getFunctionalFactorial(n) {
  if (n == 1) return 1;
  else return n * getFunctionalFactorial(n - 1);
}
function displaySum(value) {
  document.getElementById('func-sum-result').textContent = value;
}
document.getElementById('func-btn').onclick = function handler() {
  const res = getFunctionalFactorial(getNumber('input-n'));
  displaySum(res);
}