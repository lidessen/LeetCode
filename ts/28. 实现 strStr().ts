function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) {
    return 0;
  }
  let i = 0;
  let j = 0;

  while (i < haystack.length) {
    if (j >= needle.length) {
      return i - j;
    }
    if (haystack[i] !== needle[j]) {
      i = i - j;
      j = 0;
    } else {
      j++;
    }
    i++;
  }
  if (j === needle.length) {
    return haystack.length - needle.length;
  }
  return -1;
}
