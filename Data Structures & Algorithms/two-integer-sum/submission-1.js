class Solution {
    /**
     * two solutions: 
     * brute force
     * hash map with the indexes
     */
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * 
     */
    twoSum(nums, target) {
        const numsObj = {}
        nums.forEach((number, index) => {
            numsObj[number] = index
        })

        for (let i =0; i< nums.length; i++){
            const otherIndex = numsObj[target - nums[i]]
            if(otherIndex && otherIndex !== i){
                return [i, otherIndex]
            }
        }
    }
}
