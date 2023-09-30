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
  // var for tracking last node

  // iterate over sll
  // if they are equal remove the current. if not do nothing

  // update node

  console.log("head");
  console.log(head.next);
  // console.log(head.length)
  // let lastNode = head
  // let i = head
  let a = head;
  let b = head.next;

  while (b !== undefined) {
    if (a?.val === b?.val) {
      a = b;
      b = b?.next;
    } else {
      b = b?.next;
      a = a?.next;
    }
  }

  return head;
};
