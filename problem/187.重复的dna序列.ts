/*
 * @lc app=leetcode.cn id=187 lang=typescript
 *
 * [187] 重复的DNA序列
 *
 * https://leetcode.cn/problems/repeated-dna-sequences/description/
 *
 * algorithms
 * Medium (53.06%)
 * Likes:    443
 * Dislikes: 0
 * Total Accepted:    123.4K
 * Total Submissions: 232.5K
 * Testcase Example:  '"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"'
 *
 * DNA序列 由一系列核苷酸组成，缩写为 'A', 'C', 'G' 和 'T'.。
 *
 *
 * 例如，"ACGAATTCCG" 是一个 DNA序列 。
 *
 *
 * 在研究 DNA 时，识别 DNA 中的重复序列非常有用。
 *
 * 给定一个表示 DNA序列 的字符串 s ，返回所有在 DNA 分子中出现不止一次的 长度为 10 的序列(子字符串)。你可以按 任意顺序
 * 返回答案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
 * 输出：["AAAAACCCCC","CCCCCAAAAA"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "AAAAAAAAAAAAA"
 * 输出：["AAAAAAAAAA"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= s.length <= 10^5
 * s[i]=='A'、'C'、'G' or 'T'
 *
 *
 */

// @lc code=start
function findRepeatedDnaSequences(s: string): string[] {
  const windows = {};
  const res: Set<string> = new Set();
  let subStr = "";
  let left = 0;
  let right = 10;

  while (right <= s.length) {
    subStr = s.slice(left, right);
    right++;
    left++;
    if (windows[subStr]) {
      res.add(subStr);
    } else {
      windows[subStr] = 1;
    }
  }

  return Array.from(res);
}
// @lc code=end
