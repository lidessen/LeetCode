const valMap: { [K: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function getVal(s: string) {
  return valMap[s] || 0;
}

function romanToInt(s: string): number {
  let result = 0;
  let add = 0;
  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      add += getVal(s[0]);
      continue;
    }
    if (getVal(s[i]) > getVal(s[i - 1])) {
      result += getVal(s[i]);
      result -= add;
      add = 0;
    } else if (getVal(s[i]) < getVal(s[i - 1])) {
      result += add;
      add = getVal(s[i]);
    } else {
      add += getVal(s[i]);
    }
  }
  return result + add;
}
