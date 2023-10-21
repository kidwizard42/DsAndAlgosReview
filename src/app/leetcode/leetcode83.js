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

//  C# attempt without remembering the simple solution. happy it worked but I should have considered null being passed in.
// if(head is null) return head;

//         ListNode node = head;
//         while(node.next is not null){

//             if(node.val != node.next.val)
//             {
//                 node = node.next;
//             }
//             else if(node.val == node.next.val && node.next.next is not null)
//             {
//                 while(node.val == node.next.val && node.next.next is not null)
//                 {
//                     node.next = node.next.next;
//                 }
//                 if(node.val == node.next.val && node.next.next is null){
//                     node.next = null;
//                     continue;
//                 }

//                 node = node.next;
//             } else if (node.val == node.next.val && node.next.next is null)
//             {
//                 node.next = null;
//             }
//         }
//         return head;
