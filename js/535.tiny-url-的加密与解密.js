/*
 * @lc app=leetcode.cn id=535 lang=javascript
 *
 * [535] TinyURL 的加密与解密
 *
 * https://leetcode-cn.com/problems/encode-and-decode-tinyurl/description/
 *
 * algorithms
 * Medium (81.22%)
 * Likes:    62
 * Dislikes: 0
 * Total Accepted:    7.4K
 * Total Submissions: 9.1K
 * Testcase Example:  '"https://leetcode.com/problems/design-tinyurl"'
 *
 * TinyURL是一种URL简化服务， 比如：当你输入一个URL https://leetcode.com/problems/design-tinyurl
 * 时，它将返回一个简化的URL http://tinyurl.com/4e9iAk.
 *
 * 要求：设计一个 TinyURL 的加密 encode 和解密 decode
 * 的方法。你的加密和解密算法如何设计和运作是没有限制的，你只需要保证一个URL可以被加密成一个TinyURL，并且这个TinyURL可以用解密方法恢复成原本的URL。
 *
 */

// @lc code=start
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const Alphabet =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const urlDict = {};
const ENCODE_LENGTH = 6;
var encode = function(longUrl) {
  const encoded = randomString(ENCODE_LENGTH);
  while (urlDict[encoded] !== undefined) {
    encoded = randomString(ENCODE_LENGTH);
  }
  urlDict[encoded] = longUrl;
  return encoded;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  return urlDict[shortUrl];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

function randomString(n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    str += Alphabet[Math.floor(Math.random() * 62)];
  }
  return str;
}
// @lc code=end
