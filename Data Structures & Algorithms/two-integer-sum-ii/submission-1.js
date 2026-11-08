class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
       let p1 = 0
       let p2 = numbers.length - 1
       while(p1 < p2){
        const currentSum = numbers[p1] + numbers[p2]
        if(currentSum === target){
            return [p1 +1, p2 +1]
        }
        if(currentSum > target){
            p2--
        }

        if(currentSum < target){
            p1++
        }
       }
    }
}
