/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


//以下为深度优先
const dfs = (root , preSum) => {
  if (root === null) {// 如果二叉树根节点为空，则返回0
      return 0
  } 
  const sum = preSum * 10 + root.val // 定义一个 sum 为当前节点的和值
  if (root.left === null & root.right === null) // 如果该节点为叶子节点，则直接返回sum
      return sum
  else { // 如果该节点不为叶子节点，则再循环遍历该节点的子节点，直到得到所有叶子节点
      return dfs(root.left,sum) + dfs(root.right,sum)
  }
}

var sumNumbers = function(root) {
  return dfs(root, 0)
};