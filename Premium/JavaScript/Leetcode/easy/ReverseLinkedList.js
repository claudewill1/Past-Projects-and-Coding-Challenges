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
// O(n) time & O(1) space
var reverseList = function(head) {
    let node = head, prev = null;
    
    while (node) {
        // save next or you lose it!!!
        let save = node.next;
        // reverse pointer
        node.next = prev;
        // increment prev current node
        prev = node;
        // increment node to next node or null at end of list
        node = save;
    }
    
    return prev;
};