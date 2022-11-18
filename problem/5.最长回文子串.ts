/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 *
 * https://leetcode.cn/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (37.24%)
 * Likes:    5910
 * Dislikes: 0
 * Total Accepted:    1.3M
 * Total Submissions: 3.4M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "cbbd"
 * 输出："bb"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 1000
 * s 仅由数字和英文字母组成
 *
 *
 */

// @lc code=start

const palindrome = (str, left, right) => {
  let temp = "";
  while (left >= 0 && str[left] === str[right] && right < str.length) {
    temp = str.slice(left, right + 1);
    left--;
    right++;
  }
  return temp;
};

function longestPalindrome(s: string): string {
  if (s.length <= 1) return s;
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let s1 = palindrome(s, i, i);
    let s2 = palindrome(s, i, i + 1);
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
    if (res.length >= s.length / 2 && i >= s.length / 2) break;
  }
  return res;
}
// @lc code=end
