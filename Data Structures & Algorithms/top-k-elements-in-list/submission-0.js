class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsObj = {}
        nums.forEach(number => {
            if(!numsObj[number]){
                numsObj[number] = 1
            } else {
                numsObj[number] += 1
            }
        })

        const sorted = Object.entries(numsObj).sort((arr1, arr2) =>  arr2[1] - arr1[1]).map(entry => Number(entry[0]))

        return sorted.slice(0, k)
    }
}
