/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (28.12%)
 * Likes:    1905
 * Dislikes: 0
 * Total Accepted:    214.7K
 * Total Submissions: 737.9K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 *
 * 示例 1：
 *
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 *
 *
 * 示例 2：
 *
 * 输入: "cbbd"
 * 输出: "bb"
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length <= 1) {
    return s;
  }
  const startCursors = [];
  let cursor = 1;
  for (cursor; cursor < s.length; cursor++) {
    startCursors.push({
      start: cursor,
      end: cursor
    });
    for (let item of startCursors) {
      if (item.end !== cursor) continue;
      if (item.start === cursor) {
        if (s[item.start - 1] !== s[cursor]) {
          item.start--;
        }
      }
      if (s[item.start - 1] === s[cursor]) {
        item.start--;
        item.end++;
      }
    }
  }
  let length = 0;
  let str = '';
  for (const item of startCursors) {
    const len = item.end - item.start;
    if (len > 1) {
      const text = s.slice(item.start, item.end);
      console.log(text);
      if (len > length) {
        str = text;
        length = len;
      }
    }
  }
  return str;
};
// @lc code=end

longestPalindrome('123454321');
