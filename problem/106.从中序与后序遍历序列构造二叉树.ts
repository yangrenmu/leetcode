/*
 * @lc app=leetcode.cn id=106 lang=typescript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 *
 * https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (72.43%)
 * Likes:    920
 * Dislikes: 0
 * Total Accepted:    253.5K
 * Total Submissions: 350.1K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder
 * 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
 * 输出：[3,9,20,null,null,15,7]
 *
 *
 * 示例 2:
 *
 *
 * 输入：inorder = [-1], postorder = [-1]
 * 输出：[-1]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= inorder.length <= 3000
 * postorder.length == inorder.length
 * -3000 <= inorder[i], postorder[i] <= 3000
 * inorder 和 postorder 都由 不同 的值组成
 * postorder 中每一个值都在 inorder 中
 * inorder 保证是树的中序遍历
 * postorder 保证是树的后序遍历
 *
 *
 */
export {};
// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function build(
  inorder: number[],
  inStart: number,
  inEnd: number,
  postorder: number[],
  postStart: number,
  postEnd: number
): TreeNode | null {
  if (inStart > inEnd) return null;
  const rootValue = postorder[postEnd];
  const rootIndex = inorder.indexOf(rootValue);
  const leftSize = rootIndex - inStart;
  const root = new TreeNode(rootValue);
  root.left = build(
    inorder,
    inStart,
    rootIndex - 1,
    postorder,
    postStart,
    postStart + leftSize - 1
  );
  root.right = build(
    inorder,
    rootIndex + 1,
    inEnd,
    postorder,
    postStart + leftSize,
    postEnd - 1
  );
  return root;
}

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  return build(
    inorder,
    0,
    inorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  );
}
// @lc code=end
