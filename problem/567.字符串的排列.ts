/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 *
 * https://leetcode.cn/problems/permutation-in-string/description/
 *
 * algorithms
 * Medium (44.31%)
 * Likes:    801
 * Dislikes: 0
 * Total Accepted:    232.5K
 * Total Submissions: 524.5K
 * Testcase Example:  '"ab"\n"eidbaooo"'
 *
 * 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。
 *
 * 换句话说，s1 的排列之一是 s2 的 子串 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s1 = "ab" s2 = "eidbaooo"
 * 输出：true
 * 解释：s2 包含 s1 的排列之一 ("ba").
 *
 *
 * 示例 2：
 *
 *
 * 输入：s1= "ab" s2 = "eidboaoo"
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s1.length, s2.length <= 10^4
 * s1 和 s2 仅包含小写字母
 *
 *
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
  let left = 0;
  let right = 0;
  let valid = 0;
  const s1Obj = {};
  const windowObj = {};
  for (const key of s1) {
    if (s1Obj[key] === undefined) {
      s1Obj[key] = 0;
    }
    s1Obj[key]++;
    windowObj[key] = 0;
  }
  const len = Object.keys(s1Obj).length;
  while (right < s2.length) {
    const c = s2[right];
    right++;
    if (s1Obj[c]) {
      windowObj[c]++;
      if (windowObj[c] === s1Obj[c]) {
        valid++;
      }
    }
    // 因为是排列，所以窗口的长度大于等于 s1 的长度
    while (right - left >= s1.length) {
      if (valid === len) {
        return true;
      }
      const d = s2[left];
      left++;
      if (s1Obj[d]) {
        if (windowObj[d] === s1Obj[d]) {
          valid--;
        }
        windowObj[d]--;
      }
    }
  }
  return false;
}
// @lc code=end
