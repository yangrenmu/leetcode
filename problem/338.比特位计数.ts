/*
 * @lc app=leetcode.cn id=338 lang=typescript
 *
 * [338] 比特位计数
 *
 * https://leetcode.cn/problems/counting-bits/description/
 *
 * algorithms
 * Easy (78.65%)
 * Likes:    1261
 * Dislikes: 0
 * Total Accepted:    312K
 * Total Submissions: 396.7K
 * Testcase Example:  '2'
 *
 * 给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans
 * 作为答案。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 2
 * 输出：[0,1,1]
 * 解释：
 * 0 --> 0
 * 1 --> 1
 * 2 --> 10
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 5
 * 输出：[0,1,1,2,1,2]
 * 解释：
 * 0 --> 0
 * 1 --> 1
 * 2 --> 10
 * 3 --> 11
 * 4 --> 100
 * 5 --> 101
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= n <= 10^5
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 很容易就能实现时间复杂度为 O(n log n) 的解决方案，你可以在线性时间复杂度 O(n) 内用一趟扫描解决此问题吗？
 * 你能不使用任何内置函数解决此问题吗？（如，C++ 中的 __builtin_popcount ）
 *
 *
 *
 *
 */

// @lc code=start
function countBits(n: number): number[] {
  const dp: number[] = [];
  dp[0] = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      dp[i] = dp[i / 2];
    } else {
      dp[i] = dp[i - 1] + 1;
    }
  }
  return dp;
}
// @lc code=end
