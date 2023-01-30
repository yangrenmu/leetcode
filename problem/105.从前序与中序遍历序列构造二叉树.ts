/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (71.37%)
 * Likes:    1845
 * Dislikes: 0
 * Total Accepted:    454.2K
 * Total Submissions: 636.4K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder
 * 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * 输出: [3,9,20,null,null,15,7]
 *
 *
 * 示例 2:
 *
 *
 * 输入: preorder = [-1], inorder = [-1]
 * 输出: [-1]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= preorder.length <= 3000
 * inorder.length == preorder.length
 * -3000 <= preorder[i], inorder[i] <= 3000
 * preorder 和 inorder 均 无重复 元素
 * inorder 均出现在 preorder
 * preorder 保证 为二叉树的前序遍历序列
 * inorder 保证 为二叉树的中序遍历序列
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

function build105(
  preorder: number[],
  preStart: number,
  preEnd: number,
  inorder: number[],
  inStart: number,
  inEnd: number
): TreeNode | null {
  if (preStart > preEnd) {
    return null;
  }
  const rootValue = preorder[preStart];
  const rootIndex = inorder.indexOf(rootValue);
  const root = new TreeNode(rootValue);
  const leftSize = rootIndex - inStart;
  root.left = build105(
    preorder,
    preStart + 1,
    preStart + leftSize,
    inorder,
    inStart,
    rootIndex - 1
  );
  root.right = build105(
    preorder,
    preStart + leftSize + 1,
    preEnd,
    inorder,
    rootIndex + 1,
    inEnd
  );
  return root;
}

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  return build105(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1
  );
}
// @lc code=end
