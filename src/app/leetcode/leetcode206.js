// link: https://leetcode.com/problems/reverse-linked-list/description/

// C# solution
// public ListNode ReverseList(ListNode head) {
//     var curr = head;
//     ListNode prev = null;

//     while(curr != null)
//     {
//        var next = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = next;
//     }

// return prev;
// }
