/*
 * @lc app=leetcode.cn id=870 lang=typescript
 *
 * [870] 优势洗牌
 *
 * https://leetcode.cn/problems/advantage-shuffle/description/
 *
 * algorithms
 * Medium (49.81%)
 * Likes:    353
 * Dislikes: 0
 * Total Accepted:    59.1K
 * Total Submissions: 118.4K
 * Testcase Example:  '[2,7,11,15]\n[1,10,4,11]'
 *
 * 给定两个大小相等的数组 nums1 和 nums2，nums1 相对于 nums2 的优势可以用满足 nums1[i] > nums2[i] 的索引 i
 * 的数目来描述。
 *
 * 返回 nums1 的任意排列，使其相对于 nums2 的优势最大化。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums1 = [2,7,11,15], nums2 = [1,10,4,11]
 * 输出：[2,11,7,15]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums1 = [12,24,8,32], nums2 = [13,25,32,11]
 * 输出：[24,32,8,12]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums1.length <= 10^5
 * nums2.length == nums1.length
 * 0 <= nums1[i], nums2[i] <= 10^9
 *
 *
 */

// @lc code=start
function advantageCount(nums1: number[], nums2: number[]): number[] {
  const numsSort1 = nums1.sort((a, b) => a - b);
  // numsObj2 对象保存原始数据索引，方便排序后，找到之前数据的位置
  const numsObj2 = nums2.map((value, index) => {
    return {
      index,
      value,
    };
  });
  const numsSort2 = numsObj2.sort((a, b) => b.value - a.value);

  const res: number[] = [];
  let left = 0;
  let right = nums1.length - 1;
  numsSort2.forEach((v) => {
    if (numsSort1[right] > v.value) {
      res[v.index] = numsSort1[right];
      right--;
    } else {
      res[v.index] = numsSort1[left];
      left++;
    }
  });
  return res;
}
// @lc code=end
