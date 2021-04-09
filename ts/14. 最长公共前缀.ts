function longestCommonPrefix(strs: string[]): string {
  let prefix = '';
  let char = '';

  if (strs.length === 0) {
    return prefix;
  }

  let i = 0;
  while (true) {
    for (const str of strs) {
      if (str[i] === undefined) {
        return prefix;
      }

      if (char === '') {
        char = str[i];
      } else {
        if (char !== str[i]) {
          return prefix;
        }
      }
    }
    prefix += char;
    char = '';
    i++;
  }
}
