class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if(!nums.length){
            return 0
        }

        let searchingNum
        let currentSequenceSize = 1
        let maxSequenceSize = 1
        nums.sort((n1, n2) => n1 - n2).forEach(num => {
            if(searchingNum === undefined){
                searchingNum = num + 1
            }

            if(num > searchingNum){
                currentSequenceSize = 1
                searchingNum = num + 1
            } else if(searchingNum === num){
                currentSequenceSize++
                searchingNum++
            }

            if(currentSequenceSize > maxSequenceSize){
                maxSequenceSize = currentSequenceSize
            }

        })

        return maxSequenceSize
    }
}
