/** Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.

Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 const removeNthFromEnd = function(head, n) {
    if (n <= 0) {
        return head;
    }

    let dummy = new ListNode(0);
    dummy.next = head;

    let preDelete = dummy;

    for(let i = 0; i < n; i++) {
        if(head === null){
            return null;
        }
        head = head.next;
    }

    while (head !== null){
        preDelete = preDelete.next;
        head = head.next;
    }

    preDelete.next = preDelete.next.next;

    return dummy.next;
 };