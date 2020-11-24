/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let p = head
  let pre = null // 定义一个空节点
  while(p) {
      let next = p.next // 保存指向的下一个节点
      p.next = pre // 将头节点指向空
      pre = p // 将当前节点保存为上一个节点
      p = next // 将该节点更新为下一节点
  }
  return pre
};