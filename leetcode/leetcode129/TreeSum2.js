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


 // 以下为广度优先：
 // 解题思路：需要维护两个队列，分别存储节点和节点对应的数字。
// 初始时，将根节点和根节点的值分别加入两个队列。每次从两个队列分别取出一个节点和一个数字，进行如下操作：
// 如果当前节点是叶子节点，则将该节点对应的数字加到数字之和；
// 如果当前节点不是叶子节点，则获得当前节点的非空子节点，并根据当前节点对应的数字和子节点的值计算子节点对应的数字，然后将子节点和子节点对应的数字分别加入两个队列。
// 搜索结束后，即可得到所有叶子节点对应的数字之和。
// 参考自力扣官方题解

var sumNumbers = function(root) {
  if (root === null) {
      return 0
  }
  const nodeArr = []
  const numArr = []
  let sum = 0
  nodeArr.push(root)
  numArr.push(root.val)
  while (nodeArr.length) {
      const node = nodeArr.shift()
      const num = numArr.shift()
      const left = node.left,right = node.right
      if (left === null && right === null) {
          sum += num
      } else {
          if (left !== null) {
              nodeArr.push(left)
              numArr.push(num * 10 + left.val)
          }
           if (right !== null) {
              nodeArr.push(right)
              numArr.push(num * 10 + right.val)
          }
      }

  }
  return sum
};