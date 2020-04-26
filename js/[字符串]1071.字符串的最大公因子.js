/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 *
 * https://leetcode-cn.com/problems/greatest-common-divisor-of-strings/description/
 *
 * algorithms
 * Easy (58.61%)
 * Likes:    135
 * Dislikes: 0
 * Total Accepted:    25.3K
 * Total Submissions: 43.1K
 * Testcase Example:  '"ABCABC"\n"ABC"'
 *
 * 对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。
 *
 * 返回最长字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。
 *
 *
 *
 * 示例 1：
 *
 * 输入：str1 = "ABCABC", str2 = "ABC"
 * 输出："ABC"
 *
 *
 * 示例 2：
 *
 * 输入：str1 = "ABABAB", str2 = "ABAB"
 * 输出："AB"
 *
 *
 * 示例 3：
 *
 * 输入：str1 = "LEET", str2 = "CODE"
 * 输出：""
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= str1.length <= 1000
 * 1 <= str2.length <= 1000
 * str1[i] 和 str2[i] 为大写英文字母
 *
 *
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return '';
  }
  const gcdLen = gcd(str1.length, str2.length);
  return str1.substr(0, gcdLen);
};

function gcd(len1, len2) {
  if (len2 === 0 || len1 === 0) {
    return 0;
  }
  if (len1 < len2) {
    const temp = len1;
    len1 = len2;
    len2 = temp;
  }
  while (len1 % len2 !== 0) {
    const temp = len1 % len2;
    len1 = len2;
    len2 = temp;
  }
  return len2;
}
// @lc code=end
