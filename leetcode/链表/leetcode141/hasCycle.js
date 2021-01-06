/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let current = head
  let map = new Map()
  while(current) {
      if( map.has(current) ) 
          return true
      map.set(current, true)
      current = current.next
  }
  return false
};