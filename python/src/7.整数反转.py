#
# @lc app=leetcode.cn id=7 lang=python3
#
# [7] 整数反转
#
# https://leetcode-cn.com/problems/reverse-integer/description/
#
# algorithms
# Easy (32.49%)
# Likes:    1345
# Dislikes: 0
# Total Accepted:    190.8K
# Total Submissions: 577.3K
# Testcase Example:  '123'
#
# 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
#
# 示例 1:
#
# 输入: 123
# 输出: 321
#
#
# 示例 2:
#
# 输入: -123
# 输出: -321
#
#
# 示例 3:
#
# 输入: 120
# 输出: 21
#
#
# 注意:
#
# 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
#
#
class Solution:
    def reverse(self, x: int) -> int:
        result = 0
        negative = -1 if x < 0 else 1
        abs_x = abs(x)
        while abs_x != 0:
            _x = abs_x % 10
            result = result * 10 + _x
            abs_x = (abs_x - _x) / 10
        result *= -1 if x < 0 else 1
        return int(result) if result <= (pow(2, 31) -
                                         1) and result >= pow(-2, 31) else 0
