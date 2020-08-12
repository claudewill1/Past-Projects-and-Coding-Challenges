/* Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6

*/

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
public class Solution {
    
    public ListNode MergeKLists(ListNode[] lists) {
        return MergeKListsHelper(lists, 0, lists.Length - 1);
    }

    private ListNode MergeKListsHelper(ListNode[] lists, int low, int high) {
        if (low > high) return null;
        if (low == high) return lists[low];

        var mid = (high - low)/2 + low;
        var left = MergeKListsHelper(lists, low, mid);
        var right = MergeKListsHelper(lists, mid + 1, high);

        return Merge2Lists(left,right);
    }

    private ListNode Merge2Lists(ListNode left, ListNode right){
        if (left == null) return right;
        if (right == null) return left;

        var fakeHead = new ListNode();
        var start = fakeHead;
        while(left != null && right != null) {
            if(left.val < right.val)
            {
                start.next = left;
                start = start.next;

                left = left.next;
            } 
            else 
            {
                start.next = right;
                start = start.next;

                right = right.next;
            }
        }

        if(left != null)
        {
            start.next = left;
        }
        else 
        {
            start.next = right;
        }

        return fakeHead.next;

    }

    
}