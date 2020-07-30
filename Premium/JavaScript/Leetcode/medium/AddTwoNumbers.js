/**2. Add Two Numbers
Medium

You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single
 digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the 
number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

 */

const addTwoNumbers = (l1,l2) => {
    // create a new list 'list'
    // create variable for current node and 
    // assign list to it
    let list = new ListNode(0);
    let currNode = list;

    // variable sum to hold the value of adding nodes
    let sum = 0;
    // carry holds any number that will need to be carried to next node
    let carry = 0;

    while(l1 !== null || l2 !== null || sum > 0) {
        if(l1 !== null){
            sum += l1.val;
            l1 = l1.next;
        }
        
        if(l2 !== null){
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        sum = sum % 10;

        currNode.next = new ListNode(sum);
        currNode = currNode.next;

        sum = carry;
        carry = 0;
    }
    // return each node in list
    return list.next;
 }

 