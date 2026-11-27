/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root, count = 1) {
        if(!root){
            return 0
        }

        let leftCount = count
        let rightCount = count

        if(root.left){
            leftCount = this.maxDepth(root.left, count + 1)
        } if(root.right)[
            rightCount = this.maxDepth(root.right, count + 1)
        ]

        return Math.max(leftCount, rightCount)
    }
}
