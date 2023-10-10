/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 *
 * https://leetcode.cn/problems/sort-an-array/description/
 *
 * algorithms
 * Medium (54.50%)
 * Likes:    842
 * Dislikes: 0
 * Total Accepted:    533.4K
 * Total Submissions: 1M
 * Testcase Example:  '[5,2,3,1]'
 *
 * 给你一个整数数组 nums，请你将该数组升序排列。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [5,2,3,1]
 * 输出：[1,2,3,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [5,1,1,2,0,0]
 * 输出：[0,0,1,1,2,5]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 5 * 10^4
 * -5 * 10^4 <= nums[i] <= 5 * 10^4
 *
 *
 */

// @lc code=start
function merge(arr1: number[], arr2: number[]): number[] {
  const res = [];
  const n = arr1.length;
  const m = arr2.length;
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  while (i < n) {
    res.push(arr1[i]);
    i++;
  }
  while (j < m) {
    res.push(arr2[j]);
    j++;
  }
  return res;
}

function mergeSort(nums: number[]): number[] {
  const n = nums.length;
  if (n <= 1) return nums;
  const mid = n >> 1;
  return merge(mergeSort(nums.slice(0, mid)), mergeSort(nums.slice(mid)));
}

function sortArray(nums: number[]): number[] {
  const n = nums.length;
  if (n < 2) return nums;
  return mergeSort(nums);
}
// @lc code=end
