class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        let leftPtr = 0
        let rightPtr = height.length -1
        let maxLeft = 0
        let maxRight = 0
        let accumulatedWater = 0

        while(leftPtr < rightPtr){
            maxLeft = Math.max(height[leftPtr], maxLeft)
            maxRight = Math.max(height[rightPtr], maxRight)

            if(height[leftPtr] < height[rightPtr]){
                accumulatedWater+= Math.min(maxLeft, maxRight) - height[leftPtr]
                leftPtr++
            } else {
                accumulatedWater+= Math.min(maxLeft, maxRight) - height[rightPtr]
                rightPtr--
            }
        }

        return accumulatedWater
    }
}

// manter um pointer na left wall
// se eu tiver alguma parede maior ou igual a minha right wall ela é minha nova left wall. Contar imediatamente agua acumulada
// ter um pointer de right wall tb. 
// pra ser right wall basta ser maior doq um item anterior