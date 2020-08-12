/*   Back to Chapter
 Path Sum III

You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

Example:

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11
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

 public class Solution {
    public int PathSum(TreeNode root, int sum) {
        var path = traverse(root, sum);
        return path;
    }

    private int traverse(TreeNode root, int sum) {
        var path = 0;
        if(root == null) {
           return 0;
        } else {
           path += calc(root,sum);
           path += traverse(root.left, sum);
           path += traverse(root.right, sum);
           return path;
        }
    }

    private int calc(TreeNode root, int sum) {
        if(root == null){
            return 0;
        } else if(root.val == sum) {
            return 1 + calc(root.left,sum-root.val)+calc(root.right,sum-root.val);
        } else {
            return calc(root.left,sum-root.val)+calc(root.right,root.val);
        }
    }

 }