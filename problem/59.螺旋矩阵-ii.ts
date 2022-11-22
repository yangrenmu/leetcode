/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 *
 * https://leetcode.cn/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (74.74%)
 * Likes:    873
 * Dislikes: 0
 * Total Accepted:    260.7K
 * Total Submissions: 349K
 * Testcase Example:  '3'
 *
 * 给你一个正整数 n ，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：n = 3
 * 输出：[[1,2,3],[8,9,4],[7,6,5]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：n = 1
 * 输出：[[1]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 *
 *
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
  const res: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let right = n - 1;
  let bottom = n - 1;
  let left = 0;
  let top = 0;
  let value = 1;
  while (value <= n * n) {
    // 上边一行
    if (top <= bottom) {
      for (let i = left; i <= right; i++) {
        res[top][i] = value++;
      }
      top++;
    }
    // 右边一列
    if (left <= right) {
      for (let i = top; i <= bottom; i++) {
        res[i][right] = value++;
      }
      right--;
    }
    // 下边一行
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res[bottom][i] = value++;
      }
      bottom--;
    }
    // 左边一列
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res[i][left] = value++;
      }
      left++;
    }
  }
  return res;
}
// @lc code=end
