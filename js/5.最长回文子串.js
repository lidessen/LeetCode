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
  const strs = [];
  let str = '';
  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;
    if (left - 1 >= 0 && right + 1 < s.length && s[left - 1] === s[right + 1]) {
      const tempStr = find(s, left - 1, right + 1);
      if (tempStr.length > str.length) {
        str = tempStr;
        strs.push(tempStr);
      }
    }
    if (left - 1 >= 0 && s[left - 1] === s[right]) {
      const tempStr = find(s, left - 1, right);
      if (tempStr.length > str.length) {
        str = tempStr;
        strs.push(tempStr);
      }
      continue;
    }
    strs.push(s[i]);
    if (str.length < 1) {
      str = s[i];
    }
  }
  console.log(strs);
  return str;
};

function find(s, left, right) {
  while (left >= 1 && right < s.length - 1) {
    if (s[left - 1] === s[right + 1]) {
      left--;
      right++;
      continue;
    }
    break;
  }
  return s.slice(left, right + 1);
}
// @lc code=end
longestPalindrome('a');
