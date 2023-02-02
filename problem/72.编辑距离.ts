/*
 * @lc app=leetcode.cn id=72 lang=typescript
 *
 * [72] 编辑距离
 *
 * https://leetcode.cn/problems/edit-distance/description/
 *
 * algorithms
 * Hard (62.74%)
 * Likes:    2751
 * Dislikes: 0
 * Total Accepted:    332.9K
 * Total Submissions: 529.9K
 * Testcase Example:  '"horse"\n"ros"'
 *
 * 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。
 *
 * 你可以对一个单词进行如下三种操作：
 *
 *
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：word1 = "horse", word2 = "ros"
 * 输出：3
 * 解释：
 * horse -> rorse (将 'h' 替换为 'r')
 * rorse -> rose (删除 'r')
 * rose -> ros (删除 'e')
 *
 *
 * 示例 2：
 *
 *
 * 输入：word1 = "intention", word2 = "execution"
 * 输出：5
 * 解释：
 * intention -> inention (删除 't')
 * inention -> enention (将 'i' 替换为 'e')
 * enention -> exention (将 'n' 替换为 'x')
 * exention -> exection (将 'n' 替换为 'c')
 * exection -> execution (插入 'u')
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= word1.length, word2.length <= 500
 * word1 和 word2 由小写英文字母组成
 *
 *
 */
export {};
// @lc code=start
let minMatrix: number[][];

function dp(s1: string, len1: number, s2: string, len2: number): number {
  // 有一个字符串走完了，还剩下多少操作

  if (len1 < 0) return len2 + 1;
  if (len2 < 0) return len1 + 1;
  if (minMatrix[len1][len2] !== -1) return minMatrix[len1][len2];

  if (s1[len1] === s2[len2]) {
    minMatrix[len1][len2] = dp(s1, len1 - 1, s2, len2 - 1);
  } else {
    minMatrix[len1][len2] =
      Math.min(
        dp(s1, len1, s2, len2 - 1), // s1 插入一个，s1 原来的长度不变，s2 需要减少一个
        dp(s1, len1 - 1, s2, len2), // s1 删除一个，s1 原来的长度减一，s2 不变
        dp(s1, len1 - 1, s2, len2 - 1) // s1 替换一个，s1 原来的长度减一，s2 需要减一
      ) + 1;
  }
  return minMatrix[len1][len2];
}

function minDistance(word1: string, word2: string): number {
  const len1 = word1.length;
  const len2 = word2.length;
  // fill 传的参数是对象时，填充的是这个对象的引用
  minMatrix = new Array(len1).fill(-1).map(() => new Array(len2).fill(-1));
  return dp(word1, len1 - 1, word2, len2 - 1);
}
// @lc code=end
