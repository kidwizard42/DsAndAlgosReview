// Link to problem: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
// not yet solved

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  // curr node to move across SLL
  // compare curr to next.
  // if equal move the curr.next one over curr.next = curr.next.next
  // note:DON'T move  curr to next node until cur and cur.next are not equal.
  // ELSE: curr = curr.next

  let curr = head;

  while (curr) {
    if (curr.val === curr?.next?.val) {
      curr.next = curr?.next?.next;
    } else {
      curr = curr?.next;
    }
  }

  return head;
};
