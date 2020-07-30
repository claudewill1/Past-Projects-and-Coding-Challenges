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

/** Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Return the linked list sorted as well.

Example 1:

Input: 1->2->3->3->4->4->5
Output: 1->2->5

Example 2:

Input: 1->1->1->2->3
Output: 2->3

 */
var deleteDuplicates = function(head) {
    let dummy = new ListNode(0),
        duplicate = null,
        node;
        
    dummy.next = head;
    node = head;
    prev = dummy;
    
    while (node && node.next) {
        if(node.val === duplicate || node.val === node.next.val) {
            duplicate = node.val;
            prev.next = node.next;
        } else {
            prev = prev.next;
        }
        node = node.next;
    }
    
    if(node && node.val === duplicate) {
        prev.next = null;
    }
    return dummy.next;
};