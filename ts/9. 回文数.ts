function isPalindrome(x: number): boolean {
  const origin = x;
  let newNum = 0;
  while (x > 0) {
    const num = x % 10;
    newNum = newNum * 10 + num;

    x -= num;
    x /= 10;
  }
  return origin === newNum;
}
