/*
 * @lc app=leetcode.cn id=1234 lang=javascript
 *
 * [1234] 替换子串得到平衡字符串
 *
 * https://leetcode-cn.com/problems/replace-the-substring-for-balanced-string/description/
 *
 * algorithms
 * Medium (29.17%)
 * Likes:    23
 * Dislikes: 0
 * Total Accepted:    2.3K
 * Total Submissions: 7.9K
 * Testcase Example:  '"QWER"'
 *
 * 有一个只含有 'Q', 'W', 'E', 'R' 四种字符，且长度为 n 的字符串。
 *
 * 假如在该字符串中，这四个字符都恰好出现 n/4 次，那么它就是一个「平衡字符串」。
 *
 *
 *
 * 给你一个这样的字符串 s，请通过「替换一个子串」的方式，使原字符串 s 变成一个「平衡字符串」。
 *
 * 你可以用和「待替换子串」长度相同的 任何 其他字符串来完成替换。
 *
 * 请返回待替换子串的最小可能长度。
 *
 * 如果原字符串自身就是一个平衡字符串，则返回 0。
 *
 *
 *
 * 示例 1：
 *
 * 输入：s = "QWER"
 * 输出：0
 * 解释：s 已经是平衡的了。
 *
 * 示例 2：
 *
 * 输入：s = "QQWE"
 * 输出：1
 * 解释：我们需要把一个 'Q' 替换成 'R'，这样得到的 "RQWE" (或 "QRWE") 是平衡的。
 *
 *
 * 示例 3：
 *
 * 输入：s = "QQQW"
 * 输出：2
 * 解释：我们可以把前面的 "QQ" 替换成 "ER"。
 *
 *
 * 示例 4：
 *
 * 输入：s = "QQQQ"
 * 输出：3
 * 解释：我们可以替换后 3 个 'Q'，使 s = "QWER"。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 10^5
 * s.length 是 4 的倍数
 * s 中只含有 'Q', 'W', 'E', 'R' 四种字符
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function(s) {
  let charCount = getChartCount(s, 0, s.length);
  const average = s.length / 4;
  charCount = {
    Q: Math.max(charCount.Q - average, 0),
    W: Math.max(charCount.W - average, 0),
    E: Math.max(charCount.E - average, 0),
    R: Math.max(charCount.R - average, 0)
  };

  let initialSubLength = charCount.Q + charCount.W + charCount.E + charCount.R;
  if (initialSubLength === 0) {
    return 0;
  }
  const initialCount = getChartCount(s, 0, initialSubLength);
  while (initialSubLength < s.length) {
    const count = { ...initialCount };
    for (let i = 0; i <= s.length - initialSubLength; i++) {
      if (i > 0) {
        count[s[i - 1]]--;
        count[s[i + initialSubLength - 1]]++;
      }

      let matched = true;
      for (const k of Object.keys(charCount)) {
        if (charCount[k] !== 0 && charCount[k] > count[k]) {
          matched = false;
        }
      }
      if (matched) {
        return initialSubLength;
      }
    }
    initialCount[s[initialSubLength]]++;
    initialSubLength++;
  }
  return s.length;
};

function getChartCount(s, from, length) {
  const charCount = {
    Q: 0,
    W: 0,
    E: 0,
    R: 0
  };

  for (let i = 0; i < length; i++) {
    charCount[s[i + from]]++;
  }
  return charCount;
}
// @lc code=end
