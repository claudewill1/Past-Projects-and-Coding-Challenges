/*Given a binary tree, return the sum of values of nodes with even-valued grandparent.  (A grandparent of a node is the parent of its parent, if it exists.)

If there are no nodes with an even-valued grandparent, return 0.

 

Example 1:

Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 18
Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.

 

Constraints:

    The number of nodes in the tree is between 1 and 10^4.
    The value of nodes is between 1 and 100.
*/
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

 /*     Define a map called parent
    Define a method called solve(), this will take node and par
    if node is null, then return
    if par is not null and par is present in parent and parent[par] is not 0 and value of parent[par] is even, then
        res := res + value of node
    parent[node] := par
    solve(left of node, node)
    solve(right of node, node)
    From the main method, set res := 0, call solve(root, Null), then return res
    */
public class Solution {
    public int SumEvenGrandparent(TreeNode root) {
        var sum = 0;
        solve(root,null,null);
        return sum;
        
    }
    private void solve(TreeNode root, TreeNode parent, TreeNode grandparent){ 
        var sum = 0;
        if(root == null) return;
        if(grandparent!=null && (grandparent.val%2==0)){
            sum+=root.val;
        }
        solve(root.left,root,parent);
        solve(root.right,root,parent);
    }
}