/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode.cn/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (44.95%)
 * Likes:    2254
 * Dislikes: 0
 * Total Accepted:    368.3K
 * Total Submissions: 819.2K
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""
 * 。
 *
 *
 *
 * 注意：
 *
 *
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "a", t = "a"
 * 输出："a"
 *
 *
 * 示例 3:
 *
 *
 * 输入: s = "a", t = "aa"
 * 输出: ""
 * 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
 * 因此没有符合条件的子字符串，返回空字符串。
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * s 和 t 由英文字母组成
 *
 *
 *
 * 进阶：你能设计一个在 o(n) 时间内解决此问题的算法吗？
 */

// @lc code=start
function minWindow(s: string, t: string): string {
  let left = 0;
  let right = 0;
  let start = 0;
  let valid = 0;
  const windowObj = {};
  const tObj = {};
  for (const key of t) {
    if (tObj[key] === undefined) {
      tObj[key] = 0;
    }
    tObj[key]++;
    windowObj[key] = 0;
  }
  const len = Object.keys(tObj).length;
  let minLen = s.length + 1;

  while (right < s.length) {
    const c = s[right];
    right++;
    if (tObj[c]) {
      windowObj[c]++;
      if (windowObj[c] === tObj[c]) {
        valid++;
      }
    }
    while (valid === len) {
      if (right - left < minLen) {
        start = left;
        minLen = right - left;
      }
      const d = s[left];
      left++;

      if (tObj[d]) {
        if (windowObj[d] === tObj[d]) {
          valid--;
        }
        windowObj[d]--;
      }
    }
  }
  return minLen === s.length + 1 ? "" : s.slice(start, start + minLen);
}
// @lc code=end
