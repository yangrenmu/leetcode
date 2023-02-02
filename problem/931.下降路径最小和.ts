/*
 * @lc app=leetcode.cn id=931 lang=typescript
 *
 * [931] 下降路径最小和
 *
 * https://leetcode.cn/problems/minimum-falling-path-sum/description/
 *
 * algorithms
 * Medium (67.22%)
 * Likes:    209
 * Dislikes: 0
 * Total Accepted:    51.8K
 * Total Submissions: 76.9K
 * Testcase Example:  '[[2,1,3],[6,5,4],[7,8,9]]'
 *
 * 给你一个 n x n 的 方形 整数数组 matrix ，请你找出并返回通过 matrix 的下降路径 的 最小和 。
 *
 * 下降路径
 * 可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列（即位于正下方或者沿对角线向左或者向右的第一个元素）。具体来说，位置
 * (row, col) 的下一个元素应当是 (row + 1, col - 1)、(row + 1, col) 或者 (row + 1, col + 1)
 * 。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：matrix = [[2,1,3],[6,5,4],[7,8,9]]
 * 输出：13
 * 解释：如图所示，为和最小的两条下降路径
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：matrix = [[-19,57],[-40,-5]]
 * 输出：-59
 * 解释：如图所示，为和最小的下降路径
 *
 *
 *
 *
 * 提示：
 *
 *
 * n == matrix.length == matrix[i].length
 * 1 <= n <= 100
 * -100 <= matrix[i][j] <= 100
 *
 *
 */

// @lc code=start
function minFallingPathSum(matrix: number[][]): number {
  const res: number[][] = [];
  res[0] = matrix[0];
  const n = matrix.length;
  if (n <= 1) return matrix[0][0];
  for (let row = 1; row < n; row++) {
    const temp: number[] = [];
    for (let col = 0; col < n; col++) {
      if (col === 0) {
        temp[col] =
          matrix[row][col] + Math.min(res[row - 1][col], res[row - 1][col + 1]);
      } else if (col === n - 1) {
        temp[col] =
          matrix[row][col] + Math.min(res[row - 1][col], res[row - 1][col - 1]);
      } else {
        temp[col] =
          matrix[row][col] +
          Math.min(
            res[row - 1][col - 1],
            res[row - 1][col],
            res[row - 1][col + 1]
          );
      }
    }
    res[row] = temp;
  }
  return Math.min(...res[n - 1]);
}
// @lc code=end
