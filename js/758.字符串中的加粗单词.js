/**
 * @param {string[]} words
 * @param {string} S
 * @return {string}
 */
var boldWords = function(words, S) {
  const boldIndex = [];
  for (const word of words) {
    const indexes = findIndexOf(S, word);
    for (const index of indexes) {
      boldIndex.push([index, index + word.length]);
    }
  }
  const mergedIndex = mergeRange(boldIndex);
  return boldString(S, mergedIndex);
};

function findIndexOf(str, subStr) {
  let steps = [];
  for (let i = 0; i < str.length; i++) {
    if (subStr[0] === str[i]) {
      steps.push({
        index: i,
        step: 0
      });
    }
    steps
      .filter(x => x.step !== -1 && x.step !== subStr.length)
      .forEach(item => {
        if (str[i] !== subStr[item.step]) {
          item.step = -1;
          return;
        }
        if (str[i] === subStr[item.step]) {
          item.step++;
        }
      });
  }
  return steps
    .filter(x => x.step !== -1 && x.step === subStr.length)
    .map(x => x.index);
}

function mergeRange(ranges) {
  if (ranges.length < 2) {
    return ranges;
  }

  ranges.sort((a, b) => a[0] - b[0]);

  let cursor = null;
  const result = [];
  for (const range of ranges) {
    if (cursor === null) {
      cursor = range;
      continue;
    }
    if (cursor[1] < range[0]) {
      result.push(cursor);
      cursor = range;
    } else {
      cursor[1] = Math.max(cursor[1], range[1]);
    }
  }
  result.push(cursor);
  return result;
}

function boldString(S, boldRanges) {
  while (boldRanges.length > 0) {
    const range = boldRanges.pop();
    const a = S.slice(0, range[0]);
    const b = S.slice(range[0], range[1]);
    const c = S.slice(range[1], S.length);
    S = `${a}<b>${b}</b>${c}`;
  }
  return S;
}
