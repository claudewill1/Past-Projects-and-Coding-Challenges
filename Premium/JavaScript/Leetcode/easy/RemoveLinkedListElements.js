/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * 
 * Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5


 */
var removeElements = function(head, val) {
    let temp = new ListNode(0);
    temp.next = head;
    let current = head;
    let prev = null;
    
    while(current!==null){
        if(current.val === val) {
            //if previous is not set
            if(!prev) {
                // remove head with its next element andmake temp.next point at a new head;
                // set new head to the current
                head = head.next;
                temp.next = head;
                current = head;
            } else {
                // if previous is set then set prvious's next to currents next and set current to
                // newly set prev.next
                prev.next = current.next;
                current = prev.next;
            }
        } else {
            // not a match then keep track of previous and keep moving forward
            prev = current;
            current = current.next;
        }
    }
    return temp.next;
};