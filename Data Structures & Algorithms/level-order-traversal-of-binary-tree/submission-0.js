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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root){
            return []
        }

        const queue = [root]
        const result = []
        
        let currEl = 0

        while(currEl < queue.length){
            const currQueueLength = queue.length
            result.push([])
            for(let i = currEl; i<currQueueLength; i++){
                result[result.length - 1].push(queue[i].val)
                if(queue[i].left){
                    queue.push(queue[i].left)
                }
                if(queue[i].right){
                    queue.push(queue[i].right)
                }

            }
            currEl = currQueueLength
        }

        return result
    }
}
