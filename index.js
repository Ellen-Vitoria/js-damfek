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
};

//Procedural programming example
document.getElementById('oo-btn').onclick = function handler() {
  const value = document.getElementById('input-n').value;
  let n = parseInt(value);
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res = res * 1;
  }
  document.getElementById('oo-sum-result').textContent = res;
};