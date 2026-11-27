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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return null
        const queue = [root]
        let currQueueEl = 0

        while(currQueueEl < queue.length){
            const currElement = queue[currQueueEl]
            currQueueEl++
            
            const temp = currElement.left
            currElement.left = currElement.right
            currElement.right = temp

            if(currElement.left){
                queue.push(currElement.left)
            }
            if(currElement.right){
                queue.push(currElement.right)
            }
        }

        return root
    }
}