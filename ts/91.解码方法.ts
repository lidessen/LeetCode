/*
 * @lc app=leetcode.cn id=91 lang=typescript
 *
 * [91] 解码方法
 *
 * https://leetcode-cn.com/problems/decode-ways/description/
 *
 * algorithms
 * Medium (24.06%)
 * Likes:    448
 * Dislikes: 0
 * Total Accepted:    58K
 * Total Submissions: 241.2K
 * Testcase Example:  '"12"'
 *
 * 一条包含字母 A-Z 的消息通过以下方式进行了编码：
 *
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 *
 *
 * 给定一个只包含数字的非空字符串，请计算解码方法的总数。
 *
 * 示例 1:
 *
 * 输入: "12"
 * 输出: 2
 * 解释: 它可以解码为 "AB"（1 2）或者 "L"（12）。
 *
 *
 * 示例 2:
 *
 * 输入: "226"
 * 输出: 3
 * 解释: 它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
 *
 *
 */

// @lc code=start
function numDecodings(s: string): number {
  let dp: number[] = [];
  dp.push(0);
  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      if (isValid(s[i])) {
        dp[i] = 1;
      } else {
        return 0;
      }
    } else {
      dp[i] = dp[i - 1];
      if (s[i] !== '0') {
        if (isValid(s[i - 1] + s[i])) {
          dp[i] += dp[i - 2] || 1;
        }
      } else {
        if (!isValid(s[i - 1] + s[i])) {
          return 0;
        } else {
          dp[i] = dp[i - 2] || 1;
        }
      }
    }
  }
  return dp.pop() as number;
}

function isValid(s: string) {
  const code = Number(s);
  return code > 0 && code <= 26 && s[0] !== '0';
}
// @lc code=end
