function addStrings(num1: string, num2: string): string {
  let result = '';
  let i = 0;
  let j = 0;
  let add = 0;
  while (i < num1.length || j < num2.length) {
    if (i < num1.length) {
      add += getNumFromChar(num1[num1.length - 1 - i]);
      i++;
    }
    if (j < num2.length) {
      add += getNumFromChar(num2[num2.length - 1 - j]);
      j++;
    }
    const mod = add % 10;
    result = getCharFromNum(mod) + result;
    add = (add - mod) / 10;
  }
  if (add > 0) {
    return getCharFromNum(add) + result;
  }
  return result;
}

function getNumFromChar(s: string) {
  return s.charCodeAt(0) - '0'.charCodeAt(0);
}

function getCharFromNum(code: number) {
  return String.fromCharCode(code + '0'.charCodeAt(0));
}
