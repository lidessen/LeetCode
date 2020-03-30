/**
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function(cont) {
  if (cont.length < 2) {
    return [cont[0], 1];
  }
  let a0 = cont[0];
  let b0 = 1;
  let a1 = 1 + a0 * cont[1];
  let b1 = cont[1];
  let a2 = a1,
    b2 = b1;
  for (let i = 2; i < cont.length; i++) {
    a2 = a0 + cont[i] * a1;
    b2 = b0 + cont[i] * b1;
    a0 = a1;
    b0 = b1;
    a1 = a2;
    b1 = b2;
  }
  return [a2, b2];
};
